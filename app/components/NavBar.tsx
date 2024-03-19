import React from "react";
import { Logo } from "./Logo";
import Header from "./header";

function NavBar() {
  return (
    <>
      <div className="flex px-4 sm:px-[calc(2vw+38px)] items-center justify-start">
        <Logo />
        <Header />
      </div>
    </>
  );
}

export default NavBar;
