import React from "react";
import styled from 'styled-components';

const StyledOldList = styled.div`
    border: 2px solid black;
    margin:1%;
`

const OldList = (props) => {
    const { list } = props;
    
    return (
        <StyledOldList>
            <h4>List {list[0].id}</h4>
            <ul>
                <li>{list[0][0].item}</li>
                <li>{list[0][1]?.item}</li>
                <li>{list[0][2]?.item}</li>
                {list[0][3] ? <li>...</li> : ''}
            </ul>
        </StyledOldList>
    );
};

export default OldList;