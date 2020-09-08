import React, { useContext, useLayoutEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import { FontAwesome } from '@expo/vector-icons'


const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: 'Account',
  //     tabBarIcon: () => <FontAwesome name="gear" size={20} />
  //   });
  // }, [navigation]);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={{ fontSize: 48 }}>Account Screen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({});

export default AccountScreen
