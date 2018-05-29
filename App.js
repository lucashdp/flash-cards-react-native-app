import React from 'react';
import MainNavigator from './src/app/MainNavigator';
import DeckList from './src/deck/DeckList';
import reducer from './src/deck/reducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { StackNavigator } from 'react-navigation';
import Expo from "expo";
import { StatusBar } from 'react-native';
import { actionSetDecks, actionLoading } from './src/deck/action';
import { setNotification } from './utils/localNotification'

const store = createStore(reducer);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }

  componentDidMount() {
    setNotification();
    StatusBar.setHidden(true);
    console.disableYellowBox = true;
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
