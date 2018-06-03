import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import ListItem from './src/components/ListItem/ListItem'
import PlaceList from './src/components/PlaceList/PlaceList'
import PlaceInput from './src/components/PlaceInput/PlaceInput'
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'

import kappa from './src/assets/kappa.png'

export default class App extends React.Component {
  state = {
    name: '',
    places: [],
    selectedPlace: null
  }

  changePlace = (value) => {
    this.setState({
      placeName: value
    })
  }

  addPlace = () => {
    if (this.state.placeName.trim()) {
      this.setState(prevState => {
        return {
          places: [
            ...prevState.places,
            {
              key: Math.random().toString(),
              name: prevState.placeName,
              image: kappa
            }
          ]
        }
      })
    }
  }

  showModal = (key) => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => place.key === key)
      }
    })
  }

  deleteItem = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => place.key !== prevState.selectedPlace.key),
        selectedPlace: null
      }
    })
  }

  closeModal = () => {
    this.setState({selectedPlace: null})
  }

  render() {

    return (
      <View style={styles.container}>
        <PlaceDetail
          onItemDeleted={this.deleteItem}
          onModalClosed={this.closeModal}
          selectedPlace={this.state.selectedPlace}
        />

        <PlaceInput
          placeName={this.state.placeName}
          changePlace={this.changePlace}
          addPlace={this.addPlace}
        />

        <PlaceList 
          places={this.state.places}
          onItemPressed={this.showModal}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
