export const GET_DECKS = 'GET_DECKS';
export const LOADING = 'LOADING';
export const SET_ANSWER = 'SET_ANSWER';
export const START_QUIZ = 'START_QUIZ';
export const SAVE_CARD = 'SAVE_CARD';
export const SAVE_DECK = 'SAVE_DECK';

export function actionSetDecks(decks) {
  return {
    type: GET_DECKS,
    decks
  }
}

export function actionLoading(loading) {
  return {
    type: LOADING,
    loading
  }
}

export function actionSetAnswer(answer, deck, question) {
  return {
    type: SET_ANSWER,
    answer,
    deck,
    question
  }
}

export function actionStartQuiz(deck) {
  return {
    type: START_QUIZ,
    deck
  }
}

export function actionSaveCard(deck, card) {
  return {
    type: SAVE_CARD,
    deck,
    card
  }
}

export function actionSaveDeck(deck) {
  return {
    type: SAVE_DECK,
    deck
  }
}