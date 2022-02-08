// In App.js in a new project

import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import wall from "./icon/uuu.png";

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      
      <Image source={wall} style={{ position: "absolute" }} />
      <Text style={{color:'white',fontWeight:'bold',fontSize:15,}}>Know Your Wether</Text>
      <TouchableOpacity
        style={styles.BTN1}
        onPress={() => navigation.navigate("Home2")}>      
        <Text style={{ color: "white", fontSize: 15, fontWeight: "bold",opacity:1, }}>
          Start
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  BTN1: {
    height: 50,
    width: 100,
    backgroundColor: "#9617",
    opacity: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 550,
    fontSize: 30,
    fontWeight: "bold",
    borderRadius:15,
  },
});

export default HomeScreen;
