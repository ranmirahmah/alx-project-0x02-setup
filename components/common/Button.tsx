import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  className = "",
  disabled,
  size = "medium",
  shape = "rounded-md",
}) => {
  // Size styles
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400
        ${sizeClasses[size]} ${shape} ${className}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
