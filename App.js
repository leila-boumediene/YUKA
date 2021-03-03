// une fois le package et les bibliothèques installés concernant la navigation, je les importe.

import React from "react";
import {
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

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
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <NavigationContainer style={styles.bar}>
          {/* Tab navigator nous permet de naviguer entre les écrans */}
          <Tab.Screen name="SplashScreen" component={SplashScreen}></Tab.Screen>
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
              name="Splash"
              options={{
                title: "",
                header: () => null,
              }}
            >
              {() => <SplashScreen />}
            </Tab.Screen>

            <Tab.Screen
              name="Products"
              component={ProductsScreen}
              options={{
                title: "",
                tabBarIcon: () => {
                  return <FontAwesome5 name="carrot" size={24} color="black" />;
                },
              }}
            />
            <Tab.Screen name="Product" component={ProductScreen} />
            <Tab.Screen
              name="GoodProducts"
              component={GoodProductsScreen}
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
            />
            <Tab.Screen
              name="Camera"
              component={CameraScreen}
              options={{
                title: "",
                tabBarIcon: () => {
                  return <AntDesign name="barcode" size={24} color="black" />;
                },
              }}
            />

            <Tab.Screen
              name="Favorites"
              component={FavoritesScreen}
              options={{
                title: "",
                tabBarIcon: () => {
                  return <AntDesign name="staro" size={24} color="black" />;
                },
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
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
