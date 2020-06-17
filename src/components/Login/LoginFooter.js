import React from 'react';
import {View,TouchableOpacity,Text,StyleSheet} from 'react-native';
const performAction=(action,navigation)=>{

    console.log('function called'+JSON.stringify(action))
        if(action === 'displayTerms'){
            //display terms and conditions
        }
        else if(action === 'signup')
            navigation.navigate('Signup')
 
}
const LoginFooter=(props) =>{
    return (
        <View style={styles.container}>
            <Text style={{color:'grey',fontSize:12}}>{props.content}</Text>
            <TouchableOpacity  onPress={() =>performAction(props.action,props.navigation) }>
                <Text style={{color:'blue'}}  > {props.clickableContent}</Text>
            </TouchableOpacity>
        </View>

    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    }
});
export default LoginFooter;