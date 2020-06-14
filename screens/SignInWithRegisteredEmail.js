import React, { useState,Component } from 'react';
import {Text,View,TextInput,Button,ScrollView,KeyboardAvoidingView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
export default class SignInWithRegisteredEmail extends Component{
    constructor(props){
        super(props);
        this.state={
            icon:"eye-off",
            password:true
        }
    }
    changePasswordVisibility(){
        this.setState(
            prevState=>({
               icon:prevState.icon==='eye'?'eye-off':'eye',
               password:!prevState.password
            })
            
        );
        console.log(JSON.stringify(this.state.password))
    }
   
    render(){
        return(
           
        //    <View style={{flex:1,marginLeft:20,marginRight:20}}>
    
                <KeyboardAwareScrollView  contentContainerStyle={{flexGrow:1,marginLeft:20,marginRight:20}}>
                    
                
<View style={{flex:2,justifyContent:'center'}}>
                <Text style={{fontSize:28}}>Sign in</Text>
                </View>
                <View style={{flex:7,justifyContent:'center'}}>
                    
                        <View style={{flex:2,justifyContent:'space-evenly'}}>
                            <Text style={{fontSize:18}}>Email</Text>
                            <TextInput 
                                placeholder="Your email"
                                placeholderTextColor="grey"
                                style={{marginTop:10,color:'black',fontSize:18,borderBottomColor:'grey',borderBottomWidth:1,marginRight:30}}
                                autoCapitalize="none"
                                
                                />
                            <Text style={{fontSize:18,marginTop:15}}>Password</Text>
                               <View style={{flexDirection:'row'}}>
                            <TextInput 

                                placeholder="Your password"
                                placeholderTextColor="grey"
                                style={{marginTop:20,flex:1,color:'black',fontSize:18,borderBottomColor:'grey',borderBottomWidth:1}}
                                autoCapitalize="none"
                                secureTextEntry={this.state.password}
                                
                                />
                                 <TouchableOpacity
                                        style={{marginTop:20,marginRight:10}}
                                        onPress={()=>this.changePasswordVisibility()}>
                                        <Feather 
                                            name={this.state.icon}
                                            color="black"
                                            size={20}
                                        />
                                    </TouchableOpacity>
                                </View>
                                

                            <TouchableOpacity style={{alignItems:'flex-end'}}>
                                <Text style={{color:'blue'}}>Forgot password?</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{backgroundColor:'blue',borderRadius:25,width:'30%',alignItems:'center',marginLeft:"35%",padding:5}}>
                                <Text style={{color:'white', fontSize:22,marginLeft:10,marginRight:10}}>Sign in</Text>
                            </TouchableOpacity>
                            
                        </View>
                       
                        <View style={{flex:3,justifyContent:'center',alignItems:'center',marginLeft:20,marginRight:20}}>
                            <View style={{flex:1,flexDirection:'column',justifyContent:'center'}}>
                                <Text style={{fontSize:16}}>By proceeding further, you are agreeing to our </Text>
                                <TouchableOpacity style={{}}>
                                    <Text style={{color:'blue',fontSize:17}}>terms & conditions</Text>
                                </TouchableOpacity>
                            </View>
                            
                            <View style={{flex:3,flexDirection:'row',justifyContent:'center',alignItems:'flex-start'}}>
                                <Text style={{fontSize:16}}>Don't have an account? </Text>
                                <TouchableOpacity style={{}}>
                                    <Text style={{color:'blue',fontSize:17}}> Sign up</Text>
                                </TouchableOpacity>
                            </View>
                            
                             
                        </View>
                       
                        
                           
                </View>
              </KeyboardAwareScrollView> 

              
            //   <ScrollView contentContainerStyle={{flex:1}}>
            //       <View style={{flex:2,backgroundColor:'blue'}}>

            //       </View>
            //       <View style={{flex:3,backgroundColor:'green'}}>
                      
            //       </View>
            //   </ScrollView>
             
        );
    }
}

