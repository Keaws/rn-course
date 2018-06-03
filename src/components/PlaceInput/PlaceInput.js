import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


const PlaceInput = (props) => {

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={props.placeName}
        onChangeText={props.changePlace}
        style={styles.placeInput}
        placeholder='awesome place'
      />
      <Button
        title="Add"
        style={styles.placeButton}
        onPress={props.addPlace}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%'
  }
});

export default PlaceInput