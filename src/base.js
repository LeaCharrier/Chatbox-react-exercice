import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDc4tsZf5rIgFQMYneW1xr9AYx3ZKVFpYk",
    authDomain: "chatbox-app-633d1.firebaseapp.com",
    databaseURL: "https://chatbox-app-633d1.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
