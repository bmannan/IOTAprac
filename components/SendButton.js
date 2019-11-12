import React, { Component } from "react";
import { Button, StyleSheet, View } from "react-native";

export default class SendButton extends Component {
  constructor(props) {
    super(props);
  }

  send = iota => {
    console.log("Send!");
    console.log("iota from SendButton Component", iota);
  };

  render() {
    return (
      <View>
        <Button
          style={{ backgroundColor: "blue" }}
          onPress={() => this.send(this.props.iota)}
          title="Send Transaction"
        ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
