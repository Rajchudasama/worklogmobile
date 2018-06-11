import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import t from 'tcomb-form-native';

export default class Jobs extends Component{
    render(){
        return(
            <View style={styles.container}>
                 <Text>Demo Jobs</Text>
            </View>
           
        
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });