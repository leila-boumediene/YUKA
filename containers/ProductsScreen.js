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
  const [data, setData] = useState();
  const [historyProduct, setHistoryProduct] = useState();

  //   const { params } = useRoute();

  useEffect(() => {
    const fetchData = async () => {
      //   console.log(data);
      try {
        let product = await AsyncStorage.getItem("product");
        console.log("mon produit récupéré", product);
        let stock = JSON.pars(product);
        console.log("mon produit stocké", stock);
        product(stock);

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
        {/* <View>
          <Image
            source={{ uri: item.picture }}
            style={styles.image}
            resizeMode="contain"
          />
          <Text>{infoObject.name}</Text>
          <Text>{infoObject.brand}</Text>
          <Text>{infoObject.ingredient}</Text>
        </View>{" "}
        */}
        {/* <SearchBar placeholder="Search" />
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
