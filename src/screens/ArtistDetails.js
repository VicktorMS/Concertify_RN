import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import abbreviate from "number-abbreviate";
import React from "react";
import Cardbox from "../components/Cardbox";
import GenerateConcertsCards from "../components/GenerateConcertsCards";
const ArtistDetails = ({ route, navigation }) => {
  const { item } = route.params;

  
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back-outline" size={26} color="white" />
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={{
          uri: item?.images[0]?.url,
        }}
      />
      <View style={styles.info}>
        <View>
          <Text style={styles.title}>{item?.name}</Text>
          <Text style={styles.followers}>
            {abbreviate(item?.followers?.total, 2)} seguidores
          </Text>
        </View>
      </View>
      <Cardbox>
        <GenerateConcertsCards artistName={item?.name}/>
      </Cardbox>
    </View>
  );
};

export default ArtistDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    color: "#fff",
  },
  backBtn: {
    position: "absolute",
    zIndex: 99,
    top: 20,
    left: 20,
    padding: 8,
    borderRadius: 99,
    backgroundColor: "grey",
  },
  info: {
    padding: 20,
  },
  followers: {
    color: "#fff",
    fontSize: 24,
  },
  image: {
    width: "100%",
    height: "25%",
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
});
