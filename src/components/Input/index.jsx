/* eslint-disable no-undef */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";

const shapes = {  
  round: "rounded-lg",
};

const variants = {  
  fill: {    
    blue_gray_900: "bg-blue_gray-900 text-blue_gray-200",  
  },
};

const sizes = {  
  xs: "h-[50px] px-3.5 text-[16px]",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "xs",
      color = "blue_gray_900",
      ...restProps
    },
    ref
  ) => {
    return (
      <label 
        htmlFor={name}
        className={`
          ${className} flex items-center justify-center cursor-text 
          text-blue_gray-200 text-[16px] border-blue_gray-800 border 
          border-solid rounded-lg 
          ${shape && shapes[shape]} 
          ${variant && (variants[variant]?.[color] || variants[variant])} 
          ${size && sizes[size]}
        `}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          className="w-full bg-transparent focus:bg-transparent focus:outline-none"
          {...restProps}
        />
        {!!suffix && suffix}
      </label>
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["blue_gray_900"]),
};

export { Input };
