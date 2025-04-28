import React from "react";
import { About, Header, TopPicks } from "../components";

const HomePage = () => {
  return (
    <main className="section-center">
      <Header />
      <TopPicks />
      <About />
    </main>
  );
};

export default HomePage;
