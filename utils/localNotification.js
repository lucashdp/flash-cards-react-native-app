import { Notifications, Permissions } from 'expo';
import { AsyncStorage } from 'react-native';

const NOTIFICATION_STORAGE = 'Flashcards:Notification';

function createNotification() {
    return {
        title: 'Go through your decks!',
        body: "Hey guy ! Do not forget to train your quiz today !!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    };
}

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_STORAGE)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function setNotification() {
    AsyncStorage.getItem(NOTIFICATION_STORAGE)
        .then(JSON.parse)
        .then((notification) => {
            if (notification === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
                    if (status !== 'granted') {
                        return;
                    }

                    const notificationJson = JSON.parse(notification);
                    Notifications.cancelAllScheduledNotificationsAsync();

                    const tomorrow = new Date();
                    tomorrow.setDate(tomorrow.getDate() + 1);
                    tomorrow.setHours(19);
                    tomorrow.setMinutes(0);

                    Notifications.scheduleLocalNotificationAsync(
                        createNotification(),
                        {
                            time: tomorrow, repeat: 'day'
                        });

                    AsyncStorage.setItem(NOTIFICATION_STORAGE, JSON.stringify(true));
                });
            }
        });
}