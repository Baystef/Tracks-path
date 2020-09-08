import { AsyncStorage } from 'react-native';
// import { AsyncStorage } from '@react-native-community/async-storage';
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'


const authReducer = (state, action) => {
  switch (action.type) {
    case 'signin':
      return { errorMessage: '', token: action.payload, isLoading: action.isLoading }

    case 'signout':
      return { errorMessage: '', token: null }

    case 'add_error':
      return { ...state, errorMessage: action.payload }

    case 'clear_error_message':
      return { ...state, errorMessage: '' }

    default:
      return state;
  }
}



const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password })
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token })
  } catch (error) {
    dispatch({ type: 'add_error', payload: 'Something went wrong' });
  }
}


const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signin', { email, password })
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token })
  } catch (error) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' });
  }
}

const autoSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signin', payload: token, isLoading: false })
  } else {
    dispatch({ type: 'signin', payload: null, isLoading: false })
  }
}

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' })
}

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' })
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, autoSignin },
  { token: null, errorMessage: '', isLoading: true }
)