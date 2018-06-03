import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const ListItem = (props) => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image style={styles.image} source={props.placeImage} />
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    margin: 5,
    height: 30,
    width: 30
  }
})

export default ListItem