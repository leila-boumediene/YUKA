import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from "react-native";

// je crée ma fonction ProductScreen qui va recevoir en argument une props navigation
function ProductsScreen({ navigation }) {
  return (
    <View>
      <Text>Products Screen</Text>
      <Button
        title="voir le produit"
        onPress={() => navigation.navigate("Product")}
      ></Button>
      <View>
        {/* <Button
          tile="scanner "
          onPress={() => navigation.navigate("Camera")}
        ></Button> */}
      </View>
    </View>
  );
}

export default ProductsScreen;
