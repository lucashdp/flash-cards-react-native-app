import React from 'react';
import { StackNavigator } from 'react-navigation';

import Deck from '../deck/Deck';
import DeckQuiz from '../deck/DeckQuiz';
import DeckNewCard from '../deck/DeckNewCard';
import Home from './Home';

const MainNavigator = StackNavigator({
  Home: {
    screen: Home,
  },
  Deck: {
    screen: Deck
  },
  DeckQuiz: {
    screen: DeckQuiz
  },
  DeckNewCard: {
    screen: DeckNewCard
  },
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

export default MainNavigator;