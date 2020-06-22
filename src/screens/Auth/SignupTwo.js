import React, { Component } from 'react';
import { Text, View, TextInput,StyleSheet,TouchableOpacity } from 'react-native';
import { attemptGoogleAuth } from '../../API/firebaseMethods';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FormElementTwo from '../../components/Login/FormElementTwo';
import PasswordElementTwo from '../../components/Login/PasswordElementTwo';
import ActionButtonTwo from '../../components/Login/ActionButtonTwo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LoginFooter from '../../components/Login/LoginFooter';
import { CheckBox } from 'react-native-elements'
import EmailValidation from '../../Validation/Email';
import PasswordValidation from '../../Validation/Password';
import { signInWithEmail } from '../../API/firebaseMethods';

export default class SignupTwo  extends Component{
    constructor(props) {
        super(props);
        this.state={
            email: '',
            password: '',
            emailError: null,
            passwordError: null,
            checked: false
        }
    }

    validateInputs() {
        this.setState({ emailError: EmailValidation(this.state.email.text) })
        this.setState({ passwordError: PasswordValidation(this.state.password.text) })

        if (!this.state.checked)
            this.showMessage('kindly accept the terms and conditions')
        return (this.state.emailError == null &&
            this.state.passwordError == null &&
            this.state.checked)
    }

    async signUp () {
      if (this.validateInputs()) {
           //call the signup api based on the role of user         
                }
    }

    googleLogin =() =>{
            attemptGoogleAuth();
    }
    facebookLogin = () =>{

    }

    async signIn () {
        var result = await signInWithEmail(this.state.email.text,this.state.password.text);
        console.log('-------------' + result);
    }

    render() {
        return (
            <KeyboardAwareScrollView enableOnAndroid={true} contentContainerStyle={styles.contentContainer}>
                <View style={styles.container}>
                    <View style={{ flex: 1.5 }}>

                    </View>
                    <View style={{ flex: 1, width: '100%', justifyContent: 'center', marginTop: 20 }}>
                        <Text style={styles.head} >SIGN UP</Text>
                        <View style={{flex:1}}>
                        
                        <FormElementTwo placeholder="Email"  onChangeText={(text) => this.setState({ email: { text } })}></FormElementTwo>
                        {!!this.state.emailError && (
                            <Text style={{ color: "red",marginLeft:15}}>{this.state.emailError}</Text>
                        )}
                        <PasswordElementTwo placeholder="Password"  onChangeText={(text) => { this.setState({ password: { text } }); console.log(this.state.password) }} />
                        {!!this.state.passwordError && (
                            <Text style={{ color: "red",marginLeft:15 }}>{this.state.passwordError}</Text>
                        )}
                       
                        <CheckBox
                            center
                            title={<TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row' }}>
                                <Text style={{fontSize:16}}>I accept the </Text>
                                <Text style={{ color: '#0D1166',fontSize:16 }}>terms & conditions</Text>
                            </TouchableOpacity>}
                            containerStyle={{ backgroundColor: 'white', backfaceVisibility: "hidden", borderColor: 'white', marginTop: 20 }}
                            checked={this.state.checked}
                            onPress={() => { this.setState({ checked: !this.state.checked }), console.log(this.state.checked) }}
                        />
                        </View>
                        <View style={{flex:1}}>
                        <ActionButtonTwo label="Sign Up" onPress={() => this.signUp()}></ActionButtonTwo>
                        </View>

                        <View style={{flex:1 ,justifyContent: 'flex-start', alignItems: 'center', marginTop: 40 }}>
                            <   Text style={{ fontSize: 18, color: 'grey' }}>or continue with</Text>
                            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                <TouchableOpacity onPress={()=>{this.googleLogin()}}>
                                    <FontAwesome name='google' size={28} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{this.facebookLogin()}}>
                                    <FontAwesome name='facebook' size={28} style={{ marginLeft: 20 }} />
                                </TouchableOpacity>

                            </View>
                            <LoginFooter content="Already have an account?  " clickableContent=" Sign in" onPress={() => this.signIn()} />
                        </View>
                       
                    </View>
                    <View style={{ flex: 2 }}>
                    </View>
                        

                </View>
            </KeyboardAwareScrollView>
        );
    }
}
const styles = StyleSheet.create(
    {
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