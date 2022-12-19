import React from "react";
import AddButton from "./Add-Button";

const Header = ({ onAdd, showAdd }) => {
    return (
        <header className="header">
            <h3 className="title">Tasks</h3>
            <AddButton onClick={onAdd} text={showAdd ? "Close" : "Add"} />
        </header>
    );
};

export default Header;
