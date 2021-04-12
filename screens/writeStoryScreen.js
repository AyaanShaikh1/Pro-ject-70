import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';

export default class WriteStoryScreen extends React.Component {
render(){
  return(
    <View>
    <View style={styles.textContainer}>
      <Text style={styles.text}>Write Story</Text>
    </View>
  
    <View>
      <TextInput style={styles.inputBox} placeholder="Book Name" />
    </View>
  
    <View>
      <TextInput style={styles.inputBox} placeholder="Authors Name" />
    </View>
  
    <View>
      <TextInput
        style={styles.storyBox}
        multiline={true}
        placeholder="Write The Story"
      />
    </View>
    <View>
        <TouchableOpacity>
            <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
    </View>

  </View>
  
  )
}
}

const styles = StyleSheet.create({
    textContainer:{
      backgroundColor: 'darkorange',
    },
    text:{
      color: '#8B008B',
      padding: 20,
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    inputBox: {
        marginTop: 10,
        width: '20%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 4,
      },
      storyBox:{
        marginTop: 10,
        width: '20%',
        alignSelf: 'center',
        height: 120,
        textAlign: 'center',
        borderWidth: 4,
      },
      buttonText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
      },
  });
  