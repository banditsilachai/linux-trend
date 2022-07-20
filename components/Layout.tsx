import { Container } from "@mantine/core";
import Head from "next/head";
import seo from "../seo.config";
import React from "react";
type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container size={`md`}>
      <Head>
        <title>{seo.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </Container>
  );
};

export default Layout;
