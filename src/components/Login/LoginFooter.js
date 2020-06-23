import React from 'react';
import {View,TouchableOpacity,Text,StyleSheet} from 'react-native';
const LoginFooter=(props) =>{
    return (
        <TouchableOpacity style={styles.container}  onPress={props.onPress}>
            <Text style={{color:'grey',fontSize:16}}>{props.content}</Text>
                <Text style={{color:'#0D1166'}}  >{props.clickableContent}</Text>
         </TouchableOpacity>
     );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop:20
    }
});
export default LoginFooter;