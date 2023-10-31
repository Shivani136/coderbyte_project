import React, { useState, useEffect } from 'react';
import { Button, View, Text, TouchableHighlight, Image, StyleSheet ,Alert,Animated} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StoryAdded from './StoryAdded';

function NoStory({ navigation }) {
  const [progress, setProgress] = useState(new Animated.Value(0));


  useEffect(() => {
    Animated.timing(progress, {
      toValue: 75,
      duration: 2000,
    }).start();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
   <Text  style={styles.text}>Welcome to the NoStory View Screen</Text>

      <TouchableHighlight
        style={[styles.profileImgContainer, { borderColor: 'blue', borderWidth: 2 }]}
      >
        <Image source={require('../Assests/Image/user5.png')} style={styles.profileImg} />
      </TouchableHighlight>
      {/* <Animated.View style={[styles.bar, { width: progress }]} />
      <Text>{progress}</Text> */}
    <View style={styles.button}>
      <Button
        title="Go to StoryAdded"
        onPress={() => navigation.navigate('StoryAdded')}
      />
      </View>
    </View>
  );
}

export default NoStory;

const styles = StyleSheet.create({
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
