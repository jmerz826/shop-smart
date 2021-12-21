import React, {useState} from "react";
import { connect } from 'react-redux';
import { addItemToPantry } from "../../actions";
import PantryItem from "./pantryItem";

const initialFormValues = {
    item:''
}

const PantryItems = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues);

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        const newItem = formValues.item;
        props.addItemToPantry(newItem);
        setFormValues(initialFormValues);
    }

    return (
        <div>
            <h2>Update your Pantry</h2>
            <form>
                <h3>Add item to My Pantry</h3>
                <label> Item:
                    <input
                        name='item'
                        type='text'
                        value={formValues.item}
                        onChange={handleChange}
                    />
                </label>
                <button onClick={handleSubmit}>Add to Pantry!</button>
            </form>
            <div>
                <h3>My Pantry</h3>
                <ul>
                    {
                        props.pantryItems ? props.pantryItems.map(item => {
                            return <PantryItem item={item} key={item}/>
                        }) : 'nothing in pantry yet!'
                    }
                </ul>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return ({
        pantryItems: state.pantryItems
    })
}

export default connect(mapStateToProps, {addItemToPantry})(PantryItems);