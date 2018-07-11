import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Musify from './containers/Musify';
import { Grid, Row, Col} from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col xs={12}>
            <Musify />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
