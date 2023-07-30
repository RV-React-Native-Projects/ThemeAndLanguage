import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "../screens/Landing";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Home from "../screens/Home";
import { useAppSelector } from "@redux/Store";

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        animationEnabled: true,
        animationDuration: 10,
      }}
      initialRouteName="Landing_Page"
    >
      <Stack.Screen name="Landing_Page" component={Landing} />
      <Stack.Screen name="Login_Page" component={Login} />
      <Stack.Screen name="Signup_Page" component={SignUp} />
      <Stack.Screen name="Home_Page" component={Home} />
    </Stack.Navigator>
  );
};

export default Navigation;
