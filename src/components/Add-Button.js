import React from "react";
import PropTypes from "prop-types";

const AddButton = ({ onClick, text }) => {
    return (
        <button className="add-button" onClick={onClick} type="button">
            {text}
        </button>
    );
};

AddButton.propTypes = {
    text: PropTypes.string,
    addTask: PropTypes.func,
};

export default AddButton;
