import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { Button } from 'react-bootstrap';

@observer
class App extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.onReset}>
          Seconds passed: {this.props.appState.timer}
        </Button>
        <DevTools />
      </div>
    );
  }

  onReset = () => {
    this.props.appState.resetTimer();
  }
};

export default App;
