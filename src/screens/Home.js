import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import React from "react";
import Header from "../components/Header";
import Cardbox from "../components/Cardbox";
import ArtistCard from "../components/ArtistCard";
import GenerateArtistsCards from "../components/GenerateArtistsCards";

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.title}>Descubra novas experiencias Incríveis</Text>
      </View>
      <Cardbox>
        <Text style={styles.subtitle}>Artistas do momento</Text>
        <GenerateArtistsCards navigation={navigation}/>
      </Cardbox>
      <StatusBar style="light" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    fontWeight: "900",
  },
  subtitle: {
    color: "white",
    fontSize: 20,
    marginBottom: 12,
    fontWeight: "700",
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
    color: "#fff",
  },
});
