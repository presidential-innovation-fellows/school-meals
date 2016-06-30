import React, { Component, PropTypes } from 'react'
import Navigation from './Navigation'
import { Grid, Row, Col } from 'react-bootstrap'

class Layout extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <main>
          <Grid>
            <Row>
              <Col xs={12}>
                {this.props.children}
              </Col>
            </Row>
          </Grid>
        </main>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.object
}

export default Layout
