import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  //   Image,
  //   ScrollView,J
  //   ActivityIndicator,
} from "react-native";
import axios from "axios";
import { useNavigation, useRoute } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import { AsyncStorage } from "react-native";

function ProductScreen() {
  // je transmets le params
  const { params } = useRoute();
  const navigation = useNavigation();
  // je crée mes states
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [historyProduct, setHistoryProduct] = useState;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get`https://world.openfoodfacts.org/api/v0/product/${productScanned}.json`;
        // Après un test sur mon téléphone ça fonctionne bien
        console.log(response.data);
        setData(response.data);
        // Maintenant que tout fonctionne bien et si je comprends bien les explications d'Alexis je crée un tableau avec les informations dont j'ai besoin du code, du nom, de la marque, et de l'image (je ne sais pas encore gérer le reste à rajouter au fur et a mesure)
        let infoObject = {
          code: response.data.product.code,
          name: response.data.product.generic_name,
          brand: response.data.product.brand_owner,
          image: response.data.product.image_url,
        };
        console.log(infoObject);

        // AsyncStorage permet de garder dans la mémoire du téléphone mes produits que je pourrais sauvegarder dans products

        // const product = async () => {
        //   try {
        //     const stockProduct = await AsyncStorage.setItem(historyProduct);
        //     if (value !== null) {
        //       console.log(stockProduct);
        //       const productTab = [];
        //       for (let i = 0; i < tab.length; i++) {
        //         productTab.push;
        //       }
        //     }
        //   } catch (error) {}
        // };

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
