/* eslint-disable no-spaced-func */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { SafeAreaView, TouchableWithoutFeedback , Keyboard, Dimensions } from 'react-native';
import MainStyleSheet from '../styles/MainStyleSheet';
import StyledTextInput from '../components/StyledRoundTextField';
import DatePicker from '@react-native-community/datetimepicker';
import StyledPrimaryButton from '../components/StyledRoundedButton';
import { PRIMARY_COLOR } from '../constants/Values';
class AddAppoinmentScreen extends Component{

    state = {
        name: null,
        note: null
    }

    constructor(props) {
        super(props);
    }

    changeNameHandler = (nameValue) => this.name = nameValue ;
    changeDateHandler = (dateValue) => this.setDate = dateValue;
    changeNoteHandler = (noteValue) => this.note = noteValue;
    addAppoinmentButtonHandler = () => console.log(this.setDate);

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={[MainStyleSheet.flexBox1, MainStyleSheet.alignItemsCenter, MainStyleSheet.justifyContentCenter, MainStyleSheet.fullSizeContainer]}>
                    <StyledTextInput placeholder={'Firstname'} onChangeText={this.changeNameHandler} transparent isRounded/>
                    <DatePicker testID={'datePicker'} mode={'date'} value={new Date().getTime()} onChange={this.changeDateHandler} />
                    <StyledTextInput placeholder={'Notes'} onChangeText={this.changeNoteHandler} transparent isRounded />
                    <StyledPrimaryButton onPress={this.addAppoinmentButtonHandler} buttonColor={PRIMARY_COLOR} text={"Add Appoinment"} marginTop={Dimensions.get('screen').height / 40} />
                </SafeAreaView>
            </TouchableWithoutFeedback>
        );
    }
    
}

export default AddAppoinmentScreen;