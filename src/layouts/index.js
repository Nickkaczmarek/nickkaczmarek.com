import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "./index.css";

const Header = () => (
  <header
    style={{
      background: "seagreen",
      marginBottom: "1.45rem",
    }}>
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
      }}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}>
          nickkaczmarek.com
        </Link>
      </h1>
    </div>
  </header>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Nick Kaczmarek's Blog"
      meta={[
        { name: "description", content: "Nick Kaczmarek's Blog" },
        { name: "keywords", content: "Nick Kaczmarek" },
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0,
      }}>
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
