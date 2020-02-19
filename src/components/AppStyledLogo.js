/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import logo from '../assets/calendar.png';
const LogoContainer = styled.View`
    background-color : transparent;
    justify-content: center;
    align-items: center;
`;
const Logo = styled.Image`
    height : ${props=> props.sm ? Dimensions.get('screen').height / 10 : Dimensions.get('screen').height / 7}px;
    width: ${props=> props.sm ? Dimensions.get('screen').height / 10 : Dimensions.get('screen').height / 7}px;
`
const AppLogoText = styled.Text`
    font-weight : 200;
    font-size: 25px;
    color : ${props=>props.logoTextColor};
`

const StyledLogo = props => (
    <LogoContainer>
        <Logo md={props.sm} source={logo} />
        <AppLogoText sm={props.sm} ellipsizeMode={'tail'} logoTextColor={props.logoTextColor}>My Appoinment</AppLogoText>
    </LogoContainer>
);

export default StyledLogo;