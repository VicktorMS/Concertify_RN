import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ConcertCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ConcertCard</Text>
      <Text style={styles.subtitle}>ConcertCard</Text>
    </View>
  )
}

export default ConcertCard

const styles = StyleSheet.create({
    container: {
        width: "100%",
        // alignItems: "center",
        justifyContent: "center",
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
      },
      subtitle: {
        color: "white",
        fontSize: 14,
        fontWeight: "600",
      },
})