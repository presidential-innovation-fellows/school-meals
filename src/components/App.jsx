import classnames from 'classnames'
import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { IntlProvider } from 'react-intl'
import Application from './application/Application'
import ApplicationData from '../stores/ApplicationData'
import NavigationData from '../stores/NavigationData'
import HelpData from '../stores/HelpData'
import Navigation from './Navigation'
import Progress from './Progress'
import Footer from './Footer'
import Help from './help/Help'

const applicationData = new ApplicationData()
const navigationData = new NavigationData()
const helpData = new HelpData()

// Some things occasionally rely on these references (unfortunate shortcut).
window.applicationData = applicationData
window.helpData = helpData
window.navigationData = navigationData

@observer
class App extends Component {
  getChildContext() {
    return { applicationData, helpData, navigationData, localeData: this.props.localeData }
  }

  componentDidMount() {
    navigationData.init()
  }

  componentDidUpdate(prevProps) {
    // We do this because the IntlProvider component gets completely
    // re-rendered when we change locales due to the explicit key property
    // that we set on it.
    if (prevProps.locale !== this.props.locale) {
      navigationData.refreshSlide()
    }
  }

  render() {
    const { localeData } = this.props
    const className = classnames({
      'show-progress': navigationData.currentSlideIndex >= 2
    })

    return (
      // We explicitly set the key property on IntoProvider to force a full
      // re-render upon changing locales. There doesn't seem to be an elegant
      // way to do this. We used to wrap each FormattedMessage in its own
      // IntoProvider, which gave us finer control and therefore didn't
      // require a full application re-render (only individual messages),
      // however that prevented babel-plugin-react-intl from picking up
      // message definitions and being able to generate our language files.
      <IntlProvider
          key={localeData.code}
          locale={localeData.code}
          messages={localeData.translations}
      >
        <div className={className}>
          <Navigation
              navigationData={navigationData}
              localeData={localeData}
              helpData={helpData}
          />
          <Progress
              navigationData={navigationData}
              localeData={localeData}
              applicationData={applicationData}
          />
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
      </IntlProvider>
    )
  }
}

App.propTypes = {
  localeData: PropTypes.shape({
    code: PropTypes.string.isRequired,
    translations: PropTypes.object.isRequired
  }).isRequired
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
    next: PropTypes.func.isRequired
  }).isRequired
}

export default App
