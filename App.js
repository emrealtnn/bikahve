import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName={"Login"}>
      <Stack.Screen
      options={{ headerTransparent: true, headerBackTitleVisible:false,headerTintColor: "white" ,headerTitle:""}}
       name="Login" component={LoginScreen}/>
      <Stack.Screen
          options={{ headerTransparent: true, headerBackTitleVisible:false,headerTintColor: "white" ,headerTitle:"",headerBackVisible:false}}
          name="Register" component={RegisterScreen}/>
      <Stack.Screen
          options={{ headerTransparent: true, headerBackTitleVisible:false,headerTintColor: "white" ,headerTitle:""}}
          name="Home" component={HomeScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}
