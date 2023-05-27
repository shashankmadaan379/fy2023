import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const AppLayout = ({ children }) => {
  return (
    <section>
      <Header />

      <main>{children}</main>
      <Footer />
    </section>
  );
};

export default AppLayout;
