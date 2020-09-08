import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { NavigationEvents } from '@react-navigation/compat'
import AuthForm from '../components/AuthForm'
import Navlink from '../components/NavLink'

import { Context } from '../context/AuthContext';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context)

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillBlur={clearErrorMessage}
      />
      <AuthForm
        headerText="Sign in to your account"
        errorMessage={state.errorMessage}
        buttonText="Sign In"
        onSubmit={signin}
      />
      <Navlink
        routeName="Signup"
        text="Dont have an account? Sign up"
      />
    </View>
  )
}
// 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 100
  },
});

export default SigninScreen
