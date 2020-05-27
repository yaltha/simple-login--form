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
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  CheckBox
} from 'react-native';

import { 
  // CheckBox,
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

  const[checked, unchecked] = useState(false)

  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <SafeAreaView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.body}>
              <Image 
                source={require('./android/app/src/main/res/welcome/leaves.png')} 
                style={{width:200,height:200, alignSelf:'center'}}/>
              <Text style={styles.textWelcome}>Welcome home</Text>
              <Text style={styles.description}>We always have a cup of hot coffee and a warm blanket</Text>
                <View style={styles.inputContainer}>
                  <TextInput 
                    style={styles.input} 
                    placeholder='Your name'/>
                  <TextInput 
                    style={styles.input} 
                    placeholder='Your role'/>
                </View>
              <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <CheckBox 
                    style={{ backgroundColor: "transparent", borderWidth: 0 }}
                    value={checked} 
                    onValueChange={unchecked}
                    />
                 <Text style={{fontSize:12}}>I'm okay with Term of Services</Text>   
              </View>  
              <Button 
                  raised title='Sign Up' 
                  type='clear' 
                  buttonStyle={styles.button} 
                  titleStyle={{color:'#fff'}}/>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  textWelcome: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf:'center'

  },
  description: {
    marginTop: 8,
    fontSize: 15,
    textAlign: 'center'

  },
  body: {
    paddingTop: 40,
    backgroundColor: Colors.white,
    paddingHorizontal: 50,

  },
  inputContainer: {
    marginTop: 32,
  },
  input:{
    margin: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 15,
    borderRadius: 6,
  },
  button:{
    backgroundColor:'#ff9f43',
    
  }
});

export default App;
