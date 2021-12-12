import React from "react";
import { connect } from "react-redux";
import OldList from "./oldList";
import styled from "styled-components";

const StyledOldLists = styled.div`
    width: 20%;
    h2{
        text-align:center;
    }
    display:flex;
    flex-direction:column-reverse;
    justify-content:space-evenly;
`

const OldLists = (props) => {
    return (
        <StyledOldLists>
            {props.previousLists && props.previousLists.map(list => {
                return (
                    <OldList list={list} key={list[0].id} />
                );
            })}
            <h3>Previously Used Lists:</h3>
        </StyledOldLists>
    );
};

const mapStateToProps = state => {
    return ({
        previousLists: state.previousLists
    })
}

export default connect(mapStateToProps)(OldLists);
