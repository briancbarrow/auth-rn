import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './common';
import Auth from './Auth';

class App extends Component {

    componentWillMount() {
        // Initialize Firebase
        firebase.initializeApp({
            apiKey: "AIzaSyD9gxCtAaXo9kd8-6bDQYKWBWskrBwlvZY",
            authDomain: "auth-rn-1ff38.firebaseapp.com",
            databaseURL: "https://auth-rn-1ff38.firebaseio.com",
            projectId: "auth-rn-1ff38",
            storageBucket: "auth-rn-1ff38.appspot.com",
            messagingSenderId: "1036008971950"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Auth />
            </View>
        );
    }
}

export default App;