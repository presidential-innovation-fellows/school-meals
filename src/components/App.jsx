import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { Grid, Row, Col } from 'react-bootstrap'
import DevTools from 'mobx-react-devtools'
import Application from './application/Application'
import ApplicationData from '../stores/ApplicationData'
import NavigationData from '../stores/NavigationData'
import HelpData from '../stores/HelpData'
import Navigation from './Navigation'
import Progress from './Progress'
import Help from './help/Help'

const applicationData = new ApplicationData()
const navigationData = new NavigationData()
const helpData = new HelpData()

// DEBUG
window.applicationData = applicationData
window.navigationData = navigationData
window.helpData = helpData

@observer
class App extends Component {
  getChildContext() {
    return { helpData, navigationData }
  }

  componentDidMount() {
    navigationData.init()
  }

  render() {
    return (
      <div>
        <Navigation />
        <Progress navigationData={navigationData}
                  applicationData={applicationData}/>
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
        <Help helpData={helpData} />
      </div>
    )
  }
}

App.childContextTypes = {
  navigationData: PropTypes.shape({
    back: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired
  }).isRequired,
  helpData: PropTypes.shape({
    article: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired
  }).isRequired
};

export default App
