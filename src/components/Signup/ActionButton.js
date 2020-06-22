import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ActionButton = (props) => {
    return (
        <TouchableOpacity style={styles.container} {...props}>
            <Text style={styles.label}>{props.label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: 'blue',
            borderRadius: 25,
            width: '30%',
            alignItems: 'center',
            marginLeft: "35%",
            padding: 5,
            marginTop: 20
        },
        label:{
            color: 'white',
            fontSize: 22,
            marginLeft: 10,
            marginRight: 10
}
    }
);

export default ActionButton;