import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { actionGetDecks, actionLoading } from './action';

const reload = (loading) => {
  const dispatch = this.props.dispatch;
  const actLoading = actionLoading(loading);
  dispatch(actLoading);
}

const getDecks = () => {
  reload(false);
  return this.props.decks;
}

const DeckList = props => (
  <TouchableHighlight onPress={() => { }}>
    <View style={styles.container}>
      {Object.keys(props.decks).map((key) => {
        return (
          <View style={styles.box} key={key + 'view'}>
            <Text style={styles.center} key={key + 'title'}>{decks[key].title} </Text>
            <Text style={styles.center} key={key + 'cards'}>{decks[key].questions.length} cards</Text>
          </View>);
      }
      )}
    </View>
  </TouchableHighlight>
);

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

function mapStateToProps(state) {
  return {
    decks: getDecks(),
    loading: state.loading
  };
}

export default connect(mapStateToProps)(DeckList);
