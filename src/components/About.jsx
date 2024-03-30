import React, { Component } from 'react';
import './About.scss'
import {Container, Row, Col} from 'reactstrap'

import aboutData from '../data/About.json'

class About extends Component {
  render() {
    return (
      <div className='about-container'>
        <div className="about-cover">
          <div>Edwin Sanjaya</div>
        </div>
        <div className="about-information">
          <Container>
            <Row>
              Edwin Sanjaya
            </Row>
            <Row>
              <Col xs="12" md="3">
                Insert Photo here
              </Col>
              <Col xs="12" md="9">
                <Row >{aboutData.name}</Row>
                <Row >{aboutData.content}</Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default About;