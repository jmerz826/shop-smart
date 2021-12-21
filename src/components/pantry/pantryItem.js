import React from "react";

const PantryItem = (props) => {
    const { item } = props;
    return (
        <li>{item}</li>
    );
};

export default PantryItem;