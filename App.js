import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import IOTA from "iota.lib.js";

import SendButton from "./components/SendButton";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      iota: iota
    };

    var iota = new IOTA({
      provider: "https://nodes.devnet.thetangle.org:443"
    });
    console.log("iota", iota);

    iota.api.getNodeInfo(function(error, success) {
      if (error) {
        console.error(error);
      } else {
        console.log(success);
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <SendButton iota={this.state.iota} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
