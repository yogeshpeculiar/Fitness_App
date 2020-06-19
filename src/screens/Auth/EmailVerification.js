import React, {Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Text,View,StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
export default class EmailVerficaton extends Component{
  
    constructor(props){
        super(props);
        this.state={
            firstDigitOfOTP:0,
            secondDigitOfOTP:0,
            thirdDigitOfOTP:0,
            fourthDigitOfOTP:0
        }
       
    }
   
    render(){
        
        const {mail}=this.props.route.params;
        var email=JSON.stringify(mail.text);
        email=email.slice(1, -1);

        return(
           <KeyboardAwareScrollView contentContainerStyle={{flexGrow:1,backgroundColor:'white'}}>
                <View style={{flex:1,marginLeft:20,marginRight:20}}>
                    
                    <View style={{flex:1,marginLeft:10,marginTop:20}}>
                        
                            <Text style={{fontSize:32}}>Verification</Text>
                        
                        <View style={{flexDirection:'row',marginTop:50}}>
                            <TextInput style={styles.otpInput} maxLength={2} keyboardType='numeric'  onChangeText={(text)=>{this.setState({firstDigitOfOTP:{text}})}}> </TextInput>
                            <TextInput style={styles.otpInput} maxLength={2} keyboardType='numeric'  onChangeText={(text)=>{this.setState({secondDigitOfOTP:{text}})}}> </TextInput>
                            <TextInput style={styles.otpInput} maxLength={2} keyboardType='numeric'  onChangeText={(text)=>{this.setState({thirdDigitOfOTP:{text}})}}> </TextInput>
                            <TextInput style={styles.otpInput} maxLength={2} keyboardType='numeric'  onChangeText={(text)=>{this.setState({fourthDigitOfOTP:{text}})  ,console.log(this.state.fourthDigitOfOTP) }}> </TextInput>
                          
                        </View>
                        <Text style={styles.instruction}>Please check your inbox for an OTP</Text>
                        <Text style={styles.note}>( If you don't find it in your inbox, please check spam folder)</Text>
                        <Text style={styles.email}>{email}</Text>
                        <Text style={[styles.email,{fontWeight: "bold"}]}>Resend OTP</Text>
                    </View>
                    <View style={{flex:5}}></View>
                  

                    
                    </View>
           </KeyboardAwareScrollView>

    
        );
    
    }
}

const styles=StyleSheet.create({
  otpInput:{
    width:50,
    borderBottomColor:'grey',
    borderBottomWidth:1,
    fontSize:22,
    textAlign:'center',
    marginLeft:10
  },
  instruction:{
    fontSize:16,
    marginTop:20
  },
  note:{
    fontSize:14,
    color:'grey',
    marginTop:10
  },
  email:{
      fontSize:16,
      color:'blue',
      marginTop:15
  }
    })