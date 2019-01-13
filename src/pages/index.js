import React, { Fragment } from "react";
import Link from "gatsby-link";

const IndexPage = () => (
  <div>
    <h1>Hi, I'm Nick Kaczmarek</h1>
    <p>I build things for the web and anything else I can.</p>
    <Link to="/about/">About</Link>
  </div>
);

export default IndexPage;
