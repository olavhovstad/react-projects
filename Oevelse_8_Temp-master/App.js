import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Linking,
  FlatList,
  Button,
  Image,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';


export default class App extends React.Component {
  cameraRef = React.createRef();

  state = {
    hasCameraPermission: null,
  };

  componentDidMount() {
    this.updateCameraPermission();
  }

  updateCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  handleTakePhoto = async () => {
    if (!this.cameraRef.current) {
      return;
    }
    const result = await this.cameraRef.current.takePictureAsync();
    console.log({ result });
  };

  renderCameraView() {
    const { hasCameraPermission, type } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    }
    if (hasCameraPermission === false) {
      return (
          <View>
            <Text>No access to camera.</Text>
          </View>
      );
    }
    return (
        <View>
          <Camera
              style={styles.cameraView}
              type={Camera.Constants.Type.back}
              ref={this.cameraRef}>
            <Button title="Press to take photo" onPress={this.handleTakePhoto} />
          </Camera>
        </View>
    );
  }

  render() {
    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.cameraContainer}>{this.renderCameraView()}</View>
        </SafeAreaView>
    );
  }

}







const containerStyle = {
  padding: 5,
  borderRadius: 1,
  margin: 4,
  borderWidth: 1,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  Flatlist_render:{
    width:'100%'
  },
  cameraContainer: {
    // Her pakkes fælles style ud
    ...containerStyle,
    backgroundColor: '#DDF',

  },
  cameraView: {
    marginTop: 70,
    marginLeft: 15,
    aspectRatio: 1.33,
    width: '100%',
    height: 270
  },
  lastPhotoContainer: {
    backgroundColor: '#DFF',
    width: '100%',
    height: 130,
    margin: 5
  },
  galleryContainer: {
    ...containerStyle,
    backgroundColor: '#FDF',
    marginBottom: 100
  },
  thumbnail: {
    width: 110,
    height: 110,
    marginLeft: 140
  },thumbnail2: {
    width: 200,
    height: 200,
    margin: 10,
  },
  FlatList_image:{
    width: 200,
    height: 200,
    margin: 5
  },
  galleryView: {
    height: 150,
    width: '100%',
    flexDirection: 'row',
  },
});
