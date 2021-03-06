<Tab.Navigator>
  <Stack.Navigator>
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
    {() => (
      <Stack.Navigator>
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
    )}

    {/* <Stack.Screen name="Product" component={ProductScreen} />
    {() => <ProductScreen />} */}
  </Stack.Navigator>
  <Stack.Navigator>
    <Stack.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        title: "",
        tabBarIcon: () => {
          return <AntDesign name="staro" size={24} color="black" />;
        },
      }}
    />
    {() => <FavoritesScreen />}
  </Stack.Navigator>
  <Stack.Navigator>
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
    {() => <CameraScreen />}
  </Stack.Navigator>
</Tab.Navigator>;

//  // ma partie
//  <SafeAreaView style={styles.container}>
//  <ScrollView style={styles.scrollView}>
//    <NavigationContainer style={styles.bar}>
//      {/* Tab navigator nous permet de naviguer entre les écrans */}
//      <Tab.Screen name="SplashScreen" component={SplashScreen}></Tab.Screen>
//      <Tab.Navigator
//        tabBarOptions={{
//          labelStyle: { fontSize: 12 },
//          tabStyle: { width: 70, height: 60 },
//          style: { backgroundColor: "#5dcf70" },
//          indicatorStyle: { backgroundColor: "#ffffff" },
//          showIcon: true,
//        }}
//      >
//        <Tab.Screen
//          name="SplashScreen"
//          component={SplashScreen}
//          options={{
//            title: "",
//            tabBarIcon: () => {
//              return <Entypo name="home" size={24} color="black" />;
//            },
//          }}
//        ></Tab.Screen>

//        <Tab.Screen
//          name="Products"
//          component={ProductsScreen}
//          options={{
//            title: "",
//            tabBarIcon: () => {
//              return <FontAwesome5 name="carrot" size={24} color="black" />;
//            },
//          }}
//        />

//        <Tab.Screen
//          name="GoodProducts"
//          component={GoodProductsScreen}
//          options={{
//            title: "",
//            tabBarIcon: () => {
//              return (
//                <MaterialIcons
//                  name="compare-arrows"
//                  size={24}
//                  color="black"
//                />
//              );
//            },
//          }}
//        />
//        <Tab.Screen
//          name="Camera"
//          component={CameraScreen}
//          options={{
//            title: "",
//            tabBarIcon: () => {
//              return <AntDesign name="barcode" size={24} color="black" />;
//            },
//          }}
//        />

//        <Tab.Screen
//          name="Favorites"
//          component={FavoritesScreen}
//          options={{
//            title: "",
//            tabBarIcon: () => {
//              return <AntDesign name="staro" size={24} color="black" />;
//            },
//          }}
//        />
//        <Stack.Screen name="Product" component={ProductScreen} />
//      </Tab.Navigator>
//      <Stack.Screen name="Product" component={ProductScreen} />
//    </NavigationContainer>
//  </ScrollView>
// </SafeAreaView>
// );
// }

export default App;
>
<Stack.Navigator>
  <Tab.Screen
    name="Products"
    component={ProductsScreen}
    options={{
      title: "",
      tabBarIcon: () => {
        return (
          <FontAwesome5 name="carrot" size={24} color="black" />
        );
      },
    }}
  />
  {() => (
    <Stack.Navigator>
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  )}

  {/* <Stack.Screen name="Product" component={ProductScreen} />
{() => <ProductScreen />} */}
</Stack.Navigator>
<Stack.Navigator>
  <Stack.Screen
    name="Favorites"
    component={FavoritesScreen}
    options={{
      title: "",
      tabBarIcon: () => {
        return (
          <AntDesign name="staro" size={24} color="black" />
        );
      },
    }}
  />
  {() => <FavoritesScreen />}
</Stack.Navigator>
<Stack.Navigator>
  <Tab.Screen
    name="Camera"
    component={CameraScreen}
    options={{
      title: "",
      tabBarIcon: () => {
        return (
          <AntDesign name="barcode" size={24} color="black" />
        );
      },
    }}
  />
  {() => <CameraScreen />}
</Stack.Navigator>
</Tab.Navigator>
;



{<SafeAreaView style={styles.container}>
<ScrollView style={styles.scrollView}>
  <NavigationContainer style={styles.bar}>
 {/* Tab navigator nous permet de naviguer entre les écrans  */}
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
</SafeAreaView> */}e */}