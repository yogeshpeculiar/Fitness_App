import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity,StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FormElementTwo from '../../components/Login/FormElementTwo';
import PasswordElementTwo from '../../components/Login/PasswordElementTwo';
import ActionButtonTwo from '../../components/Login/ActionButtonTwo';
import { attemptGoogleAuth } from '../../API/firebaseMethods';
import { signInWithEmail } from '../../API/firebaseMethods';
import LoginFooter from '../../components/Login/LoginFooter';

export default class LoginTwo extends Component {
    constructor(props) {
        super(props);
        this.state={
            email: '',
            password: ''
        }
    }
   async signIn () {
        var result = await signInWithEmail(this.state.email.text,this.state.password.text);
        console.log('-------------' + result);
    }

    googleLogin =() =>{
            attemptGoogleAuth();
    }
    facebookLogin = () =>{

    }

    signUp(){
    //   this.props.navigator.navigate('LoginTwo')      
    }
    render() {
        return (
            <>
            <StatusBar backgroundColor={'white'}/>
            <KeyboardAwareScrollView enableOnAndroid={true} contentContainerStyle={styles.contentContainer}>
                <View style={styles.container}>
                    <View style={{ flex: 1.5 }}>

                    </View>
                    <View style={{ flex: 3, width: '100%', justifyContent: 'center', marginTop: 20 }}>
                        <Text style={styles.head} >SIGN IN</Text>
                        <FormElementTwo placeholder="Email"  onChangeText={(text) => this.setState({ email: { text } })}></FormElementTwo>
                        <PasswordElementTwo placeholder="Password" onChangeText={(text) => { this.setState({ password: { text } }); console.log(this.state.password) }} />
                        
                        <TouchableOpacity>
                            <Text style={styles.footerText}>Forgot Password?</Text>
                        </TouchableOpacity>

                        <ActionButtonTwo label="Sign In" onPress={() => this.signIn()}></ActionButtonTwo>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                            <   Text style={{ fontSize: 18, color: 'grey' }}>or continue with</Text>
                            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                                <TouchableOpacity onPress={()=>{this.googleLogin()}}>
                                    <FontAwesome name='google' size={28} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{this.facebookLogin()}}>
                                    <FontAwesome name='facebook' size={28} style={{ marginLeft: 20 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <LoginFooter content="Don't have an account?  " clickableContent=" Sign up" onPress={() => this.signUp()} />  
                    </View>
                    <View style={{ flex: 2 }}>
                    </View>
                      

                </View>
            </KeyboardAwareScrollView>
            </>
        );
    }
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
        },
        footerText:{
             fontSize: 16, 
             alignItems: 'center', 
             color: 'grey', 
             textAlign: 'center', 
             marginTop: 40, 
             marginBottom: 20 
        },
        contentContainer:{
            flexGrow: 1, 
            backgroundColor: 'white' 
        },
        container:{
             flex: 1, 
             justifyContent: 'center',
              alignItems: 'center', 
              marginRight: 20,
               marginLeft: 20
             },
        head:{ fontSize: 32, 
            textAlign: 'center' 
        },
       
    }
);