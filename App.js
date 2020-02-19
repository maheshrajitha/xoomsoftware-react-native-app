/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import SplashScreen from './src/screens/WelcomeScreen';
import SignupScreen from './src/screens/SignupScreen';
import AppoinmentScreen from './src/screens/AppoinmentScreen';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { userReducer } from './src/store/reducers/user.reducer';
import { appoinmentReducer } from './src/store/reducers/appoinment.reducer';
import AddAppoinmentScreen from './src/screens/AddAppoinmentScreen';

const store = createStore(combineReducers({ user: userReducer, appoinments: appoinmentReducer }), applyMiddleware(thunk));
const StackNavigator = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator.Navigator>
          <StackNavigator.Screen component={SplashScreen} options={{header : ()=> null}} name={'SplashScreen'}/>
          <StackNavigator.Screen component={LoginScreen} name={'Login'} options={{ header: () => null }} />
          <StackNavigator.Screen component={SignupScreen} name={'Signup'} options={{ header: () => null }} />
          <StackNavigator.Screen component={AppoinmentScreen} name={'Appoinment'} options={{ header: () => null }} />
          <StackNavigator.Screen component={AddAppoinmentScreen} name={'NewAppoinment'} options={{header:()=> null}}/>
        </StackNavigator.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
