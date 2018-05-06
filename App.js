import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigator from './src/app/MainNavigator';
import DeckList from './src/deck/DeckList';
import reducer from './src/deck/reducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { StackNavigator } from 'react-navigation';

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
