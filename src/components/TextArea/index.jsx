/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-lg",
};

const variants = {
  tarOutlineBluegray800: "!border-blue_gray-800 border border-solid bg-blue_gray-900",
};

const sizes = {
  xs: "h-[96px] p-4 text-[16px]",
};

const TextArea = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      shape,
      size = "xs",
      variant = "tarOutlineBluegray800",
      onChange,
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e); // Pass the full event object
    };

    return (
      <textarea
        ref={ref}
        className={`
          ${className} 
          ${shape && shapes[shape]} 
          ${size && sizes[size]} 
          ${variant && variants[variant]}
        `}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        {...restProps}
      />
    );
  }
);

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["tarOutlineBluegray800"]),
  onChange: PropTypes.func,
};

export { TextArea };
