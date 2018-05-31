import { AsyncStorage } from 'react-native';

export const STATE_STORAGE = 'Flashcards:State';

export function getStateStorage() {
    return AsyncStorage.getItem(STATE_STORAGE)
        .then((res) => {
            return JSON.parse(res);
        });
}

export function setStateStorage(state) {
    const stateJson = JSON.stringify(state);
    AsyncStorage.setItem(STATE_STORAGE, stateJson);
}