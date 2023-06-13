import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import abbreviate from "number-abbreviate";

import React from "react";

const ArtistCard = ({ item, navigation }) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("ArtistDetails", { item })}
    >
      {item.images ? (
        <Image
          style={styles.image}
          source={{
            uri: item?.images[1]?.url,
          }}
        />
      ) : (
        <Text>Sem Imagem</Text>
      )}
      <View style={styles.infoWrapper}>
        <Text style={styles.title}>
          {item?.name ? item?.name : "Desconhecido"}
        </Text>
        <Text style={styles.subtitle}>
          {item?.followers?.total ? abbreviate(item?.followers?.total, 2) : "Desconhecido"}
        </Text>
      </View>
    </Pressable>
  );
};

export default ArtistCard;

const styles = StyleSheet.create({
  container: {
    width: "45%",
    padding: 6,
    margin: 8,
    backgroundColor: "blue",
    height: 200,
    borderRadius: 8,
    backgroundColor:
      "linear-gradient(0deg,rgba(25, 25, 25, 0.812)  0%,rgb(66, 66, 66) 100%)", //trocar futuramente
  },
  infoWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
  subtitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  image: {
    width: "100%",
    height: "75%",
  },
});
