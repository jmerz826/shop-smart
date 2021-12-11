import React from "react";
import { connect } from "react-redux";
import OldList from "./oldList";

const OldLists = (props) => {
    return (
        <div>
            <h1>old lists:</h1>
            {props.previousLists && props.previousLists.map(list => {
                return (
                    <OldList list={list} key={list[0].id} />
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
