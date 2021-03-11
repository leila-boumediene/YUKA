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

        let infoObject = {
          name: response.data.product.product_name,
          picture: response.data.product.image_front_small_url,
          brand: response.data.product.brands,
        };

        // console.log(infoObject);
        setInfoObject(infoObject);
        setIsLoading(false);

        // je vérifie si mon produit existe (scanné)
        let productExist = await AsyncStorage.getItem("product");

        // ensuite je vérifie si le produit que je souhaite ajouter est différent
        // le nouveau produit est un tableau vide
        if (productExist === null) {
          AsyncStorage.setItem("product", JSON.strinify(infoObject));
        } else {
          let tabForAdd = JSON.parse(productExist);
          tabForAdd.push(infoObject);
          AsyncStorage.setItem("product", JSON.strinify(tabForAdd));
        }

        setIsLoading(false);
      } catch (error) {
        alert("An error");
      }
    };
    fetchData();
  }, [params.idProduct]);

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
