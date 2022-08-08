import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NewUser from "./scr/pages/NewUser/Index";
import Login from "./scr/pages/Login";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
  <Stack.Navigator initialRouteName="Login">
<Stack.Screen
name="Login"
component ={Login}
options={{
headeTintcolor:"#F92E6A",
}}
/>
<Stack.Screen
name="NewUSer"
component ={NewUser}
options={{
headeTintcolor:"#F92E6A",
}}
/>
</Stack.Navigator>
    </NavigationContainer>
  );
}