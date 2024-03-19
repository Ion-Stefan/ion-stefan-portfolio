import React from "react";
import AnimatedCursor from "react-animated-cursor";

export const Cursor = () => {
  return (
    <AnimatedCursor
      innerSize={30}
      outerSize={60}
      color="242, 46, 46"
      outerAlpha={0.33}
      innerScale={1.4}
      outerScale={2}
      trailingSpeed={6}
    />
  );
};
