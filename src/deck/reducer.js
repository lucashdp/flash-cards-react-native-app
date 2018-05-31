import { SET_DECKS, LOADING, SET_ANSWER, START_QUIZ, SAVE_CARD, SAVE_DECK } from './action';
import { setStateStorage } from '../../utils/api';

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
                progress: 0.00,
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
                progress: 0.00,
                points: 0
            }
        },
        loading: false,
        lastId: 2
    };

export default function decks(state = initialState, action) {
    const { decks, deck, answer, question, loading, card } = action;
    let decksMap = getDecks(state);

    switch (action.type) {
        case SET_DECKS:
            debugger
            return {
                ...state,
                decks
            }
        case LOADING:
            return {
                ...state,
                loading
            }
        case START_QUIZ:

            decksMap.map((dk) => {
                if (dk.id === deck.id) {
                    dk.points = 0;
                    dk.progress = 0.00;
                }
                dk.questions.map((qt) => {
                    qt.answered = false
                })
            });

            return {
                ...state,
                decks: decksMap
            }
        case SET_ANSWER:

            decksMap.map((dk) => {
                if (dk.id === deck.id) {
                    dk.points = (answer ? dk.points + 1 : dk.points);
                    const num = GetProgress(dk, dk.progress);
                    dk.progress = Math.round(num * 100) / 100;
                }
                dk.questions.map((qt) => {
                    if (qt.question === question.question)
                        qt.answered = true
                })
            });

            return {
                ...state,
                decks: decksMap
            }
        case SAVE_CARD:
            decksMap.map((dk) => {
                if (dk.id === deck.id) {
                    dk.questions.push(card);
                }
            });

            setStateStorage({
                ...state,
                decks: decksMap
            });

            return {
                ...state,
                decks: decksMap
            }
        case SAVE_DECK:

            decksMap.push(deck);

            setStateStorage({
                ...state,
                decks: decksMap,
                lastId: state.lastId + 1
            });

            return {
                ...state,
                decks: decksMap,
                lastId: state.lastId + 1
            }
        default:
            return state
    }
}

function GetProgress(deck, progress) {
    let percent = 100 / deck.questions.length;
    percent += progress;

    return percent;
}

export function getDecks(state) {
    const deckKeys = Object.keys(state.decks);
    const decks = deckKeys.map(key => state.decks[key]);

    return decks;
}