import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";

import "../styles/index.css";

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
        <Header siteTitle={data.site.siteMetadata.title} />
        <main
          css={css`
            margin: 0 auto;
            max-width: 1200px;
            padding: 0 ${rhythm(2)};
            @media (max-width: 576px) {
              margin: 0;
              padding: 0 10vw;
            }
          `}
        >
          {children}
        </main>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
