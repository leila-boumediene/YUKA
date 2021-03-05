import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

// import CameraScreen from "./CameraScreen";
// import SplashScreen from "./containers/SplashScreen";
// import ProductScreen from "./ProductScreen";
// import FavoritesScreen from "./FavoritesScreen";
// je crée ma fonction ProductScreen qui va recevoir en argument une props navigation
function ProductsScreen(navigation, route) {
  //   const navigation = useNavigation();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [historyProduct, setHistoryProduct] = useState();

  //   const { params } = useRoute();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const historyProduct = await AsyncStorage.getItem("historyProduct");
        console.log(historyProduct);

        let register = JSON.parse(historyProduct);
        setHistoryProduct(register);
        setIsLoading(false);
      } catch (error) {
        console.log(error.massage);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.products}>
          {/* <SearchBar placeholder="Search" /> */}
          <Text>Products Screen</Text>
          <Button
            title="voir le produit"
            onPress={() =>
              navigation.navigate("Products", {
                screen: "Product",
                params: { scannedId },
              })
            }
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
