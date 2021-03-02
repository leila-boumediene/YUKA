import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

// import CameraScreen from "./CameraScreen";
// import SplashScreen from "./containers/SplashScreen";
// import ProductScreen from "./ProductScreen";
// import FavoritesScreen from "./FavoritesScreen";
// je crée ma fonction ProductScreen qui va recevoir en argument une props navigation
function ProductsScreen({ navigation }) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await `https://fr.openfoodfacts.org/`;
        console.log(response);
      } catch (error) {
        alert("An error");
      }
    };
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.products}>
        {/* <SearchBar placeholder="Search" /> */}
        <Text>Products Screen</Text>
        <Button
          title="voir le produit"
          onPress={() => navigation.navigate("Product")}
        ></Button>
        <View>
          <Button
            title="scanner"
            onPress={() => navigation.navigate("Camera")}
          ></Button>
        </View>
      </View>
    </View>
  );
}

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    height: "100%",
  },
  products: {
    backgroundColor: "lightblue",
  },
});
