// une fois le package et les bibliothèques installés concernant la navigation, je les importe.

// Conseil à retenir suite à l'issue avec Alexis: N'oublies pas : un Navigator contient des Screen, qui renvoient des Composants ou un autre Navigateur.
// En simplifié, ca fait que tu devras forcément alterner Navigator => Screen => Navigator => Screen...
// Du coup, c'est ton <Tab.Screen name="Products" qui devra contenir un <Stack.Navigator>, qui lui contiendra tes deux <Stack.screen>!

import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";

// import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

// Je souhaite que ma page d'accueil soit la page produits, j'importe ma page

import ProductsScreen from "./containers/ProductsScreen";
import CameraScreen from "./containers/CameraScreen";
import SplashScreen from "./containers/SplashScreen";
import ProductScreen from "./containers/ProductScreen";
import FavoritesScreen from "./containers/FavoritesScreen";
import GoodProductsScreen from "./containers/GoodProductsScreen";

// import { Button } from "react-native";

// Je crée ma fonction
function App() {
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // const [product, setProduct] = useState();
  // const [IdProduct, setIdProduct] = useState();

  // création d'un ID
  const IdProduct = async (id) => {
    // si l'id existe dans la BDD alors je l'enregistre dans la mémoire du téléphone
    if (id) {
      AsyncStorage.setItem("productId", id);
    } else {
      alert("product is already exist");
    }
    IdProduct(id);
  };
  // faire une issue pour demander
  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const fetchData = async () => {
      // We should also handle error for production apps
      const product = await AsyncStorage.getItem("product");

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      setIsLoading(false);
      setProduct(product);
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const productData = await AsyncStorage.getItem("productData");
  //     setProductData(productData);
  //     setIsLoading(false);
  //   };
  //   fetchData;
  // }, []);
  return isLoading ? (
    <ActivityIndicator
      color="pink"
      size="large"
      style={styles.activityIndicator}
    />
  ) : (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}> */}
      <NavigationContainer>
        <Stack.Navigator style={styles.container}>
          <Stack.Screen
            style={styles.scrollView}
            name="TabBar"
            options={{ header: () => null, animationEnabled: false }}
          >
            {(props) => (
              <Tab.Navigator
                tabBarOptions={{
                  labelStyle: { fontSize: 12 },
                  tabStyle: { width: 70, height: 60 },
                  style: { backgroundColor: "#5dcf70" },
                  indicatorStyle: { backgroundColor: "#ffffff" },
                  showIcon: true,
                }}
              >
                <Tab.Screen
                  name="Products"
                  options={{
                    title: "",
                    tabBarIcon: () => {
                      return (
                        <FontAwesome5 name="carrot" size={24} color="black" />
                      );
                    },
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen name="Products">
                        {(props) => (
                          <ProductsScreen
                            {...props}
                            // productData={productData}
                          />
                        )}
                      </Stack.Screen>
                      <Stack.Screen name="Product">
                        {(props) => (
                          <ProductScreen
                            {...props}
                            // historyProduct={historyProduct}
                          />
                        )}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>
                <Tab.Screen
                  name="Camera"
                  options={{
                    title: "",
                    tabBarIcon: () => {
                      return (
                        <AntDesign name="barcode" size={24} color="black" />
                      );
                    },
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen name="Camera">
                        {() => <CameraScreen IdProduct={IdProduct} />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>
                <Tab.Screen
                  name="Favorites"
                  options={{
                    title: "",
                    tabBarIcon: () => {
                      return <AntDesign name="staro" size={24} color="black" />;
                    },
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen name="Favorites">
                        {() => <FavoritesScreen />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>
                <Tab.Screen
                  name="GoodProducts"
                  options={{
                    title: "",
                    tabBarIcon: () => {
                      return (
                        <MaterialIcons
                          name="compare-arrows"
                          size={24}
                          color="black"
                        />
                      );
                    },
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen name="GoodProducts">
                        {() => <GoodProductsScreen />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>
              </Tab.Navigator>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  // scrollView: {
  //   marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  // },
  bar: {
    backgroundColor: "lightgreen",
  },
  topbar: {
    marginTop: 40,
    backgroundColor: "lightgreen",
  },
  icon: {
    height: 10,
    width: 10,
  },
});
