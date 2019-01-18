import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, CardSection, Spinner } from './common';
import Auth from './Auth';

class App extends Component {
    state = { loggedIn: null }

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

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        })
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <Auth />;

            default:
                    return (
                        <CardSection>
                            <Spinner size="large" />
                        </CardSection>
                    );
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;