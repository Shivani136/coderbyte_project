import React, { useState, useEffect } from 'react';
import { Button, View, Text, TouchableHighlight, Image, StyleSheet ,Alert,Animated, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StoryAdded from './StoryAdded';
import { ProgressBar} from 'react-native-paper';


function StoryScreen({ navigation }) {
  const [progress, setProgress] = useState(new Animated.Value(0));

  useEffect(() => {
    setInterval(() => {
     // Alert.alert('image is closed ')
      navigation.navigate('StoryView');
    }, 5000)

  }, [])

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 75,
      duration: 2000,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
    <Text style={styles.text}>Welcome to the Story Screen</Text>
    <Pressable onPress={() => Alert.alert('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry')} style={[styles.profileImgContainer, { borderColor: 'green', borderWidth: 1 }]}>
   {/* <TouchableHighlight
        style={[styles.profileImgContainer, { borderColor: 'green', borderWidth: 1 }]}
      > */}
        <Image source={require('../Assests/Image/user3.jpg')} style={styles.profileImg} />
      {/* </TouchableHighlight> */}
    </Pressable>
      <ProgressBar progress={0.8} color="#0CF01F" style={{marginTop:90, width: 400, height: 10}}/>
        <View style={styles.button}>
         <Button
                title="Go to StoryAdded"
                onPress={() => navigation.navigate('StoryAdded')}
              />

        </View>
            
        
            </View>
  );
}

export default StoryScreen;

const styles = StyleSheet.create({
  container :{
    flex: 1,
     alignItems: 'center',
      justifyContent: 'center' ,
      marginTopTop:200
  },
  text :{
fontWeight:'bold',
fontSize:20,
fontStyle:'italic',
padding:20

  },
  profileImgContainer: {
    marginLeft: 8,
    height: 180,
    width: 180,
    borderRadius: 80,
  },
  profileImg: {
    height: 180,
    width: 180,
    borderRadius: 40,
  },
  button: {
    paddingTop: 30
  },
});
