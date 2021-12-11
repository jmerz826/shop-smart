import React from "react";
import ListItem from "./listItem";

const CurrentList = (props) => {
    console.log('rendering current list');
    console.log(props.list);
    return (
        <div>
            <h3>Current List:</h3>
            {!props.list && <h4>No items yet, add some stuff!</h4> }
            {props.list && props.list.map(item => {
                return(
                    <ListItem item={item} key={ item.item}/>
                )
            })}
        </div>
    );
};

export default CurrentList;