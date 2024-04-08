import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap'
import './AboutWebsite.scss'

class AboutWebsite extends Component {
  render() {
    return (
      <Container className='about-website-container'>
        This website were powered by:
        <ul>
          <li>Vite + React.js</li>
          <li>Sass CSS Extension</li>
          <li>Bootstrap, Reactstrap and MDBootstrap</li>
          <li>Google Fonts</li>
        </ul>
      </Container>
    );
  }
}

export default AboutWebsite;