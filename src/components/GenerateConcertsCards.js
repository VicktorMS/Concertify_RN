import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFetchBandsInTown } from "../hooks/useFetchBandsInTown";
import { FlatList } from "react-native";
import ConcertCard from "./ConcertCard";

const GenerateConcertsCards = ({ artistName }) => {
  const {
    data: concertsData,
    error: concertsError,
    isFetching: isFetchingConcerts,
  } = useFetchBandsInTown(`artists/${artistName}/events`);

  console.log(!isFetchingConcerts && concertsData);

  return (
    <>
      {concertsError && <Text style={styles.title}>Não possível foi buscar artistas </Text>}

      {!isFetchingConcerts && concertsData ? (
        concertsData.errorMessage ? (
          <Text style={styles.title}>{concertsData.errorMessage}</Text>
        ) : !concertsData.length ? (
          <Text style={styles.title}>Esse artista não está fazendo shows</Text>
        ) : (
          <FlatList
            data={concertsData}
            renderItem={({ item }) => <ConcertCard item={item} />}
            keyExtractor={(item) => item.id}
          />
        )
      ) : (
        <Text style={styles.title}>Carregando...</Text>
      )}
    </>
  );
};

export default GenerateConcertsCards;

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
});