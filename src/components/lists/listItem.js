import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { removeItemFromCurrentList, updateTotal } from '../../actions';

const StyledDiv = styled.div`
    .italic{
        font-style:italic;
    }

    li{
        text-transform: capitalize;
    }
    .delete-btn{
        background-color: transparent;
        visibility:hidden;
    }
    .delete-btn:hover{
        background-color:transparent;
        cursor:pointer;
        -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2);
    }
    :hover{
        button{
            visibility:visible;
        }
    }

`

const ListItem = (props) => {
    const { pantryItems } = props;

    const pantrySearch = (i) => {
        return pantryItems.includes(i);
    }

    const totalAdder = (newItemPrice) => {
        console.log(props.total);
        const currentTotal = (props.total === undefined) ? Number(0) : Number(props.total);
          return Number(currentTotal + Number(newItemPrice));
    }

    const handleDelete = (x) => {
        props.removeItemFromCurrentList(x);
        console.log(Number(x.price));
        props.updateTotal(totalAdder(Number(-x.price)));
    }

    return (
        <StyledDiv>
            <li>
                {props.item.item}
                <span className="italic">{props.item.price ? ` - $${props.item.price}` : ''}</span>
                {pantryItems && pantrySearch(props.item.item) && <span> 👍</span>}
                <button className="delete-btn" onClick={() => {
                    handleDelete(props.item);
                }}>❌</button>
            </li>
        </StyledDiv>
    );
};

const mapStateToProps = (state) => {
    return ({
        pantryItems: state.pantryItems,
        total: state.listTotal
    })
};

export default connect(mapStateToProps, {removeItemFromCurrentList, updateTotal})(ListItem);