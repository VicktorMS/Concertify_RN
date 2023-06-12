import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const Cardbox = ({children}) => {
  return (
    <ScrollView style={styles.container}>
      {children}
    </ScrollView>
  )
}

export default Cardbox

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 16,
        
        backgroundColor: 'linear-gradient(0deg, rgba(217,217,217,0) 0%, rgb(52, 52, 52) 100%)',
        // flexWrap: 'wrap',
    }
})