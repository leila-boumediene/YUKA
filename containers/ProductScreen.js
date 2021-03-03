import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  //   Image,
  //   ScrollView,
  //   ActivityIndicator,
} from "react-native";
import axios from "axios";
import { useNavigation, useRoute } from "@react-navigation/core";
// import { AsyncStorage } from "react-native";

function ProductScreen() {
  // je transmets le params
  const { params } = useRoute();
  const navigation = useNavigation();
  // je crée mes states
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get`https://world.openfoodfacts.org/api/v0/product/${productScanned}.json`;

        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        alert("An error");
      }
    };
    fetchData();
  }, []);
  return (
    <View style={styles.container1}>
      <View style={styles.product}>
        <Text>Détails du produit</Text>
        <Button
          title="je mets en favoris ce produit"
          onPress={() => navigation.navigate("Favorites")}
        ></Button>
        <Button
          title="go products"
          onPress={() => navigation.goBack("Products")}
        ></Button>
      </View>
    </View>
  );
}
export default ProductScreen;
const styles = StyleSheet.create({
  container1: {
    backgroundColor: "lightgreen",
    height: "100%",
  },
  product: {
    backgroundColor: "lightyellow",
  },
});
