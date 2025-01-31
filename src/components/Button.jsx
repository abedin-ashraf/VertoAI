import React from "react";

const Button = ({ Icon, onClick }) => (
    <span
        className="cursor-pointer flex items-center space-x-2"
        onClick={onClick}
    >
        <Icon size={22} />
    </span>
);

export default Button;