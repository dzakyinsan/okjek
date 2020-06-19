import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import Reducers from './src/redux/reducers';
import MainNavigation from './src/navigations/MainNavigation';

const App = () => {
  console.disableYellowBox = true;
  return (
    <Provider store={createStore(Reducers, {}, applyMiddleware(reduxThunk))}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
