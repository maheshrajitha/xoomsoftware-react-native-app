/* eslint-disable no-spaced-func */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { SafeAreaView, View, Dimensions, FlatList, Text , StyleSheet, TouchableOpacity, RefreshControl } from 'react-native';
import MainStyleSheet, { dynamicHeight } from '../styles/MainStyleSheet';
import { SECONDARY_COLOR, PRIMARY_COLOR, APP_FONT_SIZE } from '../constants/Values';
import { connect } from 'react-redux';
import { getMyAppoinmentsFromApi } from '../services/appoinment.service';
import { getMyAppoinments } from '../store/actions/appoinment.action';
import { withNavigationFocus } from 'react-navigation'

const colors = [PRIMARY_COLOR, SECONDARY_COLOR];
class AppoinmentScreen extends Component{
    state = {
        refresh : false
    }
    constructor(props) {
        super(props);
    }
    fetchAppoinments = () => {
        getMyAppoinmentsFromApi().then(async appoinments => {
            await this.props.getMyAppoinments(appoinments);
        }).catch(e => {
            console.log(e);
        })
    }
    refresh = () => {
        this.setState({ refresh: true });
        setTimeout(() => {
            this.fetchAppoinments();
            this.setState({ refresh: false });
        }, 4000);
    }
    componentDidMount() {
        this.focusListener = this.props.navigation.addListener('focus', () => {
            console.log('focus');
            this.fetchAppoinments();
        });
    }
    componentWillUnmount() {
        //this.focusListener.remove();
    }
    render() {
        return (
            <SafeAreaView style={[MainStyleSheet.flexBox1, MainStyleSheet.fullSizeContainer, MainStyleSheet.justifyContentCenter, MainStyleSheet.alignItemsCenter]}>
                <FlatList
                    data={this.props.myAppoinmentsList}
                    renderItem={({ item , index }) => (
                        <View style={[MainStyleSheet.hight25Container,MainStyleSheet.fullWidthContainer,MainStyleSheet.justifyContentCenter,MainStyleSheet.alignItemsCenter]}>
                            <Text style={appoinmentScreenStyles.appoinmentText}>{item.name} {new Date(Date.parse(item.date)).getDate()}</Text>
                        </View>
                    )}
                    keyExtractor={(item)=> item.id}
                    refreshControl={<RefreshControl refreshing={this.state.refresh} onRefresh={this.refresh}/>}
                />
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('NewAppoinment')} style={appoinmentScreenStyles.floatinActionButton}>
                    <Text style={appoinmentScreenStyles.appoinmentText}>+</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
    
}
const appoinmentScreenStyles = StyleSheet.create({
    floatinActionButton: {
        position: 'absolute',
        height: Dimensions.get('screen').width / 8,
        width: Dimensions.get('screen').width / 8,
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: Dimensions.get('screen').width / 15,
        right: Dimensions.get('screen').width / 15
    },
    appoinmentText: {
        fontSize: APP_FONT_SIZE,
        color: 'black'
    }
});

const mapStateToProps = state => {
    return {
        myAppoinmentsList: state.appoinments.appoinments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMyAppoinments: myAppoinments => {
            dispatch(getMyAppoinments(myAppoinments));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (AppoinmentScreen);