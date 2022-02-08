// In App.js in a new project

import * as React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

import weather from "./icon/weather.png";

// useState how to make background color dynamic => 20->red,40->green
//const tempratureType = "cloudy";

function Home2() {
  // const [weatherType, setweatherType] = React.useState("delhi");
  // const [apiResponse, setapiResponse] = React.useState([]);
  const [city, setcity] = React.useState("delhi");
  const [temprature, sectTeampratur] = React.useState("NoN");
  const [MaxTemp, setMax] = React.useState("NoN");
  const [MinTemp, setMin] = React.useState("NoN");
  const [tempratureType, setTeampratureType] = React.useState("Non");

  useEffect(() => {
    getApi();
  }, [2]);

  function getApi() {
    let link = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=68601a3bbb49fd167f1b96b531d795d6`;

    var config = {
      method: "post",
      url: link,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        // setapiResponse(response.data.weather.main);
        setcity(response.data.name);
        sectTeampratur(response.data.main.temp);
        setMax(response.data.main.temp_max);
        setMin(response.data.main.temp_min);
        //setTeampratureType(response.data.weather.main);

        //console.log(response.data.weather.main);
        console.log(response.data.main.temp_max);
        console.log(response.data.main.temp_min);
        console.log(response.data.main.temp);
        console.log(response.data.name);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <View
      style={[
        styles.Holder,
        {
          backgroundColor:
            city == "delhi"
              ? "orange"
              : city == "kerala"
              ? "green"
              : city == "london"
              ? "blue"
              : "pink",
        },
      ]}
    >
      {/* Header section */}
      <View style={styles.head}>
        <Text style={styles.Headertext}>{city}</Text>
      </View>

      {/*text Button*/}
      <View style={styles.BTN}>
        <View style={styles.BTN}>
          <Button title="delhi" onPress={() => setcity("delhi")} />
        </View>
        <View style={styles.BTN}>
          <Button title="kerala" onPress={() => setcity("kerala")} />
        </View>
        <View style={styles.BTN}>
          <Button title="london" onPress={() => setcity("london")} />
        </View>
      </View>

      {/* image section */}
      <View style={styles.mid}>
        <Image source={weather} style={styles.circleImageLayout} />
      </View>

      {/*temprature section*/}
      <View style={styles.temp}>
        <Text style={{ fontSize: 45, fontWeight: "bold", color: "white" }}>
          {temprature}&deg;{" "}
          <Text style={{ fontSize: 20 }}>{tempratureType}</Text>
        </Text>
      </View>

      {/* climate data section */}
      <View style={styles.footer}>
        <View style={styles.footerStyle}>
          <Text style={styles.footerText}>Today</Text>
          <Text style={styles.footerText}>{temprature}&deg;</Text>
        </View>

        <View style={styles.footerStyle}>
          <Text style={styles.footerText}>Max</Text>
          <Text style={styles.footerText}>{MaxTemp}&deg;</Text>
        </View>

        <View style={styles.footerStyle}>
          <Text style={styles.footerText}>Min</Text>
          <Text style={styles.footerText}>{MinTemp}&deg;</Text>
        </View>
      </View>
    </View>
  );
}

export default Home2;

const styles = StyleSheet.create({
  Holder: {
    flex: 1,
    // backgroundColor: "#f2af44",
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
  },

  head: {
    // marginTop:Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "green",
    flex: 2,
  },

  Headertext: {
    flex: 2,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 80,
  },

  mid: {
    // backgroundColor: "red",
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    // backgroundColor: "blue",
    flex: 4,
    width: "100%",
  },
  circleImageLayout: {
    width: 200,
    height: 200,
    borderRadius: 200 / 1,
  },

  footerStyle: {
    //backgroundColor:"pink",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 100,
    paddingVertical: 20,
    marginTop: 20,
  },

  footerText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },

  BTN: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
  },
});
