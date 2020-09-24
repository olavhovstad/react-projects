import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import firebase from "firebase";
import SignUpForm from './components/SignUpForm';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
    componentDidMount() {
        const fireBaseConfig = {
          apiKey: "AIzaSyBGP06upDm-KQJ3JmbKkV9TreXiMeTUP30",
          authDomain: "test-5-f7fe8.firebaseapp.com",
          databaseURL: "https://test-5-f7fe8.firebaseio.com",
          projectId: "test-5-f7fe8",
          storageBucket: "test-5-f7fe8.appspot.com",
          messagingSenderId: "923371548664",
          appId: "1:923371548664:web:b70550f0e26fdbb5d9b00d",
          measurementId: "G-MLPSFMHHYV"
        };
        // Vi kontrollerer at der ikke allerede er en initialiseret instans af firebase
        // Så undgår vi fejlen Firebase App named '[DEFAULT]' already exists (app/duplicate-app).
        if (!firebase.apps.length) {
            firebase.initializeApp(fireBaseConfig);
        }
    }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.paragraph}>
            Change code in the editor and watch it change on your phone! Save to get a shareable url.
          </Text>
          <Card>
            <SignUpForm />
          </Card>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
