/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard , View, Dimensions, Alert } from 'react-native';
import MainStyleSheet, { dynamicHeight } from '../styles/MainStyleSheet';
import StyledRoundTextField from '../components/StyledRoundTextField';
import StyledButton from '../components/StyledRoundedButton';
import { SECONDARY_COLOR, PRIMARY_COLOR } from '../constants/Values';
import StyledAppLogo from '../components/AppStyledLogo';
import { signup } from '../services/user.service';
class SignupScreen extends Component{
    state = {
        isKeyboardShow : false
    }
    constructor(props) {
        super(props);
        this._isKeyboardShow = Keyboard.addListener('keyboardDidShow', this._isKeyboardShow);
        this._isNotKeyboardShow = Keyboard.addListener('keyboardDidHide', this._isNotKeyboardShow);
    }
    componentWillUnmount() {
        //Keyboard.removeAllListeners();
        Keyboard.removeListener('keyboardDidShow');
        Keyboard.removeListener('keyboardDidHide');
    }
    _isKeyboardShow = () => { this.setState({ isKeyboardShow: true });}
    _isNotKeyboardShow = () => { this.setState({ isKeyboardShow: false }); };

    firstNameChangeHandler = firstNameValue => this.firstName = firstNameValue;
    lastNameChangeHandler = lastNameValue => this.lastName = lastNameValue;
    emailChangeHandler = emailValue => this.email = emailValue;
    passwordChangeHandler = passwordValue => this.password = passwordValue;

    signupButtonHandler = () => {
        signup(this.firstName, this.lastName, this.password, this.email).then(response => {
            this.props.navigation.goBack();
        }).catch(err => {
            Alert.alert('Signup Error', err.message);
        })
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={[MainStyleSheet.flexBox1, MainStyleSheet.fullSizeContainer, MainStyleSheet.alignItemsCenter, MainStyleSheet.justifyContentCenter]}>
                    {!this.state.isKeyboardShow &&
                        <View style={[MainStyleSheet.halfHeightContainer, MainStyleSheet.alignItemsCenter, MainStyleSheet.justifyContentCenter]}>
                            <StyledAppLogo logoTextColor={PRIMARY_COLOR}/>
                        </View>
                    }
                    <View style={[MainStyleSheet.alignItemsCenter, MainStyleSheet.justifyContentCenter, MainStyleSheet.halfHeightContainer]}>
                        <StyledRoundTextField placeholder={'Firstname'} transparent isRounded onChangeText={this.firstNameChangeHandler}/>
                        <StyledRoundTextField placeholder={'Lastname'} transparent isRounded onChangeText={this.lastNameChangeHandler}/>
                        <StyledRoundTextField placeholder={'Emai Address'} transparent isEmail isRounded onChangeText={this.emailChangeHandler}/>
                        <StyledRoundTextField placeholder={'Password'} transparent isPassword isRounded />
                        <StyledRoundTextField placeholder={'Re-type Password'} transparent isPassword isRounded onChangeText={this.passwordChangeHandler}/>
                        <StyledButton onPress={this.signupButtonHandler} text={'Signup'} buttonColor={SECONDARY_COLOR} marginTop={Dimensions.get('screen').height / 30}/>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        );
    }
}
export default SignupScreen;