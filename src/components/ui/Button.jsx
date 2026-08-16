import React from "react";

/**
 * Botón reutilizable simple.
 * @param {{children: any, onClick?: Function, type?: string, className?: string}} props
 */
export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
  ...props
}) {
  const disabled = props.disabled;
  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      className={`btn ${className} ${disabled ? "btn--disabled" : ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
