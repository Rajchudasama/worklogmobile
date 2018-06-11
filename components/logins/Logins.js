import React, {Component} from 'react';
import {AsyncStorage, View, Text, StyleSheet, Button} from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
    email: t.String,
    password: t.String,
  });

export default class LoginScreen extends Component{

   
    _signInAsync = async (data) => {
        await AsyncStorage.setItem('userId',"data");
        this.props.navigation.navigate('App');
    };

    handleSubmit = () => {
        const value = this._form.getValue();
        var url = 'http://worklogrr.azurewebsites.net/api/auth';


        fetch(url, {
            method: 'POST',
            body: JSON.stringify(value),
            headers:{
                 'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            if(response!==false){
                this._signInAsync(response.Id);
            }
            else{
                alert("invalid credentials");
            }

        })
        
    }
    

    render(){
        return(
            <View style={styles.container}>
                <Form ref={c => this._form = c} type={User} /> 
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