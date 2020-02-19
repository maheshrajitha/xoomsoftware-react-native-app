/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, Animated , Text } from 'react-native';
import StyledLogo from '../components/AppStyledLogo';
import MainStyleSheet,{dynamicHeight} from '../styles/MainStyleSheet';
import { PRIMARY_COLOR } from '../constants/Values';
class WelcomeScreen extends React.Component{
    constructor(props) {
        super(props);
        this.logoOpacityAnimation = new Animated.Value(0);
        this.welcomeTextAnimation = new Animated.Value(0);
        this.logoAnimationStart();
        setTimeout(() => this.props.navigation.replace('Login'), 5000);
    }
    
    logoAnimationStart = () => {
        Animated.timing(this.logoOpacityAnimation, { toValue: 1, duration: 800 }).start();
        Animated.timing(this.welcomeTextAnimation, { toValue: 1, duration: 1000 }).start();
    }
    render() {
        return (
            <SafeAreaView style={[MainStyleSheet.flexBox1, MainStyleSheet.fullSizeContainer]}>
                <Animated.View style={[{opacity : this.logoOpacityAnimation},dynamicHeight(MainStyleSheet.hight25Container.height),MainStyleSheet.alignItemsCenter,MainStyleSheet.justifyContentCenter]}>
                    <StyledLogo logoTextColor={PRIMARY_COLOR}/>
                </Animated.View>
                <Animated.View style={[{opacity : this.welcomeTextAnimation},MainStyleSheet.hight25Container,MainStyleSheet.alignItemsCenter,MainStyleSheet.justifyContentCenter]}>
                    <Text>Make An Appoinment</Text>
                </Animated.View>
            </SafeAreaView>
        );
    }
}
export default WelcomeScreen;