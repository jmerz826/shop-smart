import React from "react";
import ListItem from "./listItem";

const CurrentList = (props) => {
    console.log(props.list);
    return (
        <div>
            <h3>Current List:</h3>
            {props.list.map(item => {
                return(
                    <ListItem item={item} />
                )
            })}
        </div>
    );
};

export default CurrentList;