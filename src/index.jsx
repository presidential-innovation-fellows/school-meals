import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import AppState from './AppState';
import App from './components/App';

const appState = new AppState();

render(
  <AppContainer>
    <App appState={appState} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;

    render(
      <AppContainer>
        <NextApp appState={appState} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
