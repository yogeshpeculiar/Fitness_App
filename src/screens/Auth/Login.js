import React, { useState,Component } from 'react';
import {Text,View} from 'react-native';
import LoginElement from '../../components/Login/LoginElement';
import LoginFooter from '../../components/Login/LoginFooter';
import { attemptGoogleAuth } from '../../API/firebaseMethods';
export default class Login extends Component{
    constructor(props){
        super(props);
    } 
    facebookLogin=()=>{

    }
    gmailLogin=()=>{
        // attemptGoogleAuth();
    }
    registeredEmailLogin = () =>{
        this.props.navigation.navigate('signInWithRegisteredEmail')
    }
    showTermsandConditions=()=>{
        
    }
render(){

    return(
       <View style={{flex:1,backgroundColor:'white'}}>
           <View style={{flex:2,justifyContent:'flex-end',alignItems:'center'}}>
                <Text style={{fontSize:48,fontStyle:"italic"}}>App_name</Text>
           </View>
           

           <View style={{flex:4}}>
                <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
                        <Text>To proceed further, please login</Text>
                </View>
                <View style={{flex:2,justifyContent:'space-evenly',alignItems:'center'}}>
                      <LoginElement iconName="facebook" title="Log in with Facebook" onPress={this.facebookLogin}/>
                      <LoginElement iconName="google" title="Log in with Google" onPress={this.gmailLogin} />
                      <LoginElement iconName="envelope-square" title="Log in with registered email" onPress={() => this.registeredEmailLogin()} />
                </View>

                <LoginFooter content="By proceeding further, you are agreeing to our " clickableContent="terms & conditions " onPress={()=> this.showTermsandConditions()} />
                
                <View style={{flex:1,justifyContent:'flex-start',flexDirection:'row',alignItems:'flex-start'}}>
                    <LoginFooter content="Dont't have an account? " clickableContent=" Sign up" onPress={()=>this.props.navigation.navigate('Signup')} />
                </View>
           </View>
           
       </View>
    );
}
}


