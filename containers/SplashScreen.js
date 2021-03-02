import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Slash from "../assets/Slash.png";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function SplashScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/Slash.png")} />
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  slash: {
    flex: 1,
  },
  imgae: {
    resizeMode: "cover", // or 'stretch'
    height: "auto",
    width: "auto",
  },
});
