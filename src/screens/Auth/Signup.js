import React, { Component } from 'react';
import { Text, View, TextInput, ToastAndroid, Platform, AlertIOS } from 'react-native';
import { TouchableOpacity, FlingGestureHandler } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { registerUser, registerTrainer, addTrainerDetails } from '../../API';
import { CheckBox } from 'react-native-elements'
import RadioForm from 'react-native-simple-radio-button';
import uploadImage from '../../API/methods';
import * as actionCreators from "../../store/actions";
import { connect } from "react-redux";
import RouteNames from "../../navigation/RouteNames";
import FormElement from '../../components/Signup/FormElement';
import PasswordElement from '../../components/Signup/PasswordElement';
import LoginFooter from '../../components/Login/LoginFooter';
import ActionButton from '../../components/Signup/ActionButton';
import EmailValidation from '../../Validation/Email';
import PasswordValidation from '../../Validation/Password';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userRole: 'user',
            height: '80%',
            name: '',
            email: '',
            password: '',
            referralCode: '',
            agreeToTerms: false,
            nameError: null,
            emailError: null,
            passwordError: null,
            checked: false

        }
    }
    
    showMessage(msg) {

        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.SHORT)
        } else {
            AlertIOS.alert(msg);
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
    
    async signup() {
        if (this.validateInputs()) {

            console.log(this.state.userRole)
            if (this.state.userRole === 'user') {
                var result = await registerUser(this.state.email.text, this.state.password.text);
                console.log('-------------' + result);
                if (result) {
                    this.props.setAuthToken(result.jwt);
                    this.props.setAuthenticated(true);
                }
                else
                    this.showMessage('signup failed')
            }
            else {
                var result = await registerTrainer(this.state.email.text, this.state.password.text);
                if (result) {
                    this.props.setAuthToken(result.jwt);
                    this.props.navigation.navigate('TrainerSignupDetails')
                }
                else {
                    this.showMessage('signup failed')
                }
            }
        }
    }


    render() {
        var radio_props = [
            { label: 'User  ', value: 'user' },
            { label: 'Trainer', value: 'trainer' }
        ];
        return (
            <KeyboardAwareScrollView enableOnAndroid={true} contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white' }}>

                <View style={{ flex: 1, marginLeft: 20, marginRight: 20, justifyContent: 'center', marginTop: 40 }}>
                    <View style={{ flexDirection: 'row' }}>

                        <Text style={{ color: 'black', fontSize: 20, marginRight: 40 }}>Signup as :</Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            formHorizontal={true}
                            onPress={() => { }}
                            labelColor={'black'}
                            animation={true}
                            buttonColor={'black'}
                            selectedButtonColor={'blue'}
                            selectedLabelColor={'black'}
                            labelStyle={{ marginRight: 25 }}
                            onPress={(value) => { this.setState({ userRole: value }) }}
                        />
                    </View>
                    <View style={{ flex: 2, justifyContent: 'center', marginBottom: 20, marginTop: 20 }}>
                        <FormElement label="Email" placeholder="Your Email" onChangeText={(text) => this.setState({ email: { text } })} />
                        {!!this.state.emailError && (
                            <Text style={{ color: "red" }}>{this.state.emailError}</Text>
                        )}

                        <PasswordElement onChangeText={(text) => { this.setState({ password: { text } }); console.log(this.state.password) }} />
                        {!!this.state.passwordError && (
                            <Text style={{ color: "red" }}>{this.state.passwordError}</Text>
                        )}

                        <FormElement label="Refferral Code" placeholder="Have referral code?(Optional)" onChangeText={(text) => { this.setState({ referralCode: { text } }) }} />
                        <CheckBox
                            center
                            title={<TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row' }}>
                                <Text>I accept the </Text>
                                <Text style={{ color: 'blue' }}>terms & conditions</Text>
                            </TouchableOpacity>}
                            containerStyle={{ backgroundColor: 'white', backfaceVisibility: "hidden", borderColor: 'white', marginTop: 20 }}
                            checked={this.state.checked}
                            onPress={() => { this.setState({ checked: !this.state.checked }), console.log(this.state.checked) }}
                        />
                        <ActionButton onPress={() => this.signup()} label="Sign up" />

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginTop: 30 }}>
                            <LoginFooter content="Already have an account?  " clickableContent=" Sign in" onPress={() => this.props.navigation.navigate('login')} />
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    setAuthToken: (token) => dispatch(actionCreators.setAuthToken(token)),
    setAuthenticated: (value) => dispatch(actionCreators.setAuthenticated(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);