import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ArtistCard = ({ item }) => {
  return (
    <View style={styles.container}>
      {item.images ? <Image
        style={styles.image}
        source={{
          uri: item?.images[0]?.url,
        }}
      /> : <Text>Sem Imagem</Text>}
      <View style={styles.infoWrapper}>
        <Text style={styles.title}>{item?.name ? item?.name : "Desconhecido"}</Text>
        <Text style={styles.subtitle}>{item?.followers?.total ? item?.followers?.total : "Desconhecido"}</Text>
      </View>
    </View>
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
