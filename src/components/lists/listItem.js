import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledDiv = styled.div`
    .italic{
        font-style:italic;
    }

    li{
        text-transform: capitalize;
    }
    .delete-btn{
        background-color: transparent;
    }
    .delete-btn:hover{
        background-color:transparent;
        cursor:pointer;
        -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2);
    }
`

const ListItem = (props) => {
    const { pantryItems } = props;

    const pantrySearch = (i) => {
        return pantryItems.includes(i);
    }

    return (
        <StyledDiv>
            <li>
                {props.item.item}
                <span className="italic">{props.item.price ? ` - $${props.item.price}` : ''}</span>
                {pantryItems && pantrySearch(props.item.item) && <span> 👍</span>}
                <button className="delete-btn">❌</button>
            </li>
        </StyledDiv>
    );
};

const mapStateToProps = (state) => {
    return ({
        pantryItems: state.pantryItems
    })
};

export default connect(mapStateToProps)(ListItem);