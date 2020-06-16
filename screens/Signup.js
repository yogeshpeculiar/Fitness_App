import React, { Component } from 'react';
import { Text, View, TextInput, ToastAndroid, Platform, AlertIOS } from 'react-native';
import { TouchableOpacity, FlingGestureHandler } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { registerUser } from '../src/API/methods';
import { CheckBox } from 'react-native-elements'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: "eye-off",
            isPasswordHidded: true,
            height: '80%',
            name: '',
            email: '',
            password: '',
            referralCode: '',
            agreeToTerms: false,
            nameError: null,
            emailError: null,
            passwordError: null

        }
    }
    changePasswordVisibility() {
        this.setState(
            prevState => ({
                icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
                isPasswordHidded: !prevState.isPasswordHidded
            })

        );
        console.log(JSON.stringify(this.state.isPasswordHidded))
    }
    showMessage(msg) {

        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.SHORT)
        } else {
            AlertIOS.alert(msg);
        }
    }
    validateInputs() {
        let isValid = true;
        let temail = '';
        let tpassword = ''
        if (this.state.email != "") {
            temail = JSON.stringify(this.state.email.text);
            temail = temail.slice(1, -1);
        }
        if (this.state.password != "") {
            tpassword = JSON.stringify(this.state.password.text);
            tpassword = tpassword.slice(1, -1);
        }

        var reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (this.state.name === "") {
            this.setState(() => ({ nameError: "Name is required." }));
            isValid = false;
        }
        else
            this.setState(() => ({ nameError: null }));
        if (this.state.email === "") {
            this.setState(() => ({ emailError: "Email is required." }));
            isValid = false;
        }
        else if (reg.test(temail) === false) {
            this.setState(() => ({ emailError: "Invalid email" }));
            isValid = false;
        }
        else
            this.setState(() => ({ emailError: null }));


        if (this.state.password === "") {
            this.setState(() => ({ passwordError: "Password is required." }));
            isValid = false;
        }
        else if (tpassword.length < 6) {
            this.setState(() => ({ passwordError: "password should be atleast of 6 characters" }));
            isValid = false;
        }
        else
            this.setState(() => ({ passwordError: null }));

        return isValid;

    }

    async signup() {
        if (this.validateInputs()) {
            var result = await registerUser(this.state.email, this.state.password);

            console.log('-------------' + result);
            if (result) {
                this.props.navigation.navigate('EmailVerification', {
                    mail: this.state.email

                })
            }
            else {
                this.showMessage('signup failed')
            }
        }
    }

    render() {
        return (
            <KeyboardAwareScrollView enableOnAndroid={true} contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white' }}>

                <View style={{ flex: 1, marginLeft: 20, marginRight: 20, justifyContent: 'center', marginTop: 60 }}>


                    <View style={{ flex: 2, justifyContent: 'center', marginBottom: 20 }}>
                        <Text style={{ fontSize: 18 }}>Name</Text>
                        <TextInput
                            placeholder="Your name"
                            placeholderTextColor="grey"
                            style={{ marginTop: 10, color: 'black', fontSize: 18, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 30 }}
                            autoCapitalize="none"
                            onChangeText={(text) => { this.setState({ name: { text } }) }}
                        />
                        {!!this.state.nameError && (
                            <Text style={{ color: "red" }}>{this.state.nameError}</Text>
                        )}

                        <Text style={{ fontSize: 18, marginTop: 20 }}>Email</Text>
                        <TextInput
                            placeholder="Your email"
                            placeholderTextColor="grey"
                            style={{ marginTop: 10, color: 'black', fontSize: 18, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 30 }}
                            autoCapitalize="none"
                            onChangeText={(text) => {
                                this.setState({ email: { text } })
                                console.log(this.state.email)
                            }}
                        />
                        {!!this.state.emailError && (
                            <Text style={{ color: "red" }}>{this.state.emailError}</Text>
                        )}
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 18, marginTop: 20 }}>Password </Text>
                            <TouchableOpacity
                                style={{ marginTop: 20, marginRight: 10 }}
                                onPress={() => this.showMessage('Password should be minimum six characters')}>
                                <FontAwesome
                                    name="question-circle-o"
                                    color="grey"
                                    size={22}
                                ></FontAwesome>

                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>


                            <TextInput

                                placeholder="Your password"
                                placeholderTextColor="grey"
                                style={{ marginTop: 20, flex: 1, color: 'black', fontSize: 18, borderBottomColor: 'grey', borderBottomWidth: 1 }}
                                autoCapitalize="none"
                                secureTextEntry={this.state.isPasswordHidded}
                                onChangeText={(text) => { this.setState({ password: { text } }); console.log(this.state.password) }}
                            />
                            <TouchableOpacity
                                style={{ marginTop: 20, marginRight: 10 }}
                                onPress={() => this.changePasswordVisibility()}>
                                <Feather
                                    name={this.state.icon}
                                    color="black"
                                    size={20}
                                />
                            </TouchableOpacity>
                        </View>
                        {!!this.state.passwordError && (
                            <Text style={{ color: "red" }}>{this.state.passwordError}</Text>
                        )}

                        <Text style={{ fontSize: 18, marginTop: 20 }}>Refferral Code</Text>
                        <TextInput
                            placeholder="Have referral code?(Optional)"
                            placeholderTextColor="grey"
                            style={{ marginTop: 10, color: 'black', fontSize: 18, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 30 }}
                            autoCapitalize="none"
                            onChangeText={(text) => { this.setState({ referralCode: { text } }) }}
                        />

                        <CheckBox
                            center
                            title={<TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row' }}>
                                <Text>I accept the </Text>
                                <Text style={{ color: 'blue' }}>terms & conditions</Text>
                            </TouchableOpacity>}
                            containerStyle={{ backgroundColor: 'white', backfaceVisibility: "hidden", borderColor: 'white', marginTop: 20 }}
                            checked={this.state.checked}
                            onPress={() => this.setState({ checked: !this.state.checked })}
                        />
                        <TouchableOpacity onPress={() => this.signup()} style={{ backgroundColor: 'blue', borderRadius: 25, width: '30%', alignItems: 'center', marginLeft: "35%", padding: 5, marginTop: 20 }}>
                            <Text style={{ color: 'white', fontSize: 22, marginLeft: 10, marginRight: 10 }}>Sign up</Text>
                        </TouchableOpacity>

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginTop: 30 }}>
                            <Text style={{ fontSize: 16 }}>Already have an account? </Text>
                            <TouchableOpacity style={{}} onPress={() => { this.props.navigation.navigate('login') }}>
                                <Text style={{ color: 'blue', fontSize: 17 }}> Sign in</Text>
                            </TouchableOpacity>
                        </View>
                    </View>




                </View>
            </KeyboardAwareScrollView>



        );
    }
}

