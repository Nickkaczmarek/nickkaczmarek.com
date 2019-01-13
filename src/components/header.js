import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";

const Header = ({ siteTitle }) => (
  <header>
    <nav
      css={css`
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h2
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
            color: black;
            &:hover {
              color: blue;
            }
          `}
        >
          {siteTitle}
        </h2>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
          margin-bottom: ${rhythm(2)};
        `}
      >
        <h3
          css={css`
            display: inline-block;
            font-style: normal;
            color: black;
            &:hover {
              color: blue;
            }
          `}
        >
          About
        </h3>
      </Link>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
