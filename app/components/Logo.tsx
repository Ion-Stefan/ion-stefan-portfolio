import Image from "next/image";
import React from "react";
import logo from "../../public/logo_black.svg";

export const Logo = () => {
  return (
    <a>
      <p className="text-3xl font-semibold font-mono mt-[35px] text-[#888888] hover:text-[#f5f5f5]">
        ION STEFAN
      </p>
      {/* <Image */}
      {/*   src={logo} */}
      {/*   className="invert w-16 h-16 mt-[30px]" */}
      {/*   alt="Ion Stefan logo" */}
      {/*   width={60} */}
      {/*   height={60} */}
      {/* /> */}
    </a>
  );
};
