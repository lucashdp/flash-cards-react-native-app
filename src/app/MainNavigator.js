import React from 'react';
import { StackNavigator } from 'react-navigation';

import Deck from '../deck/Deck';
import DeckList from '../deck/DeckList';

export const MainNavigator = StackNavigator({
  Home: {
    screen: DeckList,
  },
  Deck: {
    screen: Deck
  }
});
