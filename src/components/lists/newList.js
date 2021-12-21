import React, { useState } from "react";
import { connect } from "react-redux";
import { addListToLists } from '../../actions';
import CurrentList from "./currentList";
import styled from "styled-components";

const StyledNewList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom:1%;

  form {
    margin-top: 1%;
    width: 60%;
  }

  form label,
  input,
  button {
    font-size: 1.2rem;
  }
  button {
    background-color: limegreen;
    border: none;
    border-radius: 8px;
    display: inline-block;
  }
  button:hover {
    background-color: lime;
  }
  .bottom-btn {
    display: block;
    margin: auto;
    padding: 2%;
    margin-top: 1%;
  }
  .bottom-buttons {
    display: flex;
    margin: 0 35%;
    margin-top: 1%;
  }

  #clear-modal {
    border-radius: 16px;
    background-color: #feca70;
    border: 4px solid black;
    position: fixed;
    z-index: 1;
    top: 0;
    margin-top: 10%;
    padding: 1%;
    width: 40%;
    text-align: center;
  }

  #clear-modal button {
    background-color: beige;
    margin: 0 2%;
    margin-top: 2%;
    border: 1px solid black;
  }

  .hidden{
      display:none;
  }
`;

const initialFormValues = {
    item: '',
    price:''
}

let idCounter = 0;

const NewList = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [list, setList] = useState('');
    const [total, setTotal] = useState(0);
    

    const modal = document.querySelector('#clear-modal');


  const idGenerator = () => {
    idCounter++;
    return idCounter;
    }
  
    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    };

    const handleAdd = (e) => {
      e.preventDefault();
      if (formValues.item) {
        const newItem = {
          item: formValues.item,
          price: formValues.price,
        };
        setList([...list, newItem]);
        setTotal(Number(total) + Number(newItem.price));
        setFormValues(initialFormValues);
        document.getElementById("item-input").focus();
        document.getElementById("item-input").select();
      }
    };

    const handleSave = (e) => {
        e.preventDefault();
        if (list) {
            const newList = [{ ...list, displayId: idGenerator(), total: total, id: Date.now() }];
            props.addListToLists(newList);
            setList("");
            setTotal(0);
        }
    };

    const toggleModal = (e) => {
        e.preventDefault();
        modal.classList.toggle('hidden');
    }

    const handleClear = (e) => {
        e.preventDefault();
        setList('');
        toggleModal(e);
    }

    return (
        <StyledNewList>
            <h2>Create New Shopping List:</h2>
            <div id='clear-modal' className="hidden">
                <h4>Are you sure you want to clear current list?</h4>
                <button onClick={handleClear}>Yes, clear list</button>
                <button onClick={toggleModal}>Oops, no</button>
            </div>
            <form>
                <label> Add item: 
                    <input
                        type='text'
                        name='item'
                        value={formValues.item}
                        onChange={handleChange}
                        placeholder="ex: Eggs"
                        id='item-input'
                    />
                </label>
                <label> Price($):
                    <input
                        type='number'
                        name='price'
                        value={formValues.price}
                        onChange={handleChange}
                        placeholder="optional"
                    />
                </label>
                <button onClick={handleAdd}>Add item</button>
                <div className="bottom-buttons">
                    <button onClick={handleSave} className='bottom-btn'>Save List!</button>
                    <button onClick={toggleModal} className='bottom-btn'>Clear List</button>
                </div>
            </form>
            <CurrentList list={list} total={ total}/>
        </StyledNewList>
    );
};

const mapStateToProps = state => {
    return ({
        previousLists: state.previousLists
    })
}

export default connect(mapStateToProps, {addListToLists})(NewList);