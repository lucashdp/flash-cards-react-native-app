import { GET_DECKS, LOADING } from './action'

const initialState =
    {
        decks: {
            React: {
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
            return initialState
    }
}