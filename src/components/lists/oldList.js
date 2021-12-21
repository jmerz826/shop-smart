import React from "react";
import styled from 'styled-components';

const StyledOldList = styled.div`
  border: 2px solid black;
  margin: 1%;
  padding-top: 4%;
  background-color: beige;
  h4,
  h5 {
    text-align: center;
  }
  ul {
    list-style-type: circle;
    list-style-position: inside;
    margin-left: 2%;
    font-size: 1.2rem;
  }
  li {
    text-transform: capitalize;
  }

  .reveal-on-hover {
    visibility: hidden;
    display: block;
    margin: auto;
    margin-bottom: 1%;
    background-color: black;
    color: beige;
    border: none;
    padding: 1%;
    border-radius: 4px;
  }

  :hover {
    cursor: pointer;
    .reveal-on-hover {
      visibility: visible;
    }
  }
  .btns {
    display: flex;
    margin: 0 10%;
  }

  .old-list-modal {
    border-radius: 16px;
    background-color: #feca70;
    border: 4px solid black;
    position: fixed;
    z-index: 1;
    top: 0;
    margin-top: 10%;
    margin-left: 36.5%;
    padding: 1%;
    width: 25%;
    text-align: center;
  }

  .hidden{
      display:none;
  }
`;

const OldList = (props) => {
    const { list } = props;

    

    const expandOldList = (list) => {
        const modals = document.querySelectorAll('.old-list-modal');
        const modalsArray = Array.from(modals);
        const targetModal = modalsArray.find(el => Number(el.id) === Number(list.id));

        targetModal.classList.remove('hidden');
    }

    const closeModal = (list) => {
        const modals = document.querySelectorAll('.old-list-modal');
        const modalsArray = Array.from(modals);
        const targetModal = modalsArray.find(el => Number(el.id) === Number(list.id));

        targetModal.classList.add('hidden');
    }
    
    return (
      <StyledOldList>
        <div onClick={() => {
          expandOldList(list[0]);
        }}>
          <h4>List {list[0].displayId}</h4>
          <h5>Total: ${list[0].total}</h5>
          <ul>
            <li>{list[0][0].item}</li>
            {list[0][1] && <li>{list[0][1]?.item}</li>}
            {list[0][2] && <li>{list[0][2]?.item}</li>}
            {list[0][3] ? <li>...</li> : ""}
          </ul>
          <div className="btns">
            <button className="reveal-on-hover">Set to Current</button>
            <button className="reveal-on-hover delete">Delete</button>
          </div>
        </div>
        <div className="old-list-modal hidden" id={list[0].id} onClick={() => {closeModal(list[0])}}>
          <h4>List {list[0].displayId}</h4>
          <ul>
            <li>{list[0][0].item}</li>
            {list[0][1] && <li>{list[0][1]?.item}</li>}
            {list[0][2] && <li>{list[0][2]?.item}</li>}
          </ul>
          <button
            onClick={() => {
              closeModal(list[0]);
            }}
          >
            Close Window
          </button>
        </div>
      </StyledOldList>
    );
};

export default OldList;