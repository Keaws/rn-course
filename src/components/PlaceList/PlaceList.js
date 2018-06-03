import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import ListItem from '../ListItem/ListItem'

const PlaceList = (props) => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={(info) => <ListItem 
        onItemPressed={() => props.onItemPressed(info.item.key)} 
        placeName={info.item.name}
        placeImage={info.item.image}
        />
      }
    />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
})

export default PlaceList