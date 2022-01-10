import React, {useState} from "react";
import styled from 'styled-components';
import { connect } from "react-redux";
import { removeListFromLists, populateCurrentList } from "../../actions";
import ModalListItem from "./modalListItem";

const StyledOldList = styled.div`
  border: 2px solid black;
  margin: 1%;
  padding-top: 4%;
  background-color: beige;
  h4,
  h5, h6 {
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

  .old-list-modal:hover{
    cursor:default;
  }

  .old-list-modal button{
    margin-top:2%;
  }

  .hidden{
      display:none;
  }

  #edit-old-list{
    font-size: 1rem;
  }
`;

const OldList = (props) => {
  const { list } = props;

  const [editingOldList, setEditingOldList] = useState(false);
  const [editListName, setNewListName] = useState(list[0]?.displayId);

  const expandOldList = (list) => {
    const modals = document.querySelectorAll(".old-list-modal");
    const modalsArray = Array.from(modals);
    const targetModal = modalsArray.find(
      (el) => Number(el.id) === Number(list.id)
    );

    targetModal.classList.remove("hidden");
  };

  const closeModal = (list) => {
    const modals = document.querySelectorAll(".old-list-modal");
    const modalsArray = Array.from(modals);
    const targetModal = modalsArray.find(
      (el) => Number(el.id) === Number(list.id)
    );

    targetModal.classList.add("hidden");
  };

  const handleDelete = (providedList) => {
    props.removeListFromLists(providedList);
  };

  const populateModal = () => {
    const arr = [];
    for (const key in list[0]) {
      arr.push(list[0][key]?.item);
    };
    for (let i = 0; i < 3; i++) {
      arr.pop();
    }
    return arr;
  };
  const modalPopulated = populateModal();

  const handleChange = (e) => {
    setNewListName(
      e.target.value
    );
  };

  const handleSaveNameChange = (e) => {
    e.preventDefault();
    list[0].displayId = editListName;
    setEditingOldList(false);
  }

  return (
    <StyledOldList>
      <div
        onClick={(e) => {
          if (e.target.id !== 'add-to-current-card' && e.target.id !== 'edit-old-list' && e.target.id !== 'new-list-name-input' && e.target.id !== 'save-list-name') {
            expandOldList(list[0]);
            console.log(list[0]);
          }
        }}
      >
        <span>
          {!editingOldList && <h4>{list[0].displayId}{!editingOldList && <span id="edit-old-list" onClick={() => setEditingOldList(true)}>📝</span>}</h4>}
          {editingOldList &&
            <form>
              <input
                name='newListName'
                id='new-list-name-input'
                type='text'
                value={editListName}
                onChange={handleChange}
              />
              <button onClick={handleSaveNameChange} id='save-list-name'>Save</button>
            </form>
          }          
        </span>
        <h6>{new Date(list[0].id).toLocaleDateString()}</h6>
        {list[0].total ? <h5>Total: ${list[0].total}</h5> : ''}
        <ul>
          <li>{list[0][0].item}</li>
          {list[0][1] && <li>{list[0][1]?.item}</li>}
          {list[0][2] && <li>{list[0][2]?.item}</li>}
          {list[0][3] ? <li>...</li> : ""}
        </ul>
        <div className="btns">
          <button id='add-to-current-card' className="reveal-on-hover" onClick={() => {
            props.populateCurrentList(populateModal());
          }
          }>Add to Current List</button>
          <button className="reveal-on-hover delete" onClick={() => {
            handleDelete(list);
          }}>Delete</button>
        </div>
      </div>

      <div className="old-list-modal hidden" id={list[0].id} onClick={() => closeModal(list[0])}>
        <h4>{list[0].displayId}</h4>
        <h6>List created on {new Date(list[0].id).toLocaleDateString()}</h6>
        <ul>
          {modalPopulated.map(el => {
            return (
              <ModalListItem item={el} key={el}/>
            );
          })}          
        </ul>
        <button onClick={() => {
            props.populateCurrentList(populateModal());
          }
          }>Add to Current List
        </button>
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

const mapStateToProps = state => {
  return ({
    state
  })
}

export default connect(mapStateToProps, {removeListFromLists, populateCurrentList})(OldList);