import React from "react";
import ListItem from "./listItem";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledCurrentList = styled.div`
    text-align:center;
    background-color:beige;
    width:60%;
    margin-top:1%;
    border: 2px solid black;
    border-radius:16px;

    ul{
        list-style-type:circle;
        list-style-position:inside;
        font-size:1.2rem;
        display:inline-block;
        text-align:left;
        margin:0 auto;
        margin-bottom:1%;
    }
`;

class CurrentList extends React.Component{
  render() {
    return (
      <StyledCurrentList>
        <h3>Current List:</h3>
        {this.props.list && (this.props.total !== 0) ? <h4>Total: ${this.props.total}</h4> : ''}
        {!this.props.list && <h5>No items yet, add some stuff!</h5>}
        <ul>
          {this.props.list &&
            this.props.list.map((item) => {
              return <ListItem item={item} key={item.item} total={this.props.total}/>;
            })}
        </ul>
      </StyledCurrentList>
    );
  }
}

const mapStateToProps = state => {
  return ({
    currentListItems: state.currentListItems,
    total: state.listTotal
  })
}

export default connect(mapStateToProps)(CurrentList);