import React, { useState } from "react";
import { connect } from "react-redux";
import { addListToLists } from '../../actions';
import CurrentList from "./currentList";
import styled from "styled-components";

const StyledNewList = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;

    form{
        margin-top:1%;
    }

    form label,input, button{
        font-size:1.2rem;
    }
    button{
        background-color:limegreen;
        border: none;
        border-radius: 8px;
        display:inline-block;
    }
    button:hover{
        background-color:lime;
    }
    #save-btn{
        display:block;
        margin:auto;
        padding:1%;
        margin-top:1%;
    }

`

const initialFormValues = {
    item: '',
    price:''
}

const NewList = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [list, setList] = useState('');
    const [total, setTotal] = useState(0);

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    };

    const handleAdd = (e) => {
        e.preventDefault();
        const newItem = {
            item: formValues.item,
            price: formValues.price
        }
        setList([...list, newItem]);
        setTotal(Number(total) + Number(newItem.price));
        setFormValues(initialFormValues);
        document.getElementById('item-input').focus();
        document.getElementById('item-input').select();
    };

    const handleSave = (e) => {
        e.preventDefault();
        const newList = [{...list, id:Date.now(), total:total}];
        props.addListToLists(newList);
        setList('');
        setTotal(0);
    }

    return (
        <StyledNewList>
            <h2>Create New Shopping List:</h2>
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
                <button onClick={handleSave} id='save-btn'>Save List!</button>
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