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
                        question: 'Does React Native work with Android?',
                        answer: true
                    },
                    {
                        question: 'Can you make Ajax requests with React?',
                        answer: true
                    }
                ]
            },
            JavaScript: {
                id: 2,
                title: 'JavaScript',
                questions: [
                    {
                        question: 'Javascript is just a frontend language?',
                        answer: false
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