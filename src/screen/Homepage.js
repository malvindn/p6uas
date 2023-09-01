import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';
import Global from './Global';

const HomePage = ({ navigation }) => {
  const [text, setText] = useState(Global.data.text);

  useEffect(() => {
      const focusHandler = navigation.addListener('focus', () => {
        setText(Global.data.text);
      });
      return focusHandler;
  }, [navigation]);
  
  const gotoScreen = () => {
      navigation.navigate('ScanPage');
  }
  
  return (
    <View style={styles.centerContent}>
      <Text style={styles.textBold}>Hasil Scan sertifikat </Text>
      <Text style={styles.textBold}>{text}</Text>
      <TouchableOpacity style={[styles.buttonTouchable]} onPress={gotoScreen}>
          <Text style={styles.buttonText}>Scan sertifikat</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  centerContent: {
    flex:1, 
    justifyContent: "center", 
    alignItems: "center",
    fontSize: 21,
  },
  textBold: {
    fontWeight: '500',
    fontSize: 30,
    color: "black",
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    backgroundColor: "lightblue",
    padding: 10,
    margin: 10
	},
});

export default HomePage;