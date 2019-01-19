import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import { css } from "@emotion/core";
import styled from "@emotion/styled";

const padAnchor = css`
  a {
    padding-right: 0.5rem;
    color: black;
    &:hover {
      color: blue;
    }
  }
`;
const StyledNav = styled.nav`
  display: flex;
  ${padAnchor};
`;

const RightNav = styled.nav`
  display: flex;
  margin-left: auto;
  ${padAnchor};
`;

const ToggleButton = styled.button``;

const StyledHeader = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  padding: 1rem;
  font-family: sans-serif;
  color: white;

  ${ToggleButton} {
    display: none;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    a {
      flex-direction: column;
    }
    ${StyledNav} {
      display: none;
    }
    ${ToggleButton} {
      display: flex;
      border: none;
      font-size: 2rem;
      float: right;
    }
  }
`;

function ToggleMenu() {
  const navbar = document.querySelector("nav");
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
    navbar.style.marginTop = "0";
  } else {
    navbar.style.display = "block";
    Array.from(navbar.children).forEach(c => {
      const child = c;
      if (child.tagName === "NAV") {
        child.style.display = "block";
        Array.from(child.children).forEach(a => (a.style.display = "block"));
      } else {
        child.style.display = "block";
      }
    });
    navbar.style.marginTop = "5vh";
    navbar.style.marginLeft = "10vw";
  }
  // document.querySelector("[class*=ToggleButton]").style.display = "none";
}

const StyledLink = styled(Link)`
  font-size: 1.5rem;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <ToggleButton onClick={() => ToggleMenu()}>&#9776;</ToggleButton>
    <StyledNav>
      <StyledLink to={"/"}>{siteTitle}</StyledLink>
      {/* <Link to={"/"}>{siteTitle}</Link> */}
      <RightNav>
        <StyledLink to={"blog/who-am-i"}>About</StyledLink>
        <StyledLink to={"archive"}>Posts</StyledLink>
      </RightNav>
    </StyledNav>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
