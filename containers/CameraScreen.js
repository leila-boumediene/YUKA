import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from "@react-navigation/core";
import { axios } from "axios";

const CameraScreen = ({ idProduct }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    navigation.navigate("Products", {
      screen: "Product",
      params: { idProduct: data },
    });
    // setData(data);
    // IdProduct(data);
    // console.log(data);
    setScanned(false);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://world.openfoodfacts.org/api/v0/product/${data}.json`
  //       );
  //       console.log(response.data);
  //       setData(response.data);
  //       navigation.navigate("ProductScreen", { productScanned: data });
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //     fetchData();
  //   };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
};
export default CameraScreen;
