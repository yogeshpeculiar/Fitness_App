import React from 'react';
import {  StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const FormElementTwo = (props) =>{
return(
    <TextInput placeholder={props.placeholder} style={styles.textInput}  {...props}></TextInput>
);
}
const styles = StyleSheet.create(
    {
        textInput: {
            marginTop: 20,
            color: 'black',
            fontSize: 22,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginRight: 15,
            marginLeft: 15
           
        }
    });

export default FormElementTwo;