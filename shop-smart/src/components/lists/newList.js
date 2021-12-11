import React, { useState } from "react";
import { connect } from "react-redux";
import { addListToLists } from '../../actions';
import CurrentList from "./currentList";

const initialFormValues = {
    item: '',
    price:''
}

const NewList = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [list, setList] = useState('');


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
        setFormValues(initialFormValues);
    };

    const handleSave = (e) => {
        e.preventDefault();
        const newList = [{...list, id:Date.now()}];
        props.addListToLists(newList);
        setList('');
    }

    return (
        <div>
            <h2>Create New Shopping List:</h2>
            <form>
                <label> Add item: 
                    <input
                        type='text'
                        name='item'
                        value={formValues.item}
                        onChange={handleChange}
                        placeholder="ex: Eggs"
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
                <button onClick={handleAdd}>Add item!</button>
                <button onClick={handleSave}>Save List!</button>
            </form>
            <CurrentList list={list} />
        </div>
    );
};

const mapStateToProps = state => {
    return ({
        previousLists: state.previousLists
    })
}

export default connect(mapStateToProps, {addListToLists})(NewList);