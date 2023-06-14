import { StyleSheet, Text, View, FlatList } from "react-native";
import { Skeleton, VStack, Center, NativeBaseProvider } from "native-base";
import React from "react";

const GenerateLoadingCards = () => {
  const randomArray = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <FlatList
      data={randomArray}
      numColumns={2}
      renderItem={({ item }) => <LoadingCard />}
      keyExtractor={(item) => item}
    />
  );
};

export default GenerateLoadingCards;

const LoadingCard = () => {
  return (
    <VStack
      w="90%"
      p="2"
      maxW="45%"
      m="2"
      h="48"
      borderWidth="1"
      space={4}
      overflow="hidden"
      rounded="md"
      startColor="gray.800"
      _dark={{
        borderColor: "gray.800",
      }}
      _light={{
        borderColor: "gray.800",
      }}
    >
      <Skeleton startColor="gray.800" height="32" />
      <Skeleton startColor="gray.800" height="4" my="2" rounded="md" w="32" />
      <Skeleton startColor="gray.800" height="4" rounded="md" w="20" />
    </VStack>
  );
};
