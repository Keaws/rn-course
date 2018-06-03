import React from 'react'

import {Modal, View, Image, Text, Button, StyleSheet} from 'react-native'

const PlaceDetail = (props) => {
  let modalContent

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.img} />
        <Text style={styles.placeText}>{props.selectedPlace.name}</Text>
      </View>
    )
  }

  return (
    <Modal visible={props.selectedPlace !== null} animationType="slide" onRequestClose={props.onModalClosed}>
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title="Close" onPress={props.onModalClosed} />
          <Button title="Remove" onPress={props.onItemDeleted}/>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  img: {
    width: '100%',
    height: 200
  },
  placeText: {
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 28
  }
})

export default PlaceDetail