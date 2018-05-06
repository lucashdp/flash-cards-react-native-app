import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { actionSetDecks, actionLoading } from './action';
import { getStorageDecks } from '../../utils/api';
import { getDecks } from './reducer';

class DeckList extends Component {
  componentDidMount() {
    getStorageDecks()
      .then((decks) => {
        console.log('getDecks ' + JSON.stringify(decks));
        if (decks !== undefined && decks !== null)
          this.props.dispatch(actionSetDecks(decks))
      })
  }

  render() {
    return (
      <View style={styles.container}>
        {
          console.log('entrou TouchableHighlight')
        }
        {
          console.log('this.props.decks ' + JSON.stringify(this.props.decks))
        }
        {
          this.props.decks.map((key) => {
            console.log('key ' + JSON.stringify(key))
            return (
              <TouchableHighlight onPress={() => {  
                this.props.navigation.navigate('Deck', { title: key.title }) 
              }} 
              key={key.id + 'touchable'}>
                <View style={styles.box} key={key.id + 'view'}>
                  <Text style={styles.center} key={key.id + 'title'}>{key.title} </Text>
                  <Text style={styles.center} key={key.id + 'cards'}>{key.questions.length} cards</Text>
                </View>
              </TouchableHighlight>
            );
          }
          )}
      </View>
    );
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
});

function mapStateToProps(state) {
  return {
    decks: getDecks(state)
  };
}

export default connect(mapStateToProps)(DeckList);
