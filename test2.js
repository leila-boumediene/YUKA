import { NavigationContainer } from "@react-navigation/native";
import { TabBarIOS } from "react-native";
import StackUtils from "stack-utils";
import CameraScreen from "./containers/CameraScreen";

<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen
      name="TabBar"
      options={{ headerShown: false, animationEnabled: false }}
    >
      {() => (
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: { fontSize: 12 },
            tabStyle: { width: 70, height: 60 },
            style: { backgroundColor: "#5dcf70" },
            indicatorStyle: { backgroundColor: "#ffffff" },
            showIcon: true,
          }}
        >
          <Tab.screen
            name="Products"
            options={{
              title: "",
              tabBarIcon: () => {
                return <FontAwesome5 name="carrot" size={24} color="black" />;
              },
            }}
          >
            {() => (
              <Stack.Navigator>
                <Stack.Screen name="Products">
                  {(props) => <ProductsScreen {...props} />}
                </Stack.Screen>
                <Stack.Screen name="Product">
                  {(props) => <ProductScreen {...props} />}
                </Stack.Screen>
              </Stack.Navigator>
            )}
          </Tab.screen>
          <Tab.Screen
            name="Camera"
            options={{
              title: "",
              tabBarIcon: () => {
                <AntDesign name="barcode" size={24} color="black" />;
              },
            }}
          >
            {() => (
              <Stack.Navigator>
                <Stack.Screen name="Camera">
                  {() => <CameraScreen />}
                </Stack.Screen>
              </Stack.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen
            name="Favorites"
            options={{
              title: "",
              tabBarIcon: () => {
                <AntDesign name="staro" size={24} color="black" />;
              },
            }}
          >
            <Stack.Navigator>
              <Stack.Screen name="Favorites">
                {() => <FavoritesScreen />}
              </Stack.Screen>
            </Stack.Navigator>
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
            <Stack.Navigator>
              <Stack.Screen name="GoodProducts">
                {() => <GoodProductsScreen />}
              </Stack.Screen>
            </Stack.Navigator>
          </Tab.Screen>
        </Tab.Navigator>
      )}
    </Stack.Screen>
  </Stack.Navigator>
</NavigationContainer>;
