import React, { useEffect, useState } from 'react'
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'
import '../_mock_location'

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let subscriber;

    const startWatching = async () => {
      try {
        await requestPermissionsAsync()
        subscriber = await watchPositionAsync({
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        }, callback)
      } catch (error) {
        setErr(e)
      }
    }

    if (shouldTrack) {
      startWatching()
    } else {
      if (subscriber) {
        subscriber.remove()
      }
      subscriber = null
    }

    return () => {
      if (subscriber) {
        subscriber.remove()
      }
    }
  }, [shouldTrack, callback])

  return [err];
}