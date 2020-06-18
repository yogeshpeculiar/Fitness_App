import React, { useState,Component } from 'react';
import {Text,TouchableOpacity,StyleSheet,TextInput,View,Image} from 'react-native';
import {addTrainerDetails} from '../src/API/methods';
import * as ImagePicker from 'expo-image-picker';
import defaultPic from '../assets/male_pic_default.jpg';
import {uploadImage} from '../src/API';
export default class TrainerSignupDetails extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name:'',
           height:0,
           weight:0,
           experience:0,
           image:null
        }
    }
    async pickImage () {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          this.setState({image:result.uri});
        }
      };


      async submitPhoto(path,token){
        let result = await uploadImage(path,token);
        if(result)
        console.log('image insettion successful')
        else
        console.log('image insertion failed')
      }
  
    async submit(){
       
        if (this.state.height != 0) {
            theight = JSON.stringify(this.state.height.text);
            theight= theight.slice(1, -1);
        }
        if (this.state.weight != 0) {
            tweight = JSON.stringify(this.state.weight.text);
            tweight =tweight.slice(1, -1);
        }
        if (this.state.experience != 0) {
            texp = JSON.stringify(this.state.experience.text);
            texp=texp.slice(1, -1);
        }
        if (this.state.name != '') {
            tname = JSON.stringify(this.state.name.text);
            tname=tname.slice(1, -1);
        }
        var result = await addTrainerDetails(theight,tweight,texp,tname) ;
        if(result)
       { 
           console.log('addTrainerdetails----------'+result)
         this.props.route.params.setSignedIn(); //temp solution
        }
        else
        console.log('addTrainerdetails----------'+result)

        if (this.state.image != '') {
            timage = JSON.stringify(this.state.image.text);
            timage=timage.slice(1, -1);
        }
        const state = store.getState();
        this.submitPhoto(timage,state.jwt);
    }

    
    render(){
       
        return(
      
            <View style={styles.container}>
                 
                <TouchableOpacity onPress={() => {this.pickImage(),console.log(this.state.image)}} style={styles.addPhoto}>
                {!this.state.image && <Image  source={defaultPic} style={{ width: 200, height: 200,borderRadius:100 }}/>}
                {this.state.image && <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200,borderRadius:100 }} />}
                </TouchableOpacity>
                

                <View style={styles.detailElement}>
                    <Text style={styles.label}>Name           </Text>
                    <TextInput style={styles.Input} onChangeText={(text)=>{this.setState({name:{text}})}}></TextInput>
                </View>

                <View style={styles.detailElement}>
                    <Text style={styles.label}>Height </Text>
                    <Text style={styles.note}>(in feet)</Text>
                    <TextInput style={styles.Input} maxLength={4} keyboardType='numeric'  onChangeText={(text)=>{this.setState({height:{text}})}}> </TextInput>
                </View>
                <View style={styles.detailElement}>
                    <Text style={styles.label}>weight </Text>
                    <Text style={styles.note}>(in Kgs)</Text>
                    <TextInput style={styles.Input} maxLength={4} keyboardType='numeric'  onChangeText={(text)=>{this.setState({weight:{text}})}}> </TextInput>
                </View>
                <View style={[styles.detailElement]}>
                    <Text style={styles.label}>Experience</Text>
                    <TextInput style={styles.Input} maxLength={4} keyboardType='numeric'  onChangeText={(text)=>{this.setState({experience:{text}})}}> </TextInput>
                </View>
                <TouchableOpacity onPress={() => this.submit()} style={styles.submit}>
                    <Text style={styles.buttonLabel}>Submit</Text>
                </TouchableOpacity>
               
            </View>
        );
    }
}
const styles=StyleSheet.create({
    Input:{
      width:70,
      borderBottomColor:'grey',
      borderBottomWidth:1,
      fontSize:22,
      textAlign:'center',
      marginLeft:30,
      marginTop:-10
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    detailElement:{
        flexDirection:'row',
        marginTop:20,
        marginBottom:20
    },
    label:{
        fontSize:24
    },
    note:{
        fontSize:18,
        color:'grey',
        marginTop:10,
        
    },
    submit:{
         backgroundColor: 'blue',
          borderRadius: 25,
           width: '25%',
            alignItems: 'center',
             marginLeft: "35%",
              padding: 5, 
              marginTop: 20,
              marginRight:150
    },
    buttonLabel:{
        color: 'white',
         fontSize: 22

    }

      })