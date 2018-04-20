import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './src/deck/DeckList';
import Deck from './src/deck/Deck';
import reducer from './src/deck/reducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { StackNavigator } from 'react-navigation';

const store = createStore(reducer, applyMiddleware(thunk));

const DeckNavigation = StackNavigator({
  DeckList: {
    screen: DeckList
  },
  Deck: {
    screen: Deck
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <DeckNavigation />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
