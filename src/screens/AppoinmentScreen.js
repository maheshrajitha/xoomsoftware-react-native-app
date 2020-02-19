/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { SafeAreaView, View, Dimensions, FlatList, Text , StyleSheet, TouchableOpacity } from 'react-native';
import MainStyleSheet, { dynamicHeight } from '../styles/MainStyleSheet';
import { SECONDARY_COLOR } from '../constants/Values';

const data = [
    { name: 'mahesh', date: '2020-02-14', id: '1' },
    { name: 'mahesh', date: '2020-02-14', id: '2' },
    { name: 'mahesh', date: '2020-02-14', id: '3' },
    { name: 'mahesh', date: '2020-02-14', id: '4' },
    { name: 'mahesh', date: '2020-02-14', id: '5' },
    { name: 'mahesh', date: '2020-02-14', id: '6' },
]
class AppoinmentScreen extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView style={[MainStyleSheet.flexBox1, MainStyleSheet.fullSizeContainer, MainStyleSheet.justifyContentCenter, MainStyleSheet.alignItemsCenter]}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <View style={[MainStyleSheet.hight25Container,MainStyleSheet.fullWidthContainer,MainStyleSheet.justifyContentCenter,MainStyleSheet.alignItemsCenter]}>
                            <Text>{item.name} {item.date}</Text>
                        </View>
                    )}
                    keyExtractor={(item)=> item.id}
                />
                <TouchableOpacity style={appoinmentScreenStyles.floatinActionButton}>
                    <Text>b</Text>
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
    
});
export default AppoinmentScreen;