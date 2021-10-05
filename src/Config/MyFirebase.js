import firebase from 'firebase/compat/app';

const config = {
    apiKey: "AIzaSyDG-vBfyGBB81-LjjIC6NsHFoIVDdVC6lw",
    authDomain: "chatyfficial-web-b2467.firebaseapp.com",
    projectId: "chatyfficial-web-b2467",
    storageBucket: "chatyfficial-web-b2467.appspot.com",
    messagingSenderId: "576628956991",
    appId: "1:576628956991:web:616fe58646f83bf14b3d8a",
    measurementId: "G-BJQ2QWR9V8"
}
firebase.initializeApp(config)
firebase.firestore().settings({
    timestampsInSnapshots: true
})

export const myFirebase = firebase
export const myFirestore = firebase.firestore
export const myStorage = firebase.storage
