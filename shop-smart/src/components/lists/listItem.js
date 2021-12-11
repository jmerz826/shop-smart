import React from "react";

const ListItem = (props) => {
    return (
        <div>
            <ul>
                <li>{props.item.item} {props.item.price? `($${props.item.price})` : ''}</li>
            </ul>
        </div>
    )
}

export default ListItem;