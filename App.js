import React, { Component } from "react";
import { StyleSheet, View, Images } from "react-native";
import {
  Container,
  Header,
  Text,
  Content,
  Accordion,
  Tab,
  Tabs
} from "native-base";
import Tab1 from "./Components/tabOne";
import Tab2 from "./Components/tabTwo";

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading="Death Note Rules">
            <Tab1 />
          </Tab>
          <Tab heading="Death Note Victims">
            <Tab2 />
          </Tab>
        </Tabs>
      </Container>
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
