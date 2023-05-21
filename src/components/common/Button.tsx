import React from "react";

function CustomButton(props: any) {
  const { className, children, ...rest } = props;

  return (
    <button className={`px-4 py-1 bg-main rounded-lg text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 ${className}`} {...rest}>
      {children}
    </button>
  );
}

export { CustomButton };
