import React, { Component,useState } from 'react';
import { Text, View, TextInput,StyleSheet } from 'react-native';

const FormElement = (props) => {
    
    return (
        <View>
        <Text style={{ fontSize: 18, marginTop: 20 }}>{props.label}</Text>
        <TextInput
                
                placeholderTextColor="grey"
                style={styles.textInput}
                autoCapitalize="none"
                {...props}
            />
        </View>
    );
}
const styles = StyleSheet.create(
    {
        textInput: {
            marginTop: 10,
            color: 'black',
            fontSize: 18,
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            marginRight: 30
        }
    }
);
export default FormElement; 