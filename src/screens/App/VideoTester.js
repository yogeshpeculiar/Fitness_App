/**
 * @author Yatanvesh Bhardwaj <yatan.vesh@gmail.com>
 */
import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, Button, Text, TouchableOpacity} from 'react-native'
import RouteNames from "../../navigation/RouteNames";
import requestCameraAndAudioPermission from "../../utils/permission";
import {spacing} from "../../constants/dimension";
import GenericText from "../../components/GenericText";

class VideoTester extends Component {
  // A screen whose only job is to open VideoCall with these params

  state = {
    videoConfigs: [
      {
        title: '360p',
        config: {
          width: 360,
          height: 640,
          bitrate: 400,
          FPS: 15
        }
      }, {
        title: '360p 24fps',
        config: {
          width: 360,
          height: 640,
          bitrate: 500,
          FPS: 24
        }
      }, {
        title: '360p 30fps',
        config: {
          width: 360,
          height: 640,
          bitrate: 600,
          FPS: 30
        }
      },
      {
        title: '480p',
        config: {
          width: 480,
          height: 640,
          bitrate: 500,
          FPS: 15
        }
      },
      {
        title: '480p 30fps',
        config: {
          width: 480,
          height: 640,
          bitrate: 1000,
          FPS: 30
        }
      },
      {
        title: '720p 15fps',
        config: {
          width: 720,
          height: 1080,
          bitrate: 1130,
          FPS: 15
        }
      },
      {
        title: '720p 30fps',
        config: {
          width: 720,
          height: 1080,
          bitrate: 1710,
          FPS: 30
        }
      }
    ]
  }

  startCall = async (config) => {
    const permissionGranted = await requestCameraAndAudioPermission();
    if (!permissionGranted) return;

    this.props.navigation.navigate(RouteNames.VideoCall, {
      AppID: 'de359ae21a884e08a18e38476b54ccea',
      ChannelName: 'commonTestChannel',
      videoConfig: config
    })
  }

  render() {
    return (<View style={{flex: 1}}>
        <ScrollView style={{flex: 1}} contentContainerStyle={styles.container}>
          <View style={styles.titleContainer}>
            <GenericText type={GenericText.types.headingBold}>Video Call quality test</GenericText>
          </View>
          {
            this.state.videoConfigs.map(((videoConfig, index) => (
              <TouchableOpacity
                onPress={() => this.startCall(videoConfig.config)}
                style={styles.buttonContainer}
                key={index}>
                <GenericText type={GenericText.types.heading}>{videoConfig.title}</GenericText>

                <Text>Width: {videoConfig.config.width}</Text>
                <Text>Height: {videoConfig.config.height}</Text>
                <Text>Bitrate: {videoConfig.config.bitrate}</Text>
                <Text>FPS: {videoConfig.config.FPS}</Text>
              </TouchableOpacity>
            )))
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: "center",
  },
  titleContainer: {
    marginBottom: spacing.large_lg,
    marginTop: spacing.large_lg
  },
  buttonContainer: {
    width: 200,
    justifyContent: 'center',
    alignItems: "center",
    margin: spacing.medium_sm,
    borderColor: 'black',
    borderWidth: 1,
    padding: spacing.small,
    paddingLeft: spacing.medium_sm,
    paddingRight: spacing.medium_sm,
    borderRadius: 10
  }
});

export default VideoTester;