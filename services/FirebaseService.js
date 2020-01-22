import ApiKeys from '../constants/ApiKeys';
import * as firebase from 'firebase';

export default FirebaseService = {
    initializeApp() {
        if(!firebase.apps.length) {
            firebase.initializeApp(ApiKeys.FirebaseConfig);
        }
    },

    getReference(weekNumber) {
        return firebase.database().ref().child(weekNumber);
    },

    changeHometask(dayName, subject, newHometask) {
        firebase.database().ref().child('firstWeek').child(dayName).update({
            [subject]: newHometask
        });
    }
}