import React, { Component } from 'react';
// import {Text} from 'react-native';


// function Listings({navigation}){
//     return ( 
//         <Text>hey login is successful !!!</Text>
//     )
// }
// export default Listings;

import { connect } from "react-redux";
import { View,Text } from 'react-native'

class Listings extends Component{
    render(){
        return(
            <View>
                <Text>{this.props.jwt}</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        jwt: state.jwt
    }
}
export default connect(mapStateToProps)(Listings)