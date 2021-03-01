// une fois le package et les bibliothèques installés concernant la navigation, je les importe.

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

// Je souhaite que ma page d'accueil soit la page produits, j'importe ma page

import ProductsScreen from "./containers/ProductsScreen";
import CameraScreen from "./containers/CameraScreen";
// import SplashScreen from "./containers/SplashScreen";
import ProductScreen from "./containers/ProductScreen";
import FavoritesScreen from "./containers/FavoritesScreen";

// Je crée ma fonction
function App() {
  return (
    <NavigationContainer>
      {/* Stack navigator nous permet de naviguer entre les écrans */}
      <Stack.Navigator>
        <Stack.Screen name="Products" component={ProductsScreen}></Stack.Screen>
        <Stack.Screen name="Camera" component={CameraScreen}></Stack.Screen>
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen}></Stack.Screen> */}
        <Stack.Screen name="Product" component={ProductScreen}></Stack.Screen>
        <Stack.Screen
          name="Favorites"
          component={FavoritesScreen}
        ></Stack.Screen>
      </Stack.Navigator>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          options={{ headerShown: false, animationEnabled: false }}
        >
          {() => (
            <Tab.Navigator
              tabBarOptions={{
                activeTintColor: "black",
                inactiveTintColor: "white",
              }}
            >
              <Tab.Screen
                name="Products"
                options={{
                  tabBarLabel: "Products",
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons
                      name={"carrot"}
                      size={size}
                      color={color}
                    ></Ionicons>
                  ),
                }}
              >
                {() => (
                  <Stack.Navigator>
                    <Stack.Screen
                      name="Products"
                      options={{
                        title: "Products",
                        headerStyle: { backgroundColor: "red" },
                        headerTitleStyle: { colors: "white" },
                      }}
                    ></Stack.Screen>
                  </Stack.Navigator>
                )}
              </Tab.Screen>
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
export default App;
