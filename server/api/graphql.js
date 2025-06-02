import { ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors";
import { typeDefs } from "../graphql/typeDefs.js";
import resolvers from "../graphql/resolvers/index.js";
import connectDB from "../db/connect.js";

const cors = Cors({
  origin: "*",
  allowCredentials: true,
  allowMethods: ["POST", "GET", "OPTIONS"],
  allowHeaders: ["Content-Type", "Authorization"],
});

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, res }) => {
    return { req, res };
  },
});

const startServer = apolloServer.start().then(() => {
  const handler = apolloServer.createHandler({ path: "/api/graphql" });

  return async (req, res) => {
    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }

    if (!global._mongoConnected) {
      await connectDB(process.env.MONGO_URI);
      global._mongoConnected = true;
    }

    return handler(req, res);
  };
});

export default cors(async (req, res) => {
  const handler = await startServer;
  return handler(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
