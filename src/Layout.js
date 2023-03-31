import { Outlet } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";

const Layout = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href={window.location.pathname}>首頁</a>
          </li>
          <li>
            <button id="scroll-to-top-btn" onClick={handleScrollToTop}></button>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
