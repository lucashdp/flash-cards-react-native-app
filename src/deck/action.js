export const SET_DECKS = 'SET_DECKS';
export const LOADING = 'LOADING';
export const SET_ANSWER = 'SET_ANSWER';
export const START_QUIZ = 'START_QUIZ';

export function actionSetDecks(decks) {
  return {
    type: SET_DECKS,
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