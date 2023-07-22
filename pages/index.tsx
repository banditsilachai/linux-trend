import type { NextPage } from "next";
import Example from "../components/Example";
import Resources from "../components/Resources";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import TopTen from "../components/TopTen";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <TopTen />
      <Example />
      <Resources />
    </Layout>
  );
};

export default Home;
