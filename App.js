import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
// import LogContext from './contexts/LogContext';
import {LogContextProvider} from './contexts/LogContext';

function App() {
  return (
    <NavigationContainer>
      {/* <LogContext.Provider value="안녕하세요"> */}
      <LogContextProvider>
        <RootStack />
      </LogContextProvider>
      {/* </LogContext.Provider> */}
    </NavigationContainer>
  );
}

export default App;
