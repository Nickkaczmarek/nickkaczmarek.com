import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

import "./index.css";
import favicon from "../images/favicon.ico";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default ({ children }) => (
  <main>
    <Helmet
      title="Nick Kaczmarek"
      meta={[
        { name: "description", content: "Nick Kaczmarek" },
        { name: "keywords", content: "Nick Kaczmarek" },
      ]}
      link={[
        { rel: "shortcut icon", type: "image/x-icon", href: `${favicon}` },
      ]}
    />

    <header
      style={{
        background: "seagreen",
        marginBottom: "1.45rem",
        padding: "0.45rem 1.0875rem",
      }}>
      <nav>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>nickkaczmarek.com</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          {/* <ListLink to="/contact/">Contact</ListLink> */}
        </ul>
      </nav>
    </header>
    <section
      style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
      {children}
    </section>
  </main>
);
