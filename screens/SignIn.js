import React, { useState } from 'react';
import {Text,Image,View,StatusBar,StyleSheet,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import backgroundImage from '../assets/bg.jpg';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { login } from '../src/API/methods';
var radio_props = [
    {label: 'User  ', value: 0 },
    {label: 'Trainer', value: 1 }
  ];
function SignIn({navigation}){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [data, setData] = useState({
        secureTextEntry: true
    });
 
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    // const signIn = () => {
    //     const check=login(email,password);
    //      if(check==true)
    //         navigation.navigate('Listings')
    //     else
    //        console.log('incorect pswd---check---'+JSON.stringify(check))
    //     }

    const signIn = async () => {
        var result = await login(email,password) ;
      
        console.log('-------------'+result);
        if(result){
            navigation.navigate('Listings')
        }
        else{
            return(
                <Text style={{color:''}}>incorrect password</Text>
            );
        }
      }
    return(
        
        <View style={{flexDirection:'column',flex:1}}>
            <View style={styles.header}>
                <Image source={backgroundImage} style={styles.bgImage} />       
            </View>
            <View style={styles.footer}>
                <View style={{flexDirection:'row',marginBottom:20,marginTop:40}}>
                <Text style={{color:'white',fontSize:20,marginRight:50}}>Login as :</Text>
                <RadioForm
                        radio_props={radio_props}
                        initial={0}
                        formHorizontal={true}
                        onPress={()=>{}}
                        labelColor={'white'}
                        animation={true}
                        buttonColor={'white'}
                        selectedButtonColor={'white'}
                        selectedLabelColor={'white'}
                        labelStyle={{marginRight:25}}
                />
                
                </View>
            
                
               
                <ScrollView>
                <View style={{flexDirection:'row',borderBottomColor:'white',borderBottomWidth:2,width:'100%'}}>
                    <FontAwesome 
                            name="user-o"
                            color='white'
                            size={30}
                            style={{marginBottom:10}}
                        />
                    <TextInput 
                        placeholder="Email"
                        placeholderTextColor="grey"
                        style={{paddingLeft:20,color:'white',fontSize:22}}
                        autoCapitalize="none"
                        onChangeText={(text)=>{setEmail({text})}}/>
                </View>
                <View style={{flexDirection:'row',borderBottomColor:'white',borderBottomWidth:2,width:'100%',marginTop:35}}>
                    <FontAwesome 
                            name="lock"
                            color='white'
                            size={30}
                            style={{marginBottom:8}}
                        />
                    <TextInput 
                        placeholder="Password"
                        placeholderTextColor="grey"
                        secureTextEntry={data.secureTextEntry ? true : false}

                        style={{paddingLeft:20,color:'white',fontSize:22}}
                        autoCapitalize="none"
                        onChangeText={(text)=>{setPassword({text})}} />
                     <TouchableOpacity
                     style={{marginTop:10,marginLeft:140}}
                    onPress={updateSecureTextEntry}>
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="white"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="white"
                        size={20}
                    />
                    }
                </TouchableOpacity>
                </View>
             <TouchableOpacity>
                <Text style={{color: 'white', marginLeft:200 ,marginTop:15}}>Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={{marginTop:40,borderColor:'green',borderWidth:4,width:'50%',marginLeft:80}}
            onPress={signIn}
            >
              <Text style={{color:'white',fontSize:28,padding:5,paddingLeft:40,paddingRight:30}}>LOGIN</Text>  
            </TouchableOpacity>
            <View style={{flexDirection:'row',marginTop:20}}>
                <Text style={{color:'grey',marginTop:5}}>Don't you have an Account ? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text  style={{color:'white',fontSize:20}}> Create</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{color:'white',marginTop:45}}>---------------          OR            ---------------</Text>     
                <View style={{flexDirection:'row',marginTop:30}}>
                <TouchableOpacity style={{flex:1,marginLeft:35}}>
                    <FontAwesome
                    name="facebook"
                    color="white"
                    size={40}
                    >
                    </FontAwesome>
                </TouchableOpacity>  
                <TouchableOpacity style={{flex:1,marginLeft:35}}>
                    <FontAwesome
                    name="google-plus"
                    color="white"
                    size={40}
                    >
                    </FontAwesome>
                </TouchableOpacity>  
                <TouchableOpacity style={{flex:1,marginLeft:35}}>
                    <FontAwesome
                    name="instagram"
                    color="white"
                    size={40}
                    >
                    </FontAwesome>
                </TouchableOpacity> 
                </View>
            </View>
            </ScrollView> 
            </View>
            
          
        </View>
        
    );
}
export default SignIn;
const styles=StyleSheet.create({
header:{
    flex:1
},
footer:{
    flex:2,
    backgroundColor:'#232124',
    justifyContent:'center',
    alignItems:'center'
    
},
bgImage:{
    height:'100%',
    width:'100%'
}
})