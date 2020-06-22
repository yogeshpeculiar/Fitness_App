import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput, ToastAndroid, Platform, AlertIOS } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

showMessage = (msg) => {
    if (Platform.OS === 'android') {
        ToastAndroid.show(msg, ToastAndroid.SHORT)
    } else {
        AlertIOS.alert(msg);
    }
}
const PasswordElement = (props) => {
    const [icon, setIcon] = useState('eye-off');
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);

    changePasswordVisibility = () => {
        if (icon === 'eye')
            setIcon('eye-off')
        else
            setIcon('eye')

        if (isPasswordHidden)
            setIsPasswordHidden(false)
        else
            setIsPasswordHidden(true)
        console.log(JSON.stringify(isPasswordHidden))
    }

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.label}>Password </Text>
                <TouchableOpacity
                    style={styles.help}
                    onPress={() => showMessage('Password should be minimum six characters')}>
                    <FontAwesome
                        name="question-circle-o"
                        color="grey"
                        size={22}
                    ></FontAwesome>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TextInput
                    placeholder="Your password"
                    placeholderTextColor="grey"
                    style={styles.password}
                    autoCapitalize="none"
                    secureTextEntry={isPasswordHidden}
                    {...props}
                />
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => changePasswordVisibility()}>
                    <Feather
                        name={icon}
                        color="black"
                        size={20}
                    />
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create(
    {
        container:{
            flexDirection:'row'
        },
        label:{
            fontSize: 18,
            marginTop: 20 
        },
        help:{ 
            marginTop: 20, 
            marginRight: 10 
        },
        password:{ 
            marginTop: 20, 
            flex: 1, 
            color: 'black', 
            fontSize: 18,
             borderBottomColor: 'grey', 
             borderBottomWidth: 1
             },
        icon:{
             marginTop: 35,
              marginRight: 10
             }
    }
);

export default PasswordElement;