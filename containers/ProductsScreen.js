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

// import CameraScreen from "./CameraScreen";
// import SplashScreen from "./containers/SplashScreen";
import ProductScreen from "./ProductScreen";
// import FavoritesScreen from "./FavoritesScreen";
// je crée ma fonction ProductScreen qui va recevoir en argument une props navigation
const ProductsScreen = ({ route, navigation }) => {
  //   const navigation = useNavigation();
  //   console.log("salut", route);
  //   console.log("coucou", navigation);
  const [data, setData] = useState();
  const [historyProduct, setHistoryProduct] = useState();

  //   const { params } = useRoute();

  useEffect(() => {
    const fetchData = async () => {
      //   console.log(data);
      try {
        let product = await AsyncStorage.getItem("product");
        // console.log("mon produit récupéré", product);
        let stock = JSON.parse(product);
        // console.log("mon produit stocké", stock);
        // product(stock);
        // let infoObject = {
        //   name: response.data.product.product_name,
        //   picture: response.data.product.image_front_small_url,
        //   brand: response.data.product.brands,

        //   ingredient: response.data.product.ingredients,
        // };

        // let register = JSON.parse(historyProduct);
        // setHistoryProduct(register);
        // setIsLoading(false);
      } catch (error) {
        console.log(error.massage);
      }
    };
    fetchData();
  }, []);

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
