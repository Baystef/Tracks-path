import React, { useContext, useCallback, useLayoutEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { NavigationEvents, withNavigationFocus } from '@react-navigation/compat'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons'

import Map from '../components/Map'
import TrackForm from '../components/TrackForm'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation';


const TrackCreateScreen = ({ isFocused, navigation }) => {
  const { state, addLocation } = useContext(LocationContext)
  const callback = useCallback(location => {
    addLocation(location, state.recording);
  }, [state.recording])
  const [err] = useLocation(isFocused, callback)

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: 'Add Track',
  //     tabBarIcon: () => <FontAwesome name="plus" size={20} />
  //   });
  // }, [navigation]);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen)
