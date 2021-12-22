import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { removeItemFromPantry } from "../../actions";

const StyledLi = styled.li`
    button{
        border: none;
        visibility: hidden;
    }
    :hover{
        button{
            visibility:visible;
            background-color:transparent;
            
        }
    }
    button:hover{
        cursor:pointer;
        -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2);
    }

`

const PantryItem = (props) => {
    const { item } = props;

    const handleDelete = (i) => {
        props.removeItemFromPantry(i);        
    }
    return (
        <StyledLi>{item}<button onClick={() => {
            handleDelete(item)
        }
        }>❌</button></StyledLi>
    );
};

const mapStateToProps = state => {
    return ({
        state
    });
};

export default connect(mapStateToProps, {removeItemFromPantry})(PantryItem);