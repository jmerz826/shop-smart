import React from "react";
import { connect } from "react-redux";

const OldLists = (props) => {
    console.log(props.previousLists);
    return (
        <div>
            <h1>old lists:</h1>
            {props.previousLists && props.previousLists.map(list => {
                return (
                    <div>
                        <h4>List {list.id}</h4>
                    </div>
                )
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
