import React from 'react';
import {View,TouchableOpacity,Text,StyleSheet} from 'react-native';
const LoginFooter=(props) =>{
    return (
        <TouchableOpacity style={styles.container}  onPress={props.onPress}>
            <Text style={{color:'grey',fontSize:12}}>{props.content}</Text>
<<<<<<< HEAD
=======
            <TouchableOpacity  onPress={props.onPress}>
>>>>>>> 716948faaee5c4674808a6360e31ebddafccdf17
                <Text style={{color:'blue'}}  > {props.clickableContent}</Text>
         </TouchableOpacity>
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