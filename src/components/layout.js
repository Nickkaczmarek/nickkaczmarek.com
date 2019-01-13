import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <main
          css={css`
            margin: 0 auto;
            max-width: 900px;
            padding: 0 ${rhythm(2)};
          `}
        >
          <Header siteTitle={data.site.siteMetadata.title} />
          {children}
        </main>
        {/* <footer style={{ position: "relative", bottom: 0, left: 0 }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
