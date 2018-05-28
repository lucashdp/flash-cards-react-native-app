import { AsyncStorage } from 'react-native';

export const STATE_STORAGE = 'Flashcards:State';

export function getStateStorage() {
    console.log('entrou na api');
    return AsyncStorage.getItem(STATE_STORAGE)
        .then((res) => {
            return JSON.parse(res);
        });
}

export function setStateStorage(state) {
    const stateJson = JSON.stringify(state);
    console.log('stateJson: ', state);
    AsyncStorage.setItem(STATE_STORAGE, stateJson);
}