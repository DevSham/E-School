import React, {Component} from 'react';
var firebase = require('firebase');
// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
    apiKey: "AIzaSyAq-RBGQGUbXsC-BK61jYyzKz1QnXf1m9U",
    authDomain: "reactapp-1e49d.firebaseapp.com",
    projectId: "reactapp-1e49d",
    storageBucket: "reactapp-1e49d.appspot.com",
    messagingSenderId: "8381077253",
    appId: "1:8381077253:web:2e329f3b330b4972d5096c",
    measurementId: "G-X4Q1CSMHXD"
};


class Authent extends Component{
    render(){
        return(
                <p>I am auth</p>
        );
    }

}

export default Authent;