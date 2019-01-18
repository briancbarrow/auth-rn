import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { CardSection, Button, Card, AuthText, Spinner } from './common';

class Auth extends Component {
state = {
    email: '',
    password: '',
    signInError: '',
    loggingIn: false
};

onButtonPress() {
    this.setState({ signInError: '', loggingIn: true })
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            console.log('testing');
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.onLoginSuccess.bind(this))
                .catch((error) => {
                    this.onLoginError.bind(this);
                    this.onLoginError(error.message);
                });
        });
};

onLoginError(errorMessage) {
    this.setState({ signInError: errorMessage, loggingIn: false })
}

onLoginSuccess() {
    this.setState({
        email: "",
        password: "",
        loggingIn: false,
        signInError: ""
    })
}

renderButton() {
    if(this.state.loggingIn) {
        return <Spinner size="small" />;
    }
    return (
        <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>
    );
}

    render() {
        console.log('Auth state: ', this.state)
        return (
            <Card>
                <CardSection>
                    <AuthText
                        placeholder='user@gmail.com'
                        label='Email'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <AuthText
                        secureTextEntry
                        placeholder="password"
                        label='Password'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.signInError}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default Auth;