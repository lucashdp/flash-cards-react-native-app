import { SET_DECKS, LOADING } from './action'
import { getStorageDecks } from '../../utils/api';

const initialState =
    {
        decks: {
            React: {
                id: 1,
                title: 'React',
                questions: [
                    {
                        question: 'What is React?',
                        answer: 'A library for managing user interfaces'
                    },
                    {
                        question: 'Where do you make Ajax requests in React?',
                        answer: 'The componentDidMount lifecycle event'
                    }
                ]
            },
            JavaScript: {
                id: 2,
                title: 'JavaScript',
                questions: [
                    {
                        question: 'What is a closure?',
                        answer: 'The combination of a function and the lexical environment within which that function was declared.'
                    }
                ]
            }
        },
        loading: true
    };

export default function decks(state = initialState, action) {
    const { decks } = action;

    switch (action.type) {
        case SET_DECKS:
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
            return initialState
    }
}

export function getDecks(state) {
    console.log('entrou mapStateToProps');
    const deckKeys = Object.keys(state.decks);
    console.log('deckKeys ' + JSON.stringify(deckKeys));
    const decks = deckKeys.map(key => state.decks[key]);
    console.log('decks ' + JSON.stringify(decks));

    return decks;
}