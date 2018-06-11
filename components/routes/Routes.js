import React from 'react';
import LoginScreen from '../logins/Logins';
import RegisterScreen from '../register/Register';
import Jobs from '../jobs/Jobs';
import CreateJob from '../jobs/createjob';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';

const Register = createStackNavigator({
  Job: {
      screen: Jobs
    },
  Createjob: {
    screen: CreateJob
  }

});


const Anynomous = createBottomTabNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

const Root = createSwitchNavigator(
  {
    App: Register,
    Auth: Anynomous,
  },
  {
    initialRouteName: 'Auth',
  }
);

export default Root;



  


