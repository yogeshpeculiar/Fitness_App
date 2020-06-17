import React, { useState,Component } from 'react';
import {Text,View} from 'react-native';
import LoginElement from '../src/components/Login/LoginElement';
import LoginFooter from '../src/components/Login/LoginFooter';
export default class Login extends Component{
    constructor(props){
        super(props);
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
                      <LoginElement iconName="facebook" title="Log in with Facebook" navigation={this.props.navigation} action="facebook"/>
                      <LoginElement iconName="google" title="Log in with Google" navigation={this.props.navigation} action="google"/>       
                      <LoginElement iconName="envelope-square" title="Log in with registered email" navigation={this.props.navigation} action="registeredMail"/>
                </View>

                <LoginFooter content="By proceeding further, you are agreeing to our " clickableContent="terms & conditions " navigation={this.props.navigation} action="displayTerms" />
                
                <View style={{flex:1,justifyContent:'flex-start',flexDirection:'row',alignItems:'flex-start'}}>
                <LoginFooter content="Dont't have an account? " clickableContent=" Sign up" navigation={this.props.navigation} action="signup" />
                </View>
           </View>
           
       </View>
    );
}
}

