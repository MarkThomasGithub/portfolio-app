import React from 'react';
import styled from 'styled-components';
import ImageElement from './ImageElement';

const ImgWrapper = styled.div`
    display: block;
    padding-top: 1em;
    border-radius: 50%;
    margin: auto;
    text-align: center;
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

const LogoContainerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    height: 3em;
    padding-top: 0.5em;
`
const LogoWrapper = styled.img`
    width: 3em;
    padding-right: 0.5em;
`

const AboutPage = () => {
    return (
        <DivWrapper>
            <ImgWrapper>
                <ImageElement img="/images/profile.jfif" newStyle={{ 'border-radius': '50%'}} />
            </ImgWrapper>
            <H3Wrapper>Mark Thomas - Software Developer</H3Wrapper>

            <PWrapper>
            Software developer and recent Computer Science graduate with an interest in modern web development. Latest projects have involved React, Redux, NodeJS/Express, HTML5, CSS, JavaScript and MySQL. Notable works are discussed and shown in the projects section of LinkedIn. 
            </PWrapper>

            <CenterText>
                <H3Wrapper>Contact</H3Wrapper>
                <div>mark.e.thomas.1997@gmail.com</div>
                <div>linkedin.com/in/mark-thomas-tech</div>
            </CenterText>
            <LogoContainerWrapper>
                <a href="https://www.linkedin.com/in/mark-thomas-tech" target="_blank">
                    <LogoWrapper src="/images/linkedin.svg" alt="LinkedIn link"></LogoWrapper>
                </a>
                <a href="mailto:mark.e.thomas.1997@gmail.com">
                    <LogoWrapper src="/images/gmail.svg" alt="Email link"></LogoWrapper>
                </a>
            </LogoContainerWrapper>
        </DivWrapper>
    );
};

export default AboutPage;