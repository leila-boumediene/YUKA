import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function ProductScreen({ navigation }) {
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
