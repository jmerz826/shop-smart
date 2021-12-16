import React from "react";
import ListItem from "./listItem";
import styled from "styled-components";

const StyledCurrentList = styled.div`
    text-align:center;

    ul{
        list-style-type:circle;
        list-style-position:inside;
        margin-left:2%;
        font-size:1.2rem;
        display:inline-block;
        text-align:left;
        width:100%;
    }
`

const CurrentList = (props) => {
  return (
    <StyledCurrentList>
      <h3>Current List:</h3>
      {props.list && <h4>Total: ${props.total}</h4>}
      {!props.list && <h5>No items yet, add some stuff!</h5>}
      <ul>
        {props.list &&
          props.list.map((item) => {
            return <ListItem item={item} key={item.item} />;
          })}
      </ul>
    </StyledCurrentList>
  );
};

export default CurrentList;