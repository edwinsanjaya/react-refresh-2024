import React, { Component } from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import { Container, Row, Col } from 'reactstrap'
import ScrollSpy from 'react-ui-scrollspy';
import './Overview.scss'
import About from '../components/About';

const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault();
  const target = window.document.getElementById(
    e.currentTarget.href.split("#")[1]
  );
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};


class Overview extends Component {

  // componentDidMount() {
  //   window.addEventListener("resize", this.handleResize);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.handleResize);
  // }

  // handleResize = () => {
  //   // Implement adjustment logic here
  //   // For example, reinitializing scrollspy or adjusting styles
  //   console.log('Window resized, adjust layout or reinitialize components as necessary.');
  // }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs="12" md="3" className="nav-overview">
              <div className='nav-overview'>
                <Row>
                  <Col xs="3" md="12">
                    <a onClick={(e) => onPress(e)} href='#section-about'>
                      <div data-to-scrollspy-id="section-about" >
                        About Me
                      </div>
                    </a>
                  </Col>
                  <Col xs="3" md="12">
                    <a onClick={(e) => onPress(e)} href="#target-2">
                      <div data-to-scrollspy-id="target-2">
                        Target 2
                      </div>
                    </a>
                  </Col>
                  <Col xs="3" md="12">
                    <a onClick={(e) => onPress(e)} href="#target-3">
                      <div data-to-scrollspy-id="target-3">
                        Target 3
                      </div>
                    </a>
                  </Col>
                  {/* <Col xs="3" md="12" data-to-scrollspy-id="target-3">Target 3</Col> */}
                </Row>
              </div>
            </Col>


            <Col xs="12" md="9" className="content-overview">
              <ScrollSpy 
              scrollThrottle={100} 
              useBoxMethod={false}>
                <div id="section-about" className="section">
                  <div>About Me</div>
                  <div>
                    <About />
                  </div>
                </div>
                <div id="target-2" className="section">
                  <div>Target 2</div>
                  <div>
                    <LoremIpsum p={12} />
                  </div>
                </div>
                <div id="target-3" className="section">
                  <div>Target 3</div>
                  <div>
                    <LoremIpsum p={12} />
                  </div>
                </div>
              </ScrollSpy>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Overview;