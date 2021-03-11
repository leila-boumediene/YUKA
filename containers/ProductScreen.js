import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  Image,
  //   Image,
  //   ScrollView,J
  //   ActivityIndicator,
} from "react-native";
import axios from "axios";
import { useNavigation, useRoute } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

// import { AsyncStorage } from "react-native";

const ProductScreen = ({ route, navigation }) => {
  // je transmets le params
  //   const { params } = useRoute();

  //   console.log("salut", route);
  //   console.log("coucou", navigation);
  //   const navigation = useNavigation();
  // je crée mes states
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  //   const [historyProduct, setHistoryProduct] = useState;
  const [code, setCode] = useState();
  const [name, setName] = useState();
  const [brand, setBrand] = useState();
  const [infoObject, setInfoObject] = useState();
  const [idProduct, setIdProduct] = useState();
  const [favorites, setFavorites] = useState({});
  const { params } = useRoute();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://world.openfoodfacts.org/api/v0/product/${route.params.idProduct}.json`
        );
        // Après un test sur mon téléphone ça fonctionne bien
        // console.log("ma requête", response.data);
        setData(response.data);
        // Maintenant que tout fonctionne bien et si je comprends bien les explications d'Alexis je crée un tableau avec les informations dont j'ai besoin du code, du nom, de la marque, et de l'image (je ne sais pas encore gérer le reste à rajouter au fur et a mesure)
        let infoObject = {
          name: response.data.product.product_name,
          picture: response.data.product.image_front_small_url,
          brand: response.data.product.brands,

          //   ingredient: response.data.product.ingredients,
        };
        // console.log("mon ingrédient", infoObject.ingrdients_ids_debug);
        // console.log("mon produit", infoObject);

        // console.log(infoObject);
        setInfoObject(infoObject);
        setIsLoading(false);

        let stockageProduct = "product";
        await AsyncStorage.setItem("stockageProduct", stockageProduct);

        let tab = JSON.stringify({ infoObject });
        await AsyncStorage.setItem("product", tab);

        console.log("1er clog de asnyc", stockageProduct);
        console.log("2eme clog de asnyc", tab);

        // AsyncStorage permet de garder dans la mémoire du téléphone mes produits que je pourrais sauvegarder dans products
        // AsyncStorage ne prend que des chaînes de caractère
        // c'est setItem qui permet à AsyncStorage de sauvegarder les données avec une clé, valeur
        // c'est getItem qui permet de récupérer les données

        // je récupère les données avec getItem

        // let stockageProduct = await AsyncStorage.getItem("product");
        // console.log("les infos", stockageProduct);

        //   si un prduit n'est pas scanné je l'ajoute
        // if (stockageProduct === null) {
        // let tab = JSON.parse(stockageProduct);
        // await AsyncStorage.setItem("product", tab);
        //   let tab = JSON.stringify(infoObject);
        //   await AsyncStorage.setItem("product", tab);
        //   tab.unshift(infoObject);

        //   console.log(stockageProduct);
        // alors je crée un tableau

        // j'ajoute les élèments dans mon objet infoObject et dans le tableau
        //   tab.push(infoObject);
        //  je stringuify mon tableau
        //   await AsyncStorage.setItem("product", JSON.stringify(tab));
        // } else {
        //   stockageProduct = JSON.parse(stockageProduct);
        //   console.log("mon tableau json parse", tabToString);

        //   let tab = JSON.parse(tabToString);
        //   tab.push(infoObject);
        // }

        setIsLoading(false);
      } catch (error) {
        alert("An error");
      }
    };
    fetchData();
  }, [params.idProduct]);

  //   const favorites = () =>{
  //       const like = [...product];
  //       await AsyncStorage.setItem("favorites", JSON.stringify(like))
  //   }

  //   <AntDesign name="heart" size={24} color="black" />
  //   <AntDesign name="hearto" size={24} color="black" />

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
          <Image
            source={{ uri: infoObject.picture }}
            style={styles.image}
            resizeMode="contain"
          />
          <Text>{infoObject.name}</Text>
          <Text>{infoObject.brand}</Text>
          {/* <Text>{infoObject.ingredient}</Text> */}
        </View>
        {/* <View>
          {infoObject.ingredient.map((product, index) => {
            return (
              <View key={product.code}>
                <Text>{product.text}</Text>
              </View>
            );
          })}
        </View> */}
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
    </SafeAreaView>
  );
};
export default ProductScreen;
const styles = StyleSheet.create({
  container1: {
    backgroundColor: "lightgreen",
    height: "100%",
  },
  product: {
    backgroundColor: "lightyellow",
  },
  image: { height: 200, width: 160 },
});
