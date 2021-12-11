import React, { useState } from "react";
import { connect } from "react-redux";

const initialFormValues = {
    item: '',
    price:''
}

const NewList = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues);

    const handleChange = (e) => {
        console.log(formValues);
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
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
                        placeholder="Eggs"
                    />
                </label>
                <label> Price:
                    <input
                        type='number'
                        name='price'
                        value={formValues.price}
                        onChange={handleChange}
                        placeholder="optional"
                    />
                </label>
            </form>
        </div>
    );
};



export default NewList;