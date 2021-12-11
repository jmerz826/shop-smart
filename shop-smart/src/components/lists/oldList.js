import React from "react";

const OldList = (props) => {
    const { list } = props;
    return (
        <div>
            <h4>List {list.id}</h4>
            <ul>
                <li>{list[0].item}</li>
                <li>...</li>
            </ul>
        </div>
    );
};

export default OldList;