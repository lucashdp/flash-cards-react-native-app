import { GET_DECKS, LOADING } from './action'

const initialState =
    {
        decks: [],
        loading: true
    }

export default function decks(state = initialState, action) {
    const { decks } = action;

    switch (action.type) {
        case GET_DECKS:
            console.log('[REDUCER-DECKS] Getting Decks');
            return {
                ...state,
                decks
            }
        case LOADING:
            console.log('[REDUCER-DECKS] Loading');
            const { loading } = action;
            return {
                ...state,
                loading
            }
        default:
            return state
    }
}