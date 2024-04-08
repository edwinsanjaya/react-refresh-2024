import React, { Component } from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import './Footer.scss'

// https://mdbootstrap.com/docs/react/content-styles/icons/#section-icon-search

const year = new Date().getFullYear();

class Footer extends Component {
  render() {
    return (
      <MDBFooter className='bg-dark text-center text-white'>
        <MDBContainer className='p-4 pb-0'>
          <section className='mb-4'>
            <div className='text-center pb-1'><h4>Edwin Sanjaya</h4></div>
            <div className='fst-italic pb-3'>"Learn Deeply, Flowing Like a River, Share Broadly, Spreading Like the Sea."</div>
            <MDBBtn outline color="light" floating className='m-1' href="https://www.linkedin.com/in/edwinsanjaya/" target="_blank" rel="noopener noreferrer" role='button'>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href="https://github.com/edwinsanjaya" target="_blank" rel="noopener noreferrer" role='button'>
              <MDBIcon fab icon='github' />
            </MDBBtn>
          </section>
        </MDBContainer>
        <div className='text-center p-3 footer-copyright' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © {year} Edwin Sanjaya. All Rights Reserved
        </div>
      </MDBFooter>
    );
  }
}

export default Footer;