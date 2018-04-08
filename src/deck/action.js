export const GET_DECKS = 'GET_DECKS';
export const LOADING = 'LOADING';

export function actionGetDecks(decks) {
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