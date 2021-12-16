import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    .italic{
        font-style:italic;
    }

    li{
        text-transform: capitalize;
    }
`

const ListItem = (props) => {
    return (
        <StyledDiv>
            <li>{props.item.item} <span className="italic">{props.item.price ? ` - $${props.item.price}` : ''}</span></li>
        </StyledDiv>
    );
};

export default ListItem;