export const SET_DECKS = 'SET_DECKS';
export const LOADING = 'LOADING';

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