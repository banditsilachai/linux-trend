import type { NextPage } from "next";
import Example from "../components/Example";
import Resources from "../components/Resources";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Example />
      <Resources />
    </Layout>
  );
};

export default Home;
