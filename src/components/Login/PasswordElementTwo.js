import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const PasswordElementTwo = (props) => {
    const [icon, setIcon] = useState('eye-off');
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);

   const changePasswordVisibility = () => {
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
                <TextInput
                    placeholder={props.placeholder}
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
            flexDirection:'row',
            marginLeft:15
        },
        password:{ 
            marginTop: 20, 
            flex: 1, 
            color: 'black', 
            fontSize: 22,
             borderBottomColor: 'grey', 
             borderBottomWidth: 1
             },
        icon:{
             marginTop: 35,
              marginRight: 10
             }
    }
);

export default PasswordElementTwo;