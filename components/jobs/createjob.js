import React, {Component} from 'react';
import {AsyncStorage, View, Text, StyleSheet, Button} from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const jobcreate = t.struct({
    title: t.String,
    tax: t.String,
    hourlyrate: t.number,

});

export default class CreateJob extends Component{


    render(){
        return(
            <View style={styles.container}>
                <Form ref={c => this._form = c} type={jobcreate} /> 
                <Button title="Login" onPress={this.handleSubmit}/>
            
            </View>
           
        
        )
    }

}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginTop: 50,
      padding: 20,
      backgroundColor: '#ffffff',
    },
});



