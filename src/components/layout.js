import React from "react";
import { Link } from "gatsby";
import { IdentityContextProvider } from "react-netlify-indentity-widget";

import "./layout.css";

const Layout = ({ children }) => (
  <IndentityContextProvider url="https://fem-jamstack-intro-auth.netlify.com">
    <header>
      <Link to="/">JAMStack App</Link>
    </header>
    <main>{children}</main>
  <IndentityContextProvider/>
);

export default Layout;
