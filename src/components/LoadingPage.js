import React from 'react';
import styled from 'styled-components';

const DivWrapper = styled.div`
    height: auto;
    width: auto;
    padding-left: 1em;
    padding-right: 1em;
    border-radius: 1em;
    background-color: white;
    text-align: center;
    justify-content: center;
    align-self: center;
`;

const LoadingPage = () => (
    <DivWrapper>
        <h1>Loading...</h1>
    </DivWrapper>
);

export default LoadingPage;