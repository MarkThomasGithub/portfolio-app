import React from 'react';
import styled from 'styled-components';
import Mailto from 'react-protected-mailto';

const ImgWrapper = styled.img`
    display: block;
    padding-top: 1em;
    border-radius: 50%;
    margin: auto;
`;

const H3Wrapper = styled.h3`
    font-weight: 1000;
    font-size: 1.2em;
    text-align: center;
    padding-top: 0.5em;
    color: #333;
`;

const PWrapper = styled.p`
    max-width: 50em;
    margin: auto;
    padding-top: 0.5em;
`;

const LabelWrapper = styled.p`
    font-weight: 700;
    text-align: center;
    display: inline;
`;

const CenterText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

const DivWrapper = styled.div`
    padding-left: 0.5em;
    padding-right: 0.5em;
`;

const AboutPage = () => {
    return (
        <DivWrapper>
            <ImgWrapper src="images/profile.jfif" />
            <H3Wrapper>Mark Thomas - Software Developer</H3Wrapper>
            <CenterText>
                <div>
                    <LabelWrapper>LinkedIn: </LabelWrapper>
                    <a href="https://www.linkedin.com/in/mark-thomas-tech/">https://www.linkedin.com/in/mark-thomas-tech/</a>
                </div>
                <div>
                    <LabelWrapper>Email: </LabelWrapper>
                    <Mailto
                        email='mark.e.thomas.1997@gmail.com'
                        headers={
                        {subject:"You're Hired!"}
                    }/>
                </div>
            </CenterText>

            <PWrapper>
            Software developer and recent Computer Science graduate with an interest in modern web development. Latest projects have involved React, Redux, NodeJS/Express, HTML5, CSS, JavaScript and MySQL. Notable works are discussed and shown in the projects section of LinkedIn. 
            </PWrapper>
        </DivWrapper>
    );
};

export default AboutPage;