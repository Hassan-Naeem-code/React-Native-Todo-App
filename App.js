import React from 'react';
import {
  View,
  Text,
} from 'react-native';
// import FirstAssgnment from './components/firstAssignmentFlex9';
import TodoApp from './components/TodoApp';
import Contacts from './components/readContacts';
import { Provider } from 'react-redux';
import Store from './Store/index';

const App = () => {
  return (
    <Provider store={Store}>
      {/* <FirstAssgnment /> */}
      {/* <TodoApp /> */}
      <Contacts />
    </Provider>
  )
}
export default App;
