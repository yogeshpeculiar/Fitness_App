import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Text } from 'react-native'

class Listings extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.authToken}</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        authToken: state.user.authToken
    }
}
export default connect(mapStateToProps)(Listings)