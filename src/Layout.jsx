import React, { Component, PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

class Layout extends Component {
  render() {
    return (
      <main>
        <Grid>
          <Row>
            <Col xs={12}>
              {this.props.children}
            </Col>
          </Row>
        </Grid>
      </main>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.object
}

export default Layout
