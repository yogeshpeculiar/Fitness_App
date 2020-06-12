import React, { useState } from 'react';
import {Text,View,StyleSheet,Image,TextInput,TouchableOpacity,ScrollView,SafeAreaView,Button,Platform} from 'react-native';
import backgroundImage from '../assets/bg.jpg';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import NumericInput from 'react-native-numeric-input';
import DateTimePicker from '@react-native-community/datetimepicker';

function SignUp({navigation}){
    var radio_props_role = [
        {label: 'User  ', value: 0 },
        {label: 'Trainer', value: 1 }
      ];
    var radio_props_gender = [
        {label: 'Male  ', value: 0 },
        {label: 'Female', value: 1 }
      ];
      const [role, setRole] = useState(0);
      const [date, setDate] = useState(new Date());
      const [mode, setMode] = useState('date');
      const [show, setShow] = useState(false);
      
      const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
      };

  const showTimepicker = () => {
    showMode('time');
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };


   
    

      const checkin=()=>
      {
        const [data, setData] = React.useState({
            secureTextEntry: true,
            
        });
     
        const updateSecureTextEntry = () => {
            setData({
                ...data,
                secureTextEntry: !data.secureTextEntry
            });
        }
          if(!role){
              return (
                  <ScrollView contentContainerStyle={styles.item}>
                 <View style={{width:'100%',alignItems:'center'}}>
                    <View style={{flexDirection:'row',borderBottomColor:'white',borderBottomWidth:2,width:'100%'}}>
                        <FontAwesome 
                                name="user-o"
                                color='white'
                                size={20}
                                style={{marginBottom:5}}
                            />
                        <TextInput 
                            placeholder="Name"
                            placeholderTextColor="grey"
                            style={{paddingLeft:20,color:'white',fontSize:20}}
                            autoCapitalize="none"/>
                    </View>
                    <View style={{flexDirection:'row',borderBottomColor:'white',borderBottomWidth:2,width:'100%',marginTop:20}}>
                        <FontAwesome 
                                name="envelope-o"
                                color='white'
                                size={20}
                                style={{marginBottom:5}}
                            />
                        <TextInput 
                            placeholder="E mail"
                            placeholderTextColor="grey"
                            style={{paddingLeft:20,color:'white',fontSize:20}}
                            autoCapitalize="none"/>
                     </View>
                     <View style={{flexDirection:'row',borderBottomColor:'white',borderBottomWidth:2,width:'100%',marginTop:15}}>
                        <FontAwesome 
                                name="mobile"
                                color='white'
                                size={30}
                                style={{marginBottom:5}}
                            />
                        <TextInput 
                            keyboardType={'phone-pad'}
                            placeholder="Phone Number"
                            placeholderTextColor="grey"
                            style={{paddingLeft:20,color:'white',fontSize:20}}
                            autoCapitalize="none"/>
                     </View>
                     <View style={{flexDirection:'row'}}>
                        <Text style={{color:'white',fontSize:20,marginRight:60,marginTop:30}}>Gender </Text>
                        <RadioForm
                            style={{marginTop:30}}
                            radio_props={radio_props_gender}
                            initial={0}
                            formHorizontal={true}
                            onPress={()=>{}}
                            labelColor={'white'}
                            animation={true}
                            buttonColor={'white'}
                            buttonSize={15}
                            selectedButtonColor={'white'}
                            selectedLabelColor={'white'}
                            labelStyle={{marginRight:25}}
                        />
                    </View>
                    <View style={{flexDirection:'row',borderBottomColor:'white',borderBottomWidth:2,width:'100%',marginTop:15}}>
                        <FontAwesome 
                                name="key"
                                color='white'
                                size={20}
                                style={{marginBottom:5}}
                            />
                        <TextInput 
                            placeholder="Password"
                            placeholderTextColor="grey"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={{paddingLeft:20,color:'white',fontSize:20}}
                            autoCapitalize="none"/>
                          
                          <TouchableOpacity
                                style={{marginTop:10,marginLeft:175}}
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
                     <View style={{flexDirection:'row',borderBottomColor:'white',borderBottomWidth:2,width:'100%',marginTop:25}}>
                        <FontAwesome 
                                name="key"
                                color='white'
                                size={20}
                                style={{marginBottom:5}}
                            />
                        <TextInput 
                            placeholder="Confirm Password"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            placeholderTextColor="grey"
                            style={{paddingLeft:20,color:'white',fontSize:20}}
                            autoCapitalize="none"/>
                         <TouchableOpacity
                                style={{marginTop:10,marginLeft:105}}
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
                     <TouchableOpacity 
                        style={{marginTop:40,borderColor:'green',borderWidth:4}}>
                        <Text style={{color:'white',fontSize:28,padding:5,paddingLeft:30,paddingRight:30}}>SIGNUP</Text>  
                    </TouchableOpacity>
                    <View>
                        <Text style={{color:'white',marginTop:20}}>---------------          OR            ---------------</Text>     
                        <View style={{flexDirection:'row',marginTop:15}}>
                        <TouchableOpacity style={{flex:1,marginLeft:35}}>
                            <FontAwesome
                            name="facebook"
                            color="white"
                            size={25}
                            >
                            </FontAwesome>
                        </TouchableOpacity>  
                        <TouchableOpacity style={{flex:1,marginLeft:35}}>
                            <FontAwesome
                            name="google-plus"
                            color="white"
                            size={25}
                            >
                            </FontAwesome>
                        </TouchableOpacity>  
                        <TouchableOpacity style={{flex:1,marginLeft:35}}>
                            <FontAwesome
                            name="instagram"
                            color="white"
                            size={25}
                            >
                            </FontAwesome>
                        </TouchableOpacity> 
                        </View>
                    </View>

              

              
                </View>

                </ScrollView>
              );
              
              
          }else
          {
            return(
                <ScrollView contentContainerStyle={styles.item}>
                 <View style={{width:'100%',alignItems:'center'}}>
                    <View style={{flexDirection:'row',borderBottomColor:'white',borderBottomWidth:2,width:'100%'}}>
                        <FontAwesome 
                                name="user-o"
                                color='white'
                                size={20}
                                style={{marginBottom:5}}
                            />
                        <TextInput 
                            placeholder="Name"
                            placeholderTextColor="grey"
                            style={{paddingLeft:20,color:'white',fontSize:20}}
                            autoCapitalize="none"/>
                    </View>
                    <View style={{flexDirection:'row',borderBottomColor:'white',borderBottomWidth:2,width:'100%',marginTop:20}}>
                        <FontAwesome 
                                name="envelope-o"
                                color='white'
                                size={20}
                                style={{marginBottom:5}}
                            />
                        <TextInput 
                            placeholder="E mail"
                            placeholderTextColor="grey"
                            style={{paddingLeft:20,color:'white',fontSize:20}}
                            autoCapitalize="none"/>
                     </View>
                     <View style={{flexDirection:'row',borderBottomColor:'white',borderBottomWidth:2,width:'100%',marginTop:15}}>
                        <FontAwesome 
                                name="mobile"
                                color='white'
                                size={30}
                                style={{marginBottom:5}}
                            />
                        <TextInput 
                            keyboardType={'phone-pad'}
                            placeholder="Phone Number"
                            placeholderTextColor="grey"
                            style={{paddingLeft:20,color:'white',fontSize:20}}
                            autoCapitalize="none"/>
                     </View>
                     <View style={{flexDirection:'row'}}>
                        <Text style={{color:'white',fontSize:20,marginRight:60,marginTop:30}}>Gender </Text>
                        <RadioForm
                            style={{marginTop:30}}
                            radio_props={radio_props_gender}
                            initial={0}
                            formHorizontal={true}
                            onPress={()=>{}}
                            labelColor={'white'}
                            animation={true}
                            buttonColor={'white'}
                            buttonSize={15}
                            selectedButtonColor={'white'}
                            selectedLabelColor={'white'}
                            labelStyle={{marginRight:25}}
                        />
                    </View>
                    <View style={{flexDirection:'row',borderBottomColor:'white',borderBottomWidth:2,width:'100%',marginTop:15}}>
                        <FontAwesome 
                                name="key"
                                color='white'
                                size={20}
                                style={{marginBottom:5}}
                            />
                        <TextInput 
                            placeholder="Password"
                            placeholderTextColor="grey"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={{paddingLeft:20,color:'white',fontSize:20}}
                            autoCapitalize="none"/>
                          
                          <TouchableOpacity
                                style={{marginTop:10,marginLeft:175}}
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
                     <View style={{flexDirection:'row',borderBottomColor:'white',borderBottomWidth:2,width:'100%',marginTop:25}}>
                        <FontAwesome 
                                name="key"
                                color='white'
                                size={20}
                                style={{marginBottom:5}}
                            />
                        <TextInput 
                            placeholder="Confirm Password"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            placeholderTextColor="grey"
                            style={{paddingLeft:20,color:'white',fontSize:20}}
                            autoCapitalize="none"/>
                         <TouchableOpacity
                                style={{marginTop:10,marginLeft:105}}
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

                     <View style={{flexDirection:"row",marginTop:40,marginRight:20}}>
                        <Text style={{color:'white',marginTop:5,fontSize:15}}>Height in cms   </Text>
                        <NumericInput
                        onChange={()=>{}}
                        totalWidth={60} 
                        totalHeight={30}
                        rounded 
                        iconSize={30} 
                        textColor='white'/>
                        <Text style={{color:'white',marginTop:5,fontSize:15}}>   Weight in kgs  </Text>
                        <NumericInput
                        onChange={()=>{}}
                        totalWidth={60} 
                        totalHeight={30}
                        rounded 
                        iconSize={30} 
                        textColor='white'/>
                       
                     
                   </View>
                   <View style={{flexDirection:"row",marginTop:40,marginRight:20}}>
                        <Text style={{color:'white',marginTop:5,fontSize:15}}>Chest in cms   </Text>
                        <NumericInput
                        onChange={()=>{}}
                        totalWidth={60} 
                        totalHeight={30}
                        rounded 
                        iconSize={30} 
                        textColor='white'/>
                        <Text style={{color:'white',marginTop:5,fontSize:15}}>   Biceps in cms  </Text>
                        <NumericInput
                        onChange={()=>{}}
                        totalWidth={60} 
                        totalHeight={30}
                        rounded 
                        iconSize={30} 
                        textColor='white'/>
                       
                     
                   </View>
                   <View style={{flexDirection:"row",marginTop:40,marginRight:60}}>
                        <Text style={{color:'white',marginTop:5,fontSize:20}}>Experience in months  </Text>
                        <NumericInput
                        onChange={()=>{}}
                        totalWidth={90} 
                        totalHeight={40}
                        rounded 
                        iconSize={30} 
                        textColor='white'/>
                   </View>
                   <View style={{flexDirection:"row",marginTop:40,marginRight:60}}>
                        <Text style={{color:'white',marginTop:5,fontSize:20,marginRight:45}}>Charge per hour  </Text>
                        <NumericInput
                        onChange={()=>{}}
                        totalWidth={90} 
                        totalHeight={40}
                        rounded 
                        iconSize={30} 
                        textColor='white'/>
                   </View>
                    <View style={{flexDirection:'row',marginTop:40,marginRight:50}}>
                    <Text style={{color:'white',marginTop:5,fontSize:20,marginRight:30}}>Choose Time slot</Text>
                  
                    <View style={{marginTop:10}}>
                        <TouchableOpacity onPress={showTimepicker}>
                            <Text style={{color:'white',fontSize:18}}>Start</Text>
                        </TouchableOpacity>
                        {show && (
                            <DateTimePicker
                            value={date}
                            minimumDate={Date.parse(new Date())}
                            display='default'
                            mode={mode}
                            onChange={onChange}
                            />
                        )}
                    </View>

                    <View style={{marginTop:10}}>
                    <TouchableOpacity style={{marginLeft:35,color:'white'}} onPress={showTimepicker}>
                        <Text style={{color:'white',fontSize:18}}>End</Text>
                    {show && (
                            <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                            /> 
                            )}
                        </TouchableOpacity> 
                    </View>  
                    </View>
                    
                     <TouchableOpacity 
                        style={{marginTop:40,borderColor:'green',borderWidth:4}}>
                        <Text style={{color:'white',fontSize:28,padding:5,paddingLeft:30,paddingRight:30}}>SIGNUP</Text>  
                    </TouchableOpacity>
                    
                 
                        
                      
                     <View style={{marginBottom:20,marginTop:30}}>
                        <Text style={{color:'white',marginTop:20}}>---------------          OR            ---------------</Text>     
                        <View style={{flexDirection:'row',marginTop:15}}>
                        <TouchableOpacity style={{flex:1,marginLeft:35}}>
                            <FontAwesome
                            name="facebook"
                            color="white"
                            size={25}
                            >
                            </FontAwesome>
                        </TouchableOpacity>  
                        <TouchableOpacity style={{flex:1,marginLeft:35}}>
                            <FontAwesome
                            name="google-plus"
                            color="white"
                            size={25}
                            >
                            </FontAwesome>
                        </TouchableOpacity>  
                        <TouchableOpacity style={{flex:1,marginLeft:35}}>
                            <FontAwesome
                            name="instagram"
                            color="white"
                            size={25}
                            >
                            </FontAwesome>
                        </TouchableOpacity> 
                        </View>
                    </View>

              

              
                </View>

                </ScrollView>
            
            );
          }
  
      }
    
    

 return(
     
    <View style={{flexDirection:'column',flex:1}}>
    <View style={styles.header}>
        <Image source={backgroundImage} style={{width:"100%",height:"100%" }} >
           
        </Image>
        
    </View>
    <View style={styles.footer}>
    <View style={{flexDirection:'row',marginBottom:20,marginTop:20}}>
        <Text style={{color:'white',fontSize:20,marginRight:50,marginLeft:10}}>Signup as </Text>
        <RadioForm
            radio_props={radio_props_role}
            initial={0}
            formHorizontal={true}
            onPress={()=>{}}
            labelColor={'white'}
            animation={true}
            buttonColor={'white'}
            selectedButtonColor={'white'}
            selectedLabelColor={'white'}
            labelStyle={{marginRight:25}}
            onPress={(value) => setRole(value)}
        />
      
       

        </View>
        {checkin()}
    </View>
    </View>
  
 );   
}
export default SignUp;

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
    item:{
        
    }
    })