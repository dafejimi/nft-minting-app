/* eslint-disable react/prop-types */
import React from "react";

const sizes = {
  headingxs: "text-[16px] font-bold",
  headings: "text-[24px] font-bold md:text-[22px]",
  headingmd: "text-[60px] font-bold md:text-[52px] sm:text-[46px]",
};

const Heading = ({
  children,
  className = "",
  size = "headings",
  as,
  ...restProps
}) => {
  const Component = as || "h6";
  return (
    <Component
      className={`text-white-a700 font-inter ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
