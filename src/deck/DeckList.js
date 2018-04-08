import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { getDecks } from './reducer';
import { actionGetDecks, actionLoading } from './action'

class DeckList extends Component {
  constructor(props) {
    super(props);

    this.getDecks = this.getDecks.bind(this);
    this.reload = this.reload.bind(this);
  }

  reload(loading) {
    const dispatch = this.props.dispatch;
    const actLoading = actionLoading(loading);
    dispatch(actLoading);
  }

  getDecks() {
    const dispatch = this.props.dispatch;

    this.reload(true);
    const decks = {
      React: {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      JavaScript: {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    };

    const action = actionGetDecks(decks);
    dispatch(action);
    this.reload(false, dispatch);
  }

  componentDidMount() {
    console.log('getting decks component did mount');
    this.getDecks();
  }

  render() {
    const { decks } = this.props;
    const keys = Object.keys(decks);

    return (
      <View style={styles.container}>
        {keys.map(key => <Text key={key}>{decks[key].title} </Text>)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: '#e76e63',
    margin: 10,
  }
})

function mapStateToProps(state) {
  return {
    decks: state.decks
  };
}

export default connect(mapStateToProps)(DeckList);
