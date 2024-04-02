import React, { Component, useRef } from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import { Container, Row, Col } from 'reactstrap'
import ScrollSpy from 'react-ui-scrollspy';
import './Overview.scss'
import About from '../components/About';
import Resume from '../components/Resume';
import { MDBCol, MDBContainer, MDBRow, MDBScrollspy, MDBScrollspyLink, MDBScrollspySubList } from 'mdb-react-ui-kit';


class Overview extends Component {

  constructor(props) {
    super(props);
    // Initializing refs in a class component
    this.section1 = React.createRef();
    this.section2 = React.createRef();
    this.section3 = React.createRef();
    this.section4 = React.createRef();
    this.sectionA = React.createRef();
    this.sectionB = React.createRef();
    this.containerRef = React.createRef();
    this.subsections = [this.sectionA, this.sectionB]

    this.section1Title = "About Me";
    this.section2Title = "Resume"
    this.section3Title = "Skills"
  }

  componentDidMount() {
    if (this.containerRef.current) {
      this.containerRef.current.addEventListener('scroll', this.handleScroll);
    }
  }

  handleScroll = () => {
    console.log('Scrolling...');
  }

  componentWillUnmount() {
    if (this.containerRef.current) {
      this.containerRef.current.removeEventListener('scroll', this.handleScroll);
    }
  }

  render() {
    return (
      <div ref={this.containerRef} className='overview-container'>
        <MDBContainer >
          <MDBRow>
            <MDBCol md='2' className='navigation-sidebar'>
              <div className="fixed-navigation">
                <MDBScrollspy container={this.containerRef}>
                  <MDBScrollspyLink targetRef={this.section1} className='spynav-link'>{this.section1Title}</MDBScrollspyLink>
                  <MDBScrollspyLink targetRef={this.section2} className='spynav-link'>{this.section2Title}</MDBScrollspyLink>
                  <MDBScrollspyLink targetRef={this.section3} className='spynav-link'>{this.section3Title}</MDBScrollspyLink>
                </MDBScrollspy>
              </div>
            </MDBCol>
            <MDBCol md='10'>
              <div id='element' className='scrollspy-example'>
                <section ref={this.section1} id='section-1'>
                  <h3>{this.section1Title}</h3>
                  <About />
                </section>
                <hr class="hr" />
                <section ref={this.section2} id='section-2'>
                  <h3>{this.section2Title}</h3>
                  <Resume />
                </section>
                <hr class="hr" />
                <section ref={this.section3} id='section-3'>
                  <h3>{this.section3Title}</h3>
                  <LoremIpsum p={8} />
                </section>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

    );
  }
}

export default Overview;