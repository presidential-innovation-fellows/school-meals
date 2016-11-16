import classnames from 'classnames';
import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import Application from './application/Application'
import ApplicationData from '../stores/ApplicationData'
import LocaleData from '../stores/LocaleData'
import NavigationData from '../stores/NavigationData'
import HelpData from '../stores/HelpData'
import Navigation from './Navigation'
import Progress from './Progress'
import Footer from './Footer'
import Help from './help/Help'

const applicationData = new ApplicationData()
const localeData = new LocaleData()
const navigationData = new NavigationData()
const helpData = new HelpData()

// some things occasionally rely on these references (unfortunate shortcut)
window.applicationData = applicationData
window.helpData = helpData
window.navigationData = navigationData
window.localeData = localeData

@observer
class App extends Component {
  getChildContext() {
    return { applicationData, helpData, localeData, navigationData }
  }

  componentDidMount() {
    navigationData.init()
  }

  render() {
    const className = classnames({
      'show-progress': navigationData.currentSlideIndex >= 2
    })

    return (
      <div className={className}>
        <Navigation navigationData={navigationData}
                    localeData={localeData}
                    helpData={helpData} />
        <Progress navigationData={navigationData}
                  localeData={localeData}
                  applicationData={applicationData} />
        <main>
          <div className="usa-grid">
            <div className="usa-width-one-whole">
              <Application applicationData={applicationData} />
            </div>
          </div>
        </main>
        <Help helpData={helpData} />
        <Footer />
      </div>
    )
  }
}

App.childContextTypes = {
  applicationData: PropTypes.object.isRequired,
  helpData: PropTypes.shape({
    article: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired
  }).isRequired,
  localeData: PropTypes.shape({
    code: PropTypes.string.isRequired,
    translations: PropTypes.object.isRequired
  }).isRequired,
  navigationData: PropTypes.shape({
    back: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
    jump: PropTypes.func.isRequired,
    canJump: PropTypes.bool.isRequired
  }).isRequired
};

export default App
