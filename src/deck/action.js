export const SET_DECKS = 'SET_DECKS';
export const LOADING = 'LOADING';
export const SET_ANSWER = 'SET_ANSWER';

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

export function actionSetAnswer(answer, deck) {
  return {
    type: SET_ANSWER,
    answer,
    deck
  }
}