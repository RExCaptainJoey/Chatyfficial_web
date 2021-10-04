import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCFKb3Hs7RkekBJ7DbXKZDZA72K1lO1mMA",
    authDomain: "chatyfficial-web.firebaseapp.com",
    projectId: "chatyfficial-web",
    storageBucket: "chatyfficial-web.appspot.com",
    messagingSenderId: "978150417044",
    appId: "1:978150417044:web:9bebf6f27376316ef3ca81",
    measurementId: "G-05RLCBT5FK"
}
firebase.initializeApp(config)
firebase.firestore().settings({
    timestampsInSnapshots: true
})

export const myFirebase = firebase
export const myFirestore = firebase.firestore()
export const myStorage = firebase.storage()
