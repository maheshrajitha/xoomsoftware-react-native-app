/* eslint-disable semi */
/* eslint-disable prettier/prettier */

import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { APP_FONT_SIZE , PRIMARY_COLOR } from '../constants/Values';
const StyledTouchableOpacity = styled.TouchableOpacity`
    height: ${props => props.height !== undefined ? props.height : Dimensions.get('screen').height / 20}px ;
    background-color: ${props=>props.buttonColor};
    width:${Dimensions.get('screen').width - 100}px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    margin-top:${props=> props.marginTop}px;
`
const ButtonText = styled.Text`
    color: ${props=> props.textColor !== undefined ? props.textColor : 'white'};
    font-size: ${APP_FONT_SIZE}px;
    font-weight: 300;
`

const PrimaryButton = props => (
    <StyledTouchableOpacity buttonColor={props.buttonColor} onPress={props.onPress} height={props.height} marginTop={props.marginTop}>
        <ButtonText textColor={props.textColor}>{props.text}</ButtonText>
    </StyledTouchableOpacity>
);
export default PrimaryButton;