import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { actionGetDecks, actionLoading } from './action'

export default class Deck extends Component {

  render() {
    console.log('[DECK] RENDER')

    return (
      <View style={styles.container}>
            <Text style={styles.center} key={key+'title'}>teste</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 25
  },
  box: {
    height: 50,
    width: 200,
    backgroundColor: '#e76e63',
    margin: 10,
  },
  center: {
    textAlign: 'center',
  }
})
