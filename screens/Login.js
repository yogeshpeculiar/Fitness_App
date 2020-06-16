import React, { useState,Component } from 'react';
import {Text,View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Login extends Component{
    constructor(props){
        super(props);
    } 
render(){
    const { navigate } = this.props.navigation;
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
                           
                           <View style={{
                                width: '80%',
                                height: "25%",
                                padding:5,
                                backgroundColor: 'white',
                                flexDirection:'row',
                                justifyContent:'center',
                                alignItems:'center',
                                borderColor:'grey',
                                borderWidth:1,
                                borderRadius:8,
                                
                                }}>
                                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                            <FontAwesome
                                                name="facebook"
                                                color="black"
                                                size={28}
                                                ></FontAwesome>
                                        </View>
                                        <View style={{flex:0.5}}>
                                            <Text style={{fontSize:32,color:'grey'}}>|</Text>
                                        </View>
                                        <View style={{flex:3}}>
                                            <TouchableOpacity  onPress={()=>{}}>
                                            <Text >Log in with Facebook</Text>
                                            </TouchableOpacity>
                                        </View>
                                       
                                </View>

                                <View style={{
                                    width: '80%',
                                    height: "25%",
                                    padding:5,
                                    backgroundColor: 'white',
                                    borderRadius:8,
                                    flexDirection:'row',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    borderColor:'grey',
                                    borderWidth:1
                                }}>
                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                            <FontAwesome
                                                name="google"
                                                color="black"
                                                size={28}
                                                ></FontAwesome>
                                        </View>
                                        <View style={{flex:0.5}}>
                                            <Text style={{fontSize:32,color:'grey'}}>|</Text>
                                        </View>
                                        <View style={{flex:3}}>
                                            <TouchableOpacity  onPress={()=>{}}>
                                            <Text >Log in with Google</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                                <View style={{
                                width: '80%',
                                height: "25%",
                                padding:5,
                                backgroundColor: 'white',
                                flexDirection:'row',
                                justifyContent:'center',
                                alignItems:'center',
                                borderColor:'grey',
                                borderWidth:1,
                                borderRadius:8
                                }}>
                                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                            <FontAwesome
                                                name="envelope-square"
                                                color="black"
                                                size={28}
                                                ></FontAwesome>
                                        </View>
                                        <View style={{flex:0.5}}>
                                            <Text style={{fontSize:32,color:'grey'}}>|</Text>
                                        </View>
                                        <View style={{flex:3}}>
                                            <TouchableOpacity  onPress={() => {this.props.navigation.navigate('signInWithRegisteredEmail')}}>
                                            <Text >Log in with a registered email</Text>
                                            </TouchableOpacity>
                                    </View>
                                </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                        <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <Text style={{color:'grey',fontSize:12}}>By proceeding further, you are agreeing to our </Text>
                            <TouchableOpacity>
                                <Text style={{color:'blue'}}> terms & conditions </Text>
                            </TouchableOpacity>
                        </View>
                </View>
                <View style={{flex:1}}>
                        <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <Text style={{color:'grey',fontSize:12}}>Dont't have an account? </Text>
                            <TouchableOpacity  onPress={() => {this.props.navigation.navigate('Signup')}} >
                                <Text style={{color:'blue'}}> Sign up</Text>
                            </TouchableOpacity>
                        </View>   
                </View>
           </View>
           
       </View>
    );
}
}

