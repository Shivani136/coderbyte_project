import React, { useState } from 'react';
import { Button, View, Text, TouchableHighlight, Image, StyleSheet, Pressable, Alert } from 'react-native';
import StoryScreen from './StoryScreen';
import { Avatar,Card } from 'react-native-paper';

function StoryAdded({ navigation }) {
    const [name, setName] = useState('shivaniß');
    const [email, setEmail] = useState('');
    const [progress, setProgress] = useState(0);

    const handlePress = () => {
        setProgress((prevProgress) => prevProgress + 0.1);
    };

    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

        const MyComponent = () => (
        <Card>
            <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
            <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
            </Card.Actions>
        </Card>
        );

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text  style={styles.text}>Story Added</Text>
            <Pressable onPress={() => Alert.alert('Hello my name is jhon i am from london')} style={[styles.profileImgContainer, { borderColor: 'green', borderWidth: 1 }]}>
            {/* Card.Title={setName} */}
                {/* </Pressable>  <Pressable onPress={(name,email) => Alert.alert({setName,setEmail})}   style={[styles.profileImgContainer, { borderColor: 'green', borderWidth: 1 }]}> */}

                <Image source={require('../Assests/Image/user2.png')} style={styles.profileImg} />

            </Pressable>
            <View style={styles.button}>
                <Button
                    title="Go to StoryScreen"
                    onPress={() => navigation.navigate('StoryScreen')}
                />
            </View>

        </View>

    );
}

export default StoryAdded;

const styles = StyleSheet.create({
    text :{
        fontWeight:'bold',
        fontSize:20,
        fontStyle:'italic',
        padding:20
        
          },
          button: {
            paddingTop: 30
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
});