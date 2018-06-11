import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;
//Compare password code
//https://github.com/gcanti/tcomb-form-native/issues/297

const ConfirmPasswordEquality = t.refinement(t.String, value => {
    return value === this.state.value.password
  })

const User = t.struct({
  email: t.String,
  password: t.String,
  RetypePassword: ConfirmPasswordEquality
});




export default class RegisterScreen extends Component{
   /* InsertUserToServer = () =>{
 
        fetch('https://worklogrr.azurewebsites.net/api/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email : '',
            password : ''
        })
   
        }).then((response) => response.json())
            .then((responseJson) => {
   
              // Showing response message coming from server after inserting records.
              Alert.alert(responseJson);
   
            }).catch((error) => {
              console.error(error);
            });
   
  }*/
    handleSubmit = () => {
        const value = this._form.getValue(); // use that ref to get the form value
        alert(value);
    }
    render(){
        return(
            <View style={styles.container}>
                <Form ref={c => this._form = c} type={User} /> 
                <Button title="Sign Up!" onPress={this.handleSubmit}/>
            
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