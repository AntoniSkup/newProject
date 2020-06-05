import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home.js'
import Search from './screens/Upload.js'
import SwitchNavigator from './navigation/SwitchNavigator.js'
import TabNavigator from './navigation/TabNavigator.js'
import AuthNavigator from './navigation/AuthNavigator.js'

import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

const middleware = applyMiddleware(thunkMiddleware, logger)
const store = createStore(reducer, middleware)



export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SwitchNavigator/>
      </Provider>
      
    )
  }
}
