import React, {useState, Component} from 'react';
import {Text, TouchableOpacity, StyleSheet, TextInput, View, Image, StatusBar} from 'react-native';
import {addTrainerDetails} from '../../API';
import ImagePicker from 'react-native-image-picker';
import defaultPic from '../../../assets/male_pic_default.jpg';
import {uploadImage} from '../../API';
import {connect} from "react-redux";
import * as actionCreators from "../../store/actions";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FormElementTwo from '../../components/Signup/FormElement';
import ActionButtonTwo from '../../components/Login/ActionButtonTwo';

class TrainerSignupDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      height: 0,
      weight: 0,
      experience: 0,
      image: null
    }
  }

  pickImage= ()=> {
    const options = {};
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log('image url', response.uri);
        this.setState({
          image: response.uri,
        });
       this.submitPhoto(response.path, this.props.authToken);
      }
    });
  };

  submitPhoto = async (path, token)=> {
    let result = await uploadImage(path, token);
    if (result)
      console.log('image insettion successful')
    else
      console.log('image insertion failed')
  }

  submit = async () => {

    var result = await addTrainerDetails(this.state.name.text);
    if (result) {
      console.log('addTrainerdetails----------' + result)
      // this.props.setAuthenticated(true);
      this.props.setInitialLoginOff();
    } else
      console.log('addTrainerdetails----------' + result)

    // const state = store.getState();
    // console.log('image modified url----------' + JSON.stringify(this.state.image))
    // this.submitPhoto(this.state.image, state.jwt);
  }


  render() {


    return (
      <>
        <StatusBar backgroundColor={'white'}/>
        <KeyboardAwareScrollView enableOnAndroid={true} contentContainerStyle={styles.contentContainer}>
          <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => {
              this.pickImage(), console.log(this.state.image)
            }} style={styles.addPhoto}>
              {!this.state.image && <Image source={defaultPic} style={{width: 200, height: 200, borderRadius: 100}}/>}
              {this.state.image &&
              <Image source={{uri: this.state.image}} style={{width: 200, height: 200, borderRadius: 100}}/>}
            </TouchableOpacity>
          </View>
          <View style={{flex: 3, width: "60%", marginLeft: 100}}>
            <FormElementTwo placeholder="Name" onChangeText={(text) => {
              this.setState({name: {text}})
            }}/>
            {/* <FormElementTwo placeholder="Height (in cms)" maxLength={4} keyboardType='numeric' onChangeText={(text) => { this.setState({ height: { text } }) }} />
            <FormElementTwo placeholder="Weight (in Kgs)" maxLength={4} keyboardType='numeric' onChangeText={(text) => { this.setState({ weight: { text } }) }} />
            <FormElementTwo placeholder="Experience" keyboardType='numeric' onChangeText={(text) => { this.setState({ experience: { text } }) }} /> */}
          </View>
          <View style={{flex: 1, marginRight: 20, marginLeft: 20}}>
            <ActionButtonTwo label="submit" onPress={this.submit}></ActionButtonTwo>
          </View>

        </KeyboardAwareScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    backgroundColor: 'white',

  }

})


const mapStateToProps = (state) => ({
  authToken:state.user.authToken
});

const mapDispatchToProps = (dispatch) => ({
  setAuthenticated: (value) => dispatch(actionCreators.setAuthenticated(value)),
  setInitialLoginOff: () => dispatch(actionCreators.setInitialLoginOff())
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainerSignupDetails);