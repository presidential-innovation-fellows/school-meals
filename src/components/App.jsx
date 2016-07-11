import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { Grid, Row, Col } from 'react-bootstrap'
import DevTools from 'mobx-react-devtools'
import Application from './application/Application'
import ApplicationData from '../stores/ApplicationData'
import NavigationData from '../stores/NavigationData'
import Navigation from '../Navigation'

const applicationData = new ApplicationData()
const navigationData = new NavigationData()

// DEBUG
window.applicationData = applicationData
window.navigationData = navigationData

@observer
class App extends Component {
  getChildContext() {
    return { navigationData }
  }

  componentDidMount() {
    navigationData.init()
  }

  render() {
    return (
      <div>
        <Navigation />
        <main>
          <Grid>
            <Row>
              <Col xs={12}>
                <DevTools />
                <Application applicationData={applicationData} />
              </Col>
            </Row>
          </Grid>
        </main>
      </div>
    )
  }
}

App.childContextTypes = {
  navigationData: PropTypes.shape({
    back: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired
  }).isRequired
};

export default App
