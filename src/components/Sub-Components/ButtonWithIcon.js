import React from "react";

const ButtonWithIcon = ({ title = 'Send', icon, clickHandler }) => {
  return (
    <button
        onClick={(e) => clickHandler(e)}
        type="button"
        className="flex flex-row items-center px-10 py-2.5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 text-white font-medium text-xs leading-tight 
        uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700
        focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    >
        {icon}&nbsp;
        {title}
    </button>
  );
};

export default ButtonWithIcon;
