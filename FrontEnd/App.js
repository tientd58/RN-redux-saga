import React from 'react';
import { Provider } from 'react-redux';

import RootContainer from './Root';
import store from './src/store/prod';

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store()}>
        <RootContainer />
      </Provider>
    );
  }
}

export default App;
