import React from "react";
import PropTypes from "prop-types";

const shapes = { 
  round: "rounded-[12px]",
};

const sizes = {
  xs: "h-[40px] pl-6 pr-4 text-[16px]",
  sm: "h-[48px] px-[34px] text-[16px]",
  md: "h-[58px] pl-8 pr-[26px] text-[16px]",
};

const variants = {
  fill: {
    blue_gray_900: "bg-blue-gray-900",
    blue_gray_900_7f: "bg-blue-gray-900 opacity-50",
    pink_300_deep_purple_A200: "bg-pink-300 text-deep-purple-A200",
  },
  gradient: {
    blue_gray_900: "bg-gradient-to-r from-gray-700 to-gray-900",
    blue_gray_900_7f: "bg-gradient-to-r from-gray-700 to-gray-900 opacity-50",
    pink_300_deep_purple_A200: "bg-gradient-to-r from-pink-300 to-deep-purple-A200",
  },
};


const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "gradient",
  size = "md",
  color = "blue_gray_900_7f",
  ...restProps
}) => {
  return (
    <button
      className={`
        ${className} flex flex-row items-center justify-center gap-2 text-center 
        cursor-pointer whitespace-nowrap text-white-a700 text-[16px] 
        ${shape && shapes[shape]} 
        ${size && sizes[size]} 
        ${variant && variants[variant]?.[color]}
      `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "gradient"]),
  color: PropTypes.oneOf([
    "blue_gray_900",
    "blue_gray_900_7f",
    "pink_300_deep_purple_A200",
  ]),
};

export { Button };
