/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState }from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  
} from 'react-native';

import { 
  CheckBox,
  Button
} from 'react-native-elements'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {

  const[checked, unchecked] = useState(true)

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
          <View style={styles.body}>
              <Text style={styles.textWelcome}>Welcome home</Text>
              <Text style={styles.description}>We always have a cup of hot coffee and a warm blanket</Text>
              <View style={styles.inputContainer}>
                <TextInput placeholder='Your name'/>
                <TextInput placeholder='Your role'/>
                <CheckBox center title='Agree with Term of Services' checked={checked}/>
              </View>
              <Button title='Sign Up' type='clear' raised style={styles.button}/>
          </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  textWelcome: {
    marginTop: 100,
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf:'center'
  },
  body: {
    backgroundColor: Colors.white,
    paddingHorizontal: 24,

  },
  inputContainer: {
    marginTop: 32,
  },
  description: {
    marginTop: 8,
    fontSize: 15,
    alignSelf:'center'
  },
  button:{
    backgroundColor:'coral'
  }
});

export default App;
