import Rebase from 're-base';
import firebase from 'firebase';

var app = firebase.initializeApp({
  apiKey: "AIzaSyB2iDnHHScTOMOvw4Ta5K_d77hUmUoUUxs",
  authDomain: "mp3-player-301114.firebaseapp.com",
  databaseURL: "https://mp3-player-301114-c9273.firebaseio.com",
  projectId: "youtube-mp3-player-301114",
  storageBucket: "youtube-mp3-player-301114.appspot.com",
  messagingSenderId: "882566245881",
  appId: "1:882566245881:web:50cb281b29b8664865a128"
});


var base = Rebase.createClass(app.database());

export const provider = new firebase.auth.GoogleAuthProvider();
export default base
