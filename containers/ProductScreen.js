import React from "react";
import { View, Text, Button } from "react-native";

function ProductScreen({ navigation }) {
  return (
    <View>
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
  );
}
export default ProductScreen;
