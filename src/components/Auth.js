import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { CardSection, Button, Card, AuthText } from './common';

class Auth extends Component {
state = {
    email: '',
    password: ''
};

    render() {
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

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>
                </CardSection>
            </Card>
        );
    }
}

export default Auth;