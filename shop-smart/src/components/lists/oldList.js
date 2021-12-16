import React from "react";
import styled from 'styled-components';

const StyledOldList = styled.div`
    border: 2px solid black;
    margin:1%;
    h4, h5{
        text-align: center;
    }
    ul{
        list-style-type:circle;
        list-style-position:inside;
        margin-left:2%;
        font-size:1.2rem;
    }
    li{
        text-transform:capitalize;
    }
`

const OldList = (props) => {
    const { list } = props;
    
    return (
        <StyledOldList>
            <h4>List {list[0].id}</h4>
            <h5>Total: ${ list[0].total}</h5>
            <ul>
                <li>{list[0][0].item}</li>
                {list[0][1] && <li>{list[0][1]?.item}</li>}
                {list[0][2] && <li>{list[0][1]?.item}</li>}
                {list[0][3] ? <li>...</li> : ''}
            </ul>
        </StyledOldList>
    );
};

export default OldList;