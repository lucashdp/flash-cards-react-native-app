import { getStateStorage } from './api';

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

export function setInitialState() {
    console.log('entrou em set initial state');
    return getStateStorage().then(res => {
        console.log('return get storage: ' + JSON.stringify(res));
        return res;
    })
}