import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
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
  const [historyProduct, setHistoryProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState();

  //   const fetchData = async () => {

  // let tabToString = await AsyncStorage.getItem("product");

  //     console.log("clog de asnyc de products", product);
  //     console.log("clog de asnyc de products", stockageProduct);
  //   };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let product = await AsyncStorage.getItem("product");
        console.log("Mes produits stockés", product);

        let stock = JSON.parse(product);
        console.log("stock", stock);

        setData(stock);
        setIsLoading(false);
      } catch (error) {
        console.log(error.massage);
      }
    };
    fetchData();
  }, []);

  //   let stockageProduct = JSON.parse("product");
  //   console.log("mon tableau json parse", stockageProduct);

  return isLoading ? (
    <ActivityIndicator
      color="pink"
      size="large"
      style={styles.activityIndicator}
    />
  ) : (
    <SafeAreaView>
      <ScrollView>
        <View>
          {/* <Image
            source={{ uri: data.picture }}
            style={styles.image}
            resizeMode="contain"
          />
          <Text>{data.name}</Text>
          <Text>{data.brand}</Text> */}
          {/* <Text>{infoObject.ingredient}</Text> */}
        </View>

        <Text>Products Screen</Text>

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
  image: { height: 200, width: 160 },
});
