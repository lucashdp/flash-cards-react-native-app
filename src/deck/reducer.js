import { SET_DECKS, LOADING, SET_ANSWER, START_QUIZ } from './action'
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
                        answer: 'YES !!',
                        answered: false
                    },
                    {
                        question: 'Can you make Ajax requests with React?',
                        answer: 'YES !!',
                        answered: false
                    }
                ],
                progress: 0,
                points: 0
            },
            JavaScript: {
                id: 2,
                title: 'JavaScript',
                questions: [
                    {
                        question: 'Javascript is just a frontend language?',
                        answer: 'NO !!',
                        answered: false
                    }
                ],
                progress: 0,
                points: 0
            }
        },
        loading: true
    };

export default function decks(state = initialState, action) {

    const { decks, deck, answer, question, loading } = action;
    switch (action.type) {
        case SET_DECKS:
            console.log('[REDUCER-DECKS] Getting Decks');
            return {
                ...state,
                decks
            }
        case LOADING:
            console.log('[REDUCER-DECKS] Loading');
            return {
                ...state,
                loading
            }
        case START_QUIZ:
            console.log('[REDUCER-DECKS] Starting quiz');
            let decksMap1 = getDecks(state);
            console.log('decksMap1: ' + JSON.stringify(decksMap1));

            decksMap1.map((dk) => {
                if (dk.id === deck.id) {
                    dk.points = 0;
                    dk.progress = 0;
                }
                console.log('dk: ' + JSON.stringify(dk));
                dk.questions.map((qt) => {
                    console.log('qt: ' + JSON.stringify(qt));
                    qt.answered = false
                })
            });

            return {
                ...state,
                decks: decksMap1
            }
        case SET_ANSWER:
            console.log('[REDUCER-DECKS] SET ANSWER');
            let decksMap = getDecks(state);
            console.log('decksMap: ' + JSON.stringify(decksMap));

            decksMap.map((dk) => {
                if (dk.id === deck.id) {
                    dk.points = (answer ? dk.points + 1 : dk.points);
                    dk.progress = (answer ? GetProgress(dk, dk.progress) : dk.progress);
                }
                console.log('dk: ' + JSON.stringify(dk));
                dk.questions.map((qt) => {
                    console.log('qt: ' + JSON.stringify(qt));
                    if (qt.question === question.question)
                        qt.answered = true
                })
            });

            return {
                ...state,
                decks: decksMap
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
    console.log('state.decks: ' + JSON.stringify(state));
    const deckKeys = Object.keys(state.decks);
    console.log('deckKeys ' + JSON.stringify(deckKeys));
    const decks = deckKeys.map(key => state.decks[key]);
    console.log('decks ' + JSON.stringify(decks));

    return decks;
}