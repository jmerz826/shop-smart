import React, {useState} from "react";
import { connect } from 'react-redux';
import { addItemToPantry } from "../../actions";
import PantryItem from "./pantryItem";
import styled from "styled-components";

const StyledPantry = styled.div`
    background-color:lightgray;
    text-align:center;
    padding-top:1%;

    .container{
        display:flex;
        margin-top:1%;
        padding-bottom:1%;
    }
    form{
        width:50%;
    }
    .pantry-inventory{
        width:50%;
    }
    ul{
        list-style-type:circle;
        list-style-position:inside;
        margin-left:2%;
        font-size:1.2rem;
        display:inline-block;
        text-align:left;
        margin:0 auto;
        text-transform: capitalize;
    }
`

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

        if (formValues.item) {
            const newItem = formValues.item.toLowerCase();
            props.addItemToPantry(newItem);
            setFormValues(initialFormValues);
        }
    }

    return (
      <StyledPantry>
        <h2>Update your Pantry</h2>
        <div className="container">
          <form>
            <h3>Add item to My Pantry</h3>
            <label>
              {" "}
              Item:
              <input
                name="item"
                type="text"
                value={formValues.item}
                            onChange={handleChange}
                            placeholder="eg: Apples"
              />
            </label>
            <button onClick={handleSubmit}>Add to Pantry!</button>
          </form>
          <div className="pantry-inventory">
            <h3>My Pantry</h3>
            <ul>
              {props.pantryItems
                ? props.pantryItems.map((item) => {
                    return <PantryItem item={item} key={item} />;
                  })
                : "nothing in pantry yet!"}
            </ul>
          </div>
        </div>
      </StyledPantry>
    );
};

const mapStateToProps = state => {
    const { pantryItems } = state;

    return { pantryItems };
}

export default connect(mapStateToProps, {addItemToPantry})(PantryItems);