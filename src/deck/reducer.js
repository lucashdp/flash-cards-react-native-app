import { SET_DECKS, LOADING, SET_ANSWER } from './action'
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
                        answer: 'YES !!'
                    },
                    {
                        question: 'Can you make Ajax requests with React?',
                        answer: 'YES !!'
                    }
                ]
            },
            JavaScript: {
                id: 2,
                title: 'JavaScript',
                questions: [
                    {
                        question: 'Javascript is just a frontend language?',
                        answer: 'NO !!'
                    }
                ]
            }
        },
        loading: true,
        progress: 0,
        points: 0
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
        case SET_ANSWER:
            console.log('[REDUCER-DECKS] SET ANSWER');
            const { answer, deck } = action;
            return {
                ...state,
                points: (answer ? state.points + 1 : state.points),
                progress: (answer ? GetProgress(deck, state.progress) : state.progress)
            }
        default:
            return initialState
    }
}

function GetProgress(deck, progress) {
    let percent = 100 / deck.questions.length;
    percent += progress;
    console.log('percent: ' + percent);

    return percent;
}

export function getDecks(state) {
    console.log('entrou mapStateToProps');
    const deckKeys = Object.keys(state.decks);
    console.log('deckKeys ' + JSON.stringify(deckKeys));
    const decks = deckKeys.map(key => state.decks[key]);
    console.log('decks ' + JSON.stringify(decks));

    return decks;
}