/* eslint-disable react/prop-types */
import React from "react";

const sizes = {
  textxs: "text-[12px] font-normal",
  texts: "text-[14px] font-normal",
  textmd: "text-[16px] font-normal",
  textlg: "text-[20px] font-normal",
};

const Text = ({ children, className = "", as, size = "texts", ...restProps }) => {
  const Component = as || "p";
  
  return (
    <Component
      className={`text-blue_gray-300 font-inter ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
