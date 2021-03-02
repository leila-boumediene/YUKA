import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

// import CameraScreen from "./CameraScreen";
// import SplashScreen from "./containers/SplashScreen";
// import ProductScreen from "./ProductScreen";
// import FavoritesScreen from "./FavoritesScreen";
// je crée ma fonction ProductScreen qui va recevoir en argument une props navigation
function GoodPoductsScreen() {
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await `https://fr.openfoodfacts.org/`;
  //         console.log(response);
  //       } catch (error) {
  //         alert("An error");
  //       }
  //     };
  //     fetchData();
  //   }, []);
  return (
    <View style={styles.container}>
      <View style={styles.products}>
        <Text>Acheter un meilleur produit</Text>
      </View>
    </View>
  );
}

export default GoodPoductsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    height: "100%",
  },
  products: {
    backgroundColor: "lightblue",
  },
});
