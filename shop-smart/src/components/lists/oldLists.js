import React from "react";
import { connect } from "react-redux";
import OldList from "./oldList";

const OldLists = (props) => {
    console.log(props.previousLists);
    return (
        <div>
            <h1>old lists:</h1>
            {props.previousLists && props.previousLists.map(list => {
                return (
                    <OldList list={list} key={list.id} />
                );
            })}
        </div>
    );
};

const mapStateToProps = state => {
    return ({
        previousLists: state.previousLists
    })
}

export default connect(mapStateToProps)(OldLists);
