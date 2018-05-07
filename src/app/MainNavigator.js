import React from 'react';
import { StackNavigator } from 'react-navigation';

import Deck from '../deck/Deck';
import Home from './Home';

const MainNavigator = StackNavigator({
  Home: {
    screen: Home,
  },
  Deck: {
    screen: Deck
  },
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

export default MainNavigator;