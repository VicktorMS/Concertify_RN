import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const ConcertCard = ({ item }) => {
  const {
    lineup,
    venue,
    offers,
    title,
    starts_at: startsAt,
    ends_at: endsAt,
  } = item;

  const {
    city,
    country,
    name,
    postal_code: postalCode,
    street_address: streetAddress,
  } = venue;

  function formatarDataHoraLegivel(date) {
    return new Date(date).toLocaleString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {country} | {city}
        </Text>
        <Text style={styles.subtitle}>{formatarDataHoraLegivel(startsAt)}</Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          zIndex: 2,
          gap: 6,
          right: 10,
        }}
      >
        <Ionicons name="arrow-redo-circle-sharp" size={24} color="white" />
        <Text
          style={{
            color: "white",
            fontSize: 14,
            fontWeight: "600",
          }}
        >
          Ver Show
        </Text>
      </View>
    </View>
  );
};

export default ConcertCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 16,
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "blue",
    borderRadius: 8,
    backgroundColor:
      "linear-gradient(0deg,rgba(25, 25, 25, 0.812)  0%,rgb(66, 66, 66) 100%)", //trocar futuramente
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    maxWidth: "70%",
  },
  subtitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
    maxWidth: "75%",
  },
});

// const ConcertCard = ({item}) => {

//   const {
//     lineup,
//     venue,
//     offers,
//     title,
//     starts_at: startsAt,
//     ends_at: endsAt,
//   } = item;

//   const {
//     city,
//     country,
//     name,
//     postal_code: postalCode,
//     street_address: streetAddress,
//   } = venue;

//   function formatarDataHoraLegivel(date) {
//     return new Date(date).toLocaleString("pt-BR", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//       hour: "numeric",
//       minute: "numeric"
//     });
//   }

//   return (
//     <View style={styles.container}>
//       <View>
//         <Text style={styles.title}>{name}</Text>
//         <Text style={styles.subtitle}>{country} | {city}</Text>
//         <Text style={styles.subtitle}>{formatarDataHoraLegivel(startsAt)}</Text>
//       </View>
//       <View style={{ flexDirection: "column", alignItems: "center" }}>
//         <Ionicons name="arrow-redo-circle-sharp" size={24} color="white" />
//         <Text style={styles.subtitle}>Ver Show</Text>
//       </View>
//     </View>
//   );
// };
