import { AsyncStorage } from 'react-native';

export const DECKS_LIST = 'Decks_List';

export function getStorageDecks() {
    console.log('entrou na api');
    return AsyncStorage.getItem(DECKS_LIST)
        .then((res) => {
            console.log('API: ' + res);
            return JSON.parse(res);
        });
}