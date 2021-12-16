import React from "react";
import ListItem from "./listItem";
import styled from "styled-components";

const StyledCurrentList = styled.div`
    text-align:center;
`

const CurrentList = (props) => {
    return (
        <StyledCurrentList>
            <h3>Current List:</h3>
            {props.list && <h4>Total: ${ props.total}</h4>}
            {!props.list && <h5>No items yet, add some stuff!</h5> }
            {props.list && props.list.map(item => {
                return(
                    <ListItem item={item} key={ item.item}/>
                )
            })}
        </StyledCurrentList>
    );
};

export default CurrentList;