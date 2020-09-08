import createDataContext from './createDataContext';
import trackerApi from '../api/tracker'

const trackReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_tracks':
      return action.payload

    default:
      return state;
  }
}

const fetchTracks = dispatch => async () => {
  const response = await trackerApi.get('/tracks');
  // console.log('response.data',response.data)
  dispatch({ type: 'fetch_tracks', payload: response.data })
}
const createTrack = dispatch => async (name, locations) => {
  await trackerApi.post('/tracks', { name, locations })
  // dispatch({ type: 'start_recording' })
}


export const { Context, Provider } = createDataContext(
  trackReducer,
  { createTrack, fetchTracks },
  []
)