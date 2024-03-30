import React, { Component, useRef } from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import { Container, Row, Col } from 'reactstrap'
import ScrollSpy from 'react-ui-scrollspy';
import './Overview.scss'
import About from '../components/About';
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
  }

  render() {
    return (
      <MDBContainer className='overview-container'>
        <MDBRow>
          <MDBCol md='4'>
            <MDBScrollspy container={this.containerRef}>
              <MDBScrollspyLink targetRef={this.section1}>Section 1</MDBScrollspyLink>
              <MDBScrollspyLink targetRef={this.section2}>Section 2</MDBScrollspyLink>
              <MDBScrollspyLink subsections={this.subsections} targetRef={this.section3}>
                Section 3
              </MDBScrollspyLink>
              <MDBScrollspySubList className='ps-3'>
                <MDBScrollspyLink targetRef={this.sectionA}>Subsection A</MDBScrollspyLink>
                <MDBScrollspyLink targetRef={this.sectionB}>Subsection B</MDBScrollspyLink>
              </MDBScrollspySubList>
              <MDBScrollspyLink targetRef={this.section4}>Section 4</MDBScrollspyLink>
            </MDBScrollspy>
          </MDBCol>
          <MDBCol md='8'>
            <div id='element' ref={this.containerRef} className='scrollspy-example'>
              <section ref={this.section1} id='section-1'>
                <h3>Section 1</h3>
                <p>
                <LoremIpsum p={12} />
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                  maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                  quaerat accusamus numquam.
                </p>
              </section>
              <section ref={this.section2} id='section-2'>
                <h3>Section 2</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                  maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                  quaerat accusamus numquam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                  maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                  quaerat accusamus numquam.
                </p>
              </section>
              <section ref={this.section3} id='section-3'>
                <h3>Section 3</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                  maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                  quaerat accusamus numquam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                  maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                  quaerat accusamus numquam.
                </p>
                <section ref={this.sectionA} id='subsection-a'>
                  <h3>Subsection A</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                    maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                    quaerat accusamus numquam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                    maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                    quaerat accusamus numquam.
                  </p>
                </section>
                <section ref={this.sectionB} id='subsection-b'>
                  <h3>Subsection B</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                    maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                    quaerat accusamus numquam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                    maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                    quaerat accusamus numquam.
                  </p>
                </section>
              </section>
              <section ref={this.section4} id='section-4'>
                <h3>Section 4</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                  maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                  quaerat accusamus numquam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                  maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                  quaerat accusamus numquam.
                </p>
              </section>
            </div>
          </MDBCol>


        </MDBRow>
      </MDBContainer>



      // <div>
      //   <Container>
      //     <Row>
      //       <Col xs="12" md="3" className="nav-overview">
      //         <div className='nav-overview'>
      //           <Row>
      //             <Col xs="3" md="12">
      //               <a onClick={(e) => onPress(e)} href='#section-about'>
      //                 <div data-to-scrollspy-id="section-about" >
      //                   About Me
      //                 </div>
      //               </a>
      //             </Col>
      //             <Col xs="3" md="12">
      //               <a onClick={(e) => onPress(e)} href="#target-2">
      //                 <div data-to-scrollspy-id="target-2">
      //                   Target 2
      //                 </div>
      //               </a>
      //             </Col>
      //             <Col xs="3" md="12">
      //               <a onClick={(e) => onPress(e)} href="#target-3">
      //                 <div data-to-scrollspy-id="target-3">
      //                   Target 3
      //                 </div>
      //               </a>
      //             </Col>
      //             {/* <Col xs="3" md="12" data-to-scrollspy-id="target-3">Target 3</Col> */}
      //           </Row>
      //         </div>
      //       </Col>


      //       <Col xs="12" md="9" className="content-overview">
      //         <ScrollSpy 
      //         scrollThrottle={50} 
      //         onUpdateCallback={(id) => console.log(id)}
      //         useBoxMethod={false}>
      //           <div id="section-about" className="section">
      //             <div>About Me</div>
      //             <div>
      //               <About />
      //             </div>
      //           </div>
      //           <div id="target-2" className="section">
      //             <div>Target 2</div>
      //             <div>
      //               <LoremIpsum p={12} />
      //             </div>
      //           </div>
      //           <div id="target-3" className="section">
      //             <div>Target 3</div>
      //             <div>
      //               <LoremIpsum p={12} />
      //             </div>
      //           </div>
      //         </ScrollSpy>
      //       </Col>
      //     </Row>
      //   </Container>
      // </div>
    );
  }
}

export default Overview;