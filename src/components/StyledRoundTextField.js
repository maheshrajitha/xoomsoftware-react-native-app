/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components/native';
import { APP_FONT_SIZE } from '../constants/Values';
import { Dimensions } from 'react-native';
const StyledTextArea = styled.TextInput`
    border-radius: ${props => props.isRounded ? '50px' : '0px'};
    width: ${Dimensions.get('screen').width - 100}px;
    height: ${props => props.height !== undefined ? props.height : Dimensions.get('screen').height / 20}px;
    background-color: ${props => props.transparent ? 'transparent' : '#C8C8C8'};
    text-align: center;
    font-size: ${APP_FONT_SIZE}px;
    margin-top: 8px;
    font-weight:200;
    border-width: ${props => props.transparent ? 1 : 0}px;
    border-color: blue;
`
const StyledTextInput = props => (
    <StyledTextArea
        onTouchStart={props.onTouchStart}
        isRounded={props.isRounded}
        secureTextEntry={props.isPassword}
        keyboardType={props.KeyboardType === undefined? 'default' : props.keyboardType}
        autoCapitalize={props.isPassword || props.email ? 'none' : 'sentences'}
        placeholder={props.placeholder}
        transparent={props.transparent}
        onChangeText={props.onChangeText} 
    />
);
export default StyledTextInput;