import express from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import "dotenv/config";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import connectDB from "./db/connect.js";
import { typeDefs } from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.static(path.join(__dirname, "../client/build")));

const startServer = async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: false });

  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(
        `🚀 Local server running at http://localhost:${PORT}${apolloServer.graphqlPath}`
      );
    });
  } catch (err) {
    console.error("❌ Failed to start server", err);
  }
};

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

startServer();
