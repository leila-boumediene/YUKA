import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

// import CameraScreen from "./CameraScreen";
// import SplashScreen from "./containers/SplashScreen";
// import ProductScreen from "./ProductScreen";
// import FavoritesScreen from "./FavoritesScreen";
// je crée ma fonction ProductScreen qui va recevoir en argument une props navigation
function ProductsScreen() {
  const navigation = useNavigation();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get`https://world.openfoodfacts.org/api/v0/product/737628064502.json`;
  //         console.log(response.json());
  //         setIsLoading(false);
  //       } catch (error) {
  //         alert("An error");
  //       }
  //     };
  //     fetchData();
  //   }, []);
  return (
    <>
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
      <FlatList />
    </>
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
