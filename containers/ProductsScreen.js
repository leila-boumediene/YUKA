import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

import ProductScreen from "./ProductScreen";
import CameraScreen from "./CameraScreen";

const ProductsScreen = ({ route, navigation }) => {
  const [data, setData] = useState();
  const [historyProduct, setHistoryProduct] = useState();

  const fetchData = async () => {
    let stockageProduct = await AsyncStorage.getItem("product");

    let tabToString = await AsyncStorage.getItem("product");
    let product = JSON.parse(tabToString);

    console.log("clog de asnyc de products", product);
  };

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         let product = await AsyncStorage.getItem("product");
  //         let stock = JSON.parse(product);
  //       } catch (error) {
  //         console.log(error.massage);
  //       }
  //     };
  //     fetchData();
  //   }, []);

  //   let stockageProduct = JSON.parse("product");
  //   console.log("mon tableau json parse", stockageProduct);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {/* <Image
            source={{ uri: product.object.picture }}
            style={styles.image}
            resizeMode="contain"
          /> */}
          {/* <Text>{product.object.name}</Text> */}
          {/* <Text>{product.object.brand}</Text>
          <Text>{iproduct.object.ingredient}</Text> */}
        </View>
        {/* <SearchBar placeholder="Search" /> */}
        <Text>Products Screen</Text>
        {/* <Button
          title="voir le produit"
          onPress={() =>
            navigation.navigate("Products", {
              screen: "Product",
              params: { scannedId },
            })
          }
        ></Button> */}
        <View>
          <Button
            title="scanner"
            onPress={() => navigation.navigate("Camera")}
          ></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
