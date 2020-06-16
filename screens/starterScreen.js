import React, { Component } from 'react';
import { View, Text } from 'react-native';
import store from '../src/Redux/Store/index';

export default class starterScreen extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const empty = ''
        const state = store.getState();
        console.log(JSON.stringify(state.jwt))
        if (state.jwt === '')
            this.props.navigation.navigate('login');
        else {
            this.props.navigation.navigate('Listings');
            store.dispatch({ type: 'ADD_JWT', empty })
        }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                <Text>starter page</Text>
            </View>
        );
    }
}