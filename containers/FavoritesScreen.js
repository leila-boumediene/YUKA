import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
// import AsyncStorage from "@react-native-community/async-storage";

function FavoritesScreen({ navigation }) {
  return (
    <View style={styles.container2}>
      <View style={styles.favorites}>
        <Text>Mes produits favoris</Text>
        <Button
          title="go product"
          onPress={() => navigation.goBack("Product")}
        ></Button>
      </View>
    </View>
  );
}
export default FavoritesScreen;
const styles = StyleSheet.create({
  container2: {
    backgroundColor: "lightblue",
    height: "100%",
  },
  favorites: {
    backgroundColor: "grey",
  },
});
