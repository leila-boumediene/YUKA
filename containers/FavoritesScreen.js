import React from "react";
import { View, Text, Button } from "react-native";
// import AsyncStorage from "@react-native-community/async-storage";

function FavoritesScreen({ navigation }) {
  return (
    <View>
      <Text>Mes produits favoris</Text>
      <Button
        title="go product"
        onPress={() => navigation.goBack("Product")}
      ></Button>
    </View>
  );
}
export default FavoritesScreen;
