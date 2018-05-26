import React from 'react';
import { StackNavigator } from 'react-navigation';

import Deck from '../deck/Deck';
import DeckQuiz from '../deck/DeckQuiz';
import NewDeck from '../deck/NewDeck';
import NewCard from '../card/NewCard';
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
  NewCard: {
    screen: NewCard
  },
  NewDeck: {
    screen: NewDeck
  }
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

export default MainNavigator;