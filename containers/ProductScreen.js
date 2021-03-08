import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
  //   Image,
  //   ScrollView,J
  //   ActivityIndicator,
} from "react-native";
import axios from "axios";
import { useNavigation, useRoute } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";

import Camera from "../containers/CameraScreen";

// import { AsyncStorage } from "react-native";

function ProductScreen(navigation, route) {
  // je transmets le params
  const { params } = useRoute();
  //   const navigation = useNavigation();
  // je crée mes states
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  //   const [historyProduct, setHistoryProduct] = useState;
  const [code, setCode] = useState();
  const [name, setName] = useState();
  const [brand, setBrand] = useState();
  const [infoOject, setInfoOject] = useState;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get`https://world.openfoodfacts.org/api/v0/product/${params.data}`;
        // Après un test sur mon téléphone ça fonctionne bien
        console.log(response.data);
        setData(response.data);
        // Maintenant que tout fonctionne bien et si je comprends bien les explications d'Alexis je crée un tableau avec les informations dont j'ai besoin du code, du nom, de la marque, et de l'image (je ne sais pas encore gérer le reste à rajouter au fur et a mesure)
        let infoObject = {
          code: response.data.product.code,
          name: response.data.product.product_name,
          brand: response.data.product.brands,
          image: response.data.product.image_url,
        };
        console.log(infoObject);

        // AsyncStorage permet de garder dans la mémoire du téléphone mes produits que je pourrais sauvegarder dans products
        // AsyncStorage ne prend que des chaînes de caractère

        let stockageProduct = await AsyncStorage.getItem("product");

        //    dans un premier temps on voit si ce n'est pas une chaîne de caractères
        // if (stockageProduct === null) {
        //   // alors je crée un tableau
        //   let tab = [];
        //   // j'ajoute les élèments dans mon objet infoObject et dans le tableau
        //   tab.push(infoObject);
        //   //  je stringuify mon tableau
        //   await AsyncStorage.setItem("product", JSON.stringify(tab));
        // }

        // setIsLoading(false);
      } catch (error) {
        alert("An error");
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <ActivityIndicator
      color="pink"
      size="large"
      style={styles.activityIndicator}
    />
  ) : (
    <ScrollView>
      <Text></Text>
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
    </ScrollView>
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
