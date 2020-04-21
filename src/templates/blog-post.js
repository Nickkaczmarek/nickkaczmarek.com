import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { DiscussionEmbed } from "disqus-react";

export default ({ data }) => {
  const post = data.markdownRemark;
  // const siteTitle = post.frontmatter.title;
  // const { previous, next } = data.pageContext;
  const disqusShortname = "nickkaczmarek-com";
  const disqusConfig = {
    identifier: post.id,
    title: post.frontmatter.title
  };
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
