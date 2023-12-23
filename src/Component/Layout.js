import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
const Layout = ({ children, title }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70.8vh" }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
