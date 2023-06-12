import { StyleSheet, Text, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainWrapper}>
        <Text style={styles.logo}>Concertify</Text>
        <Feather name="help-circle" size={20} color="white" />
      </View>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchbar}
          placeholder="Pesquise seu artista favorito"
          //   onChangeText={onChangeText}
          //   value={text}
        />
        {/* <View style={{ paddingHorizontal: 6 }}>
          <FontAwesome name="search" size={20} color="white" />
        </View> */}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchbar: {
    color: "black",
    backgroundColor: "white",
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  mainWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  container: {
    padding: 18,
    paddingTop: 20,
  },
  logo: {
    color: "green", //Mudar
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: -2,
  },
});
