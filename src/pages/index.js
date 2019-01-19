import React from "react";
import { css } from "@emotion/core";

import Layout from "../components/layout.js";
import Image from "../components/image";
import SEO from "../components/seo";

function calculateCareerLength() {
  const startDate = new Date(2015, 10, 1);
  const today = new Date();
  const hoursSinceStart = Math.abs((today - startDate) / 36e5);
  const daysSinceStart = hoursSinceStart / 24;
  const yearsSinceStart = daysSinceStart / 365;
  return yearsSinceStart;
}

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`Nick Kaczmarek`, `nickkaczmarek.com homepage`]}
    />
    <div
      css={css`
        @media (min-width: 650px) {
          float: right;
          width: 65%;
          margin-left: 5%;
          text-align: right;
        }
      `}
    >
      <header>
        <h1>Hi, I'm Nick Kaczmarek</h1>
      </header>
      <p>
        I build things for the web and I live in the United States with my wife
        and dog. I've been an engineer for about {calculateCareerLength()} years
        and I really enjoy what I do.
      </p>
    </div>
    <Image />
  </Layout>
);

export default IndexPage;
