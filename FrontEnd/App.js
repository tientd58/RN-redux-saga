import React from 'react';
import { Provider } from 'react-redux';
import RootContainer from './Root';

class App extends React.PureComponent {
  render() {
    return (
        <RootContainer />
    );
  }
}

export default App;
