import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StoryScreen from './Component/StoryScreen';
import StoryAdded from './Component/StoryAdded';
import StoryView from './Component/StoryView';
import NoStory from './Component/NoStory';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false}} name="StoryAdded" component={StoryAdded} />
        <Stack.Screen options={{ headerShown: false}} name="StoryScreen" component={StoryScreen} />
        <Stack.Screen options={{ headerShown: false}}  name="StoryView" component={StoryView} />
        <Stack.Screen options={{ headerShown: false}}  name="NoStory" component={NoStory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;