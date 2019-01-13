import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

// const ListLink = props => (
//   <li style={{ display: `inline-block`, marginRight: `1rem` }}>
//     <Link to={props.to}>{props.children}</Link>
//   </li>
// );

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: "seagreen",
      marginBottom: "1.45rem",
      padding: "1.45rem 1.0875rem"
    }}
  >
    <nav>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h1 style={{ display: `inline` }}>{siteTitle}</h1>
      </Link>
      {/* <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
      </ul> */}
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
