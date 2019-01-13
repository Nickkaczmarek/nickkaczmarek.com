import React from "react";

import Layout from "../components/layout.js";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Nick Kaczmarek`, `nickkaczmarek.com homepage`]} />
    <header>
      <h1>Hi, I'm Nick Kaczmarek</h1>
    </header>
    <p>
      I build things for the web and I live in the United States with my wife
      and dog.
    </p>
    <div style={{ maxWidth: `35vw`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
);

export default IndexPage;
