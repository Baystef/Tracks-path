import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationEvents } from '@react-navigation/compat'
import AuthForm from '../components/AuthForm'
import Navlink from '../components/NavLink'

import { Context as AuthContext } from '../context/AuthContext';


const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillBlur={clearErrorMessage}
      />
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        buttonText="Sign Up"
        onSubmit={signup}
      />
      <Navlink
        routeName="Signin"
        text="Already have an account? Sign in instead"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 100
  },
});

export default SignupScreen
