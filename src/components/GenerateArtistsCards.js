import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { useFetchSpotify } from "../hooks/useFetchSpotify";
import {
  arrayToString,
  filterArtistsFromSpotifyPlaylist,
} from "../utils/utils";
import ArtistCard from "./ArtistCard";
import GenerateLoadingCards from "./GenerateLoadingCards";

const GenerateArtistsCards = ({ navigation }) => {
  const [numberOfArtists, setNumberOfArtists] = useState(50);

  //Id da playlist com Top Artistas
  const playlistId = "37i9dQZEVXbMDoHDwVN2tF";

  //Requisição da Playlist de top 50 artistas
  const {
    data: playlistData,
    error: playlistError,
    isFetching: isFetchingPlaylist,
  } = useFetchSpotify(
    `https://api.spotify.com/v1/playlists/${playlistId}`,
    "GET"
  );

  //Transforma a requisição da Playlist em uma string com ids dos artistas
  let stringOfArtistsIds;
  if (playlistData && !playlistError && !isFetchingPlaylist) {
    stringOfArtistsIds = arrayToString(
      filterArtistsFromSpotifyPlaylist(playlistData),
      numberOfArtists
    );
  }

  //Requisição dos artistas
  const {
    data: artistsData,
    error: artistsError,
    isFetching: isFetchingArtists,
  } = useFetchSpotify(
    `https://api.spotify.com/v1/artists?ids=${stringOfArtistsIds}`,
    "GET"
  );

  console.log(!isFetchingArtists && artistsData);

  return (
    <>
      {artistsError && (
        <Text style={styles.title}>Não possível foi buscar artistas </Text>
      )}
      {artistsData && artistsData?.artists[0] ? (
        <FlatList
          data={artistsData?.artists}
          style={{ gap: 10 }}
          renderItem={({ item }) => (
            <ArtistCard navigation={navigation} item={item} />
          )}
          numColumns={2}
          keyExtractor={(item) => item.id}
          // ItemSeparatorComponent={() => <View style={{height: 10}}
          // />}
        />
      ) : (
        <GenerateLoadingCards />
      )}
    </>
  );
};

export default GenerateArtistsCards;

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
});
