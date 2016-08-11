import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
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

// some things occasionally rely on these references (unfortunate shortcut)
window.applicationData = applicationData
window.helpData = helpData
window.navigationData = navigationData

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
          <div className="usa-grid">
            <div className="usa-width-one-whole">
              <Application applicationData={applicationData} />
            </div>
          </div>
        </main>
        <Help helpData={helpData} />
      </div>
    )
  }
}

App.childContextTypes = {
  helpData: PropTypes.shape({
    article: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired
  }).isRequired,
  navigationData: PropTypes.shape({
    back: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired
  }).isRequired
};

export default App
