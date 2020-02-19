/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { SafeAreaView, View , Keyboard , TouchableWithoutFeedback, Dimensions , Animated , Text, Alert} from 'react-native';
import MainStyleSheet,{dynamicHeight} from '../styles/MainStyleSheet';
import StyledPrimaryButton from '../components/StyledRoundedButton';
import StyledLogo from '../components/AppStyledLogo';
import { SECONDARY_COLOR, PRIMARY_COLOR } from '../constants/Values';
import StyledRoundedTextField from '../components/StyledRoundTextField';
import { login } from '../store/actions/user.action';
import { userLogin } from '../services/auth.service';
import { connect } from 'react-redux';
class LoginScreen extends Component{
    state = {
        isKeyboardShow : false,
        email : null,
        password : null
    }
    constructor(props) {
        super(props);
        this._isKeyboardShow = Keyboard.addListener('keyboardDidShow', this._isKeyboardShow);
        this._isNotKeyboardShow = Keyboard.addListener('keyboardDidHide', this._isNotKeyboardShow);
        this.opacityAnimation = new Animated.Value(0);
    }
    componentWillUnmount() {
        //Keyboard.removeAllListeners();
        Keyboard.removeListener('keyboardDidShow');
        Keyboard.removeListener('keyboardDidHide');
    }
    emailValueChangeHandler = (emailValue) => { this.email = emailValue;}
    passwordValueChangeHAndler = (passwordValue) => { this.password = passwordValue;}
    loginButtonHandler = () => {
        if (this.email !== (null || undefined) && this.password !== (null || undefined)) {
            userLogin(this.email, this.password).then(async reponseFromLogin => {
                await this.props.userLogin(reponseFromLogin);
                this.props.navigation.replace('Appoinment');
            }).catch(e => {
                alert('error occured');
            });
        } else {
            Alert.alert('Warning', 'Please Fill All The Fields');
        }
    }
    _isKeyboardShow = () => { this.setState({ isKeyboardShow: true }); this.animateStart();}
    _isNotKeyboardShow = () => { this.setState({ isKeyboardShow: false }); this.opacityAnimation.setValue(0)};
    animateStart = () => {
        Animated.timing(this.opacityAnimation, { toValue: 1 , duration : 3000}).start();
    }
    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={[MainStyleSheet.fullSizeContainer,MainStyleSheet.flexBox1]}>
                    {!this.state.isKeyboardShow && 
                        <View style={[MainStyleSheet.hight25Container, MainStyleSheet.alignItemsCenter, MainStyleSheet.justifyContentCenter]}>
                            <StyledLogo logoTextColor={SECONDARY_COLOR}/>
                        </View>
                    }
                    {this.state.isKeyboardShow &&
                        <Animated.View style={[{opacity : this.opacityAnimation},MainStyleSheet.alignItemsCenter,MainStyleSheet.justifyContentCenter,{height : '40%'}]}>
                            <StyledLogo sm logoTextColor={SECONDARY_COLOR}/>
                        </Animated.View>
                    }
                    <View style={[dynamicHeight(MainStyleSheet.hight25Container.height),  this.state.isKeyboardShow ? MainStyleSheet.justifyContentStart : MainStyleSheet.justifyContentCenter, MainStyleSheet.alignItemsCenter]}>
                        <StyledRoundedTextField
                            transparent
                            placeholder={'Type Your Email Address'}
                            isEmail={true}
                            isRounded
                            keyboardType={'email-address'}
                            onChangeText={this.emailValueChangeHandler}
                        />
                        <StyledRoundedTextField
                            transparent
                            placeholder={'Type Your Password'}
                            isPassword={true}
                            isRounded
                            keyboardType={'email-address'}
                            onChangeText={this.passwordValueChangeHAndler}
                        />
                        <View style={[MainStyleSheet.thirtyPercentHeightContainer]}>
                            <StyledPrimaryButton onPress={this.loginButtonHandler} buttonColor={PRIMARY_COLOR} text={"Login"} marginTop={Dimensions.get('screen').height / 40} />
                            <StyledPrimaryButton onPress={()=> this.props.navigation.navigate('Signup')} buttonColor={SECONDARY_COLOR} text={'Signup'} marginTop={Dimensions.get('screen').height / 35} />
                            <StyledPrimaryButton textColor={SECONDARY_COLOR} buttonColor={'transparent'} text={'Forget Password'} marginTop={Dimensions.get('screen').height / 40}/>
                        </View>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        );
    }
}
// const mapStateToProps = state => (
//     return {
//         userDetails: state.user.userDetails
//     }
// );
const mapStateToProps = state => {
    return {
        userDetails: state.user.userDetails
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogin: userDetails => {
            dispatch(login(userDetails));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);