import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Text } from 'react-native'

class Listings extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.jwt}</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        jwt: state.auth.jwt
    }
}
export default connect(mapStateToProps)(Listings)