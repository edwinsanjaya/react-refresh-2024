import React, { Component } from 'react';
import './About.scss'
import { Container, Row, Col } from 'reactstrap'

import aboutData from '../data/About.json'

import CustomListItemText from './ListItemTextCustom';


// https://mui.com/material-ui/material-icons/
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { lightBlue } from '@mui/material/colors';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import butterflyBg from '../assets/img/butterfly.webp'
import profilePicture from '../assets/img/profile.jpg'
import { MDBRipple } from 'mdb-react-ui-kit';

const aboutBullets = [
  {
    label: 'Date of Birth',
    value: '21 August 1995',
  },
  {
    label: 'Highest Degree',
    value: 'Master of Science',
  },
  {
    label: 'City',
    value: 'Jakarta, Indonesia',
  },
  {
    label: 'Phone Number',
    value: '+62 811 1700 373',
  },
  {
    label: 'Email',
    value: 'sanjayaedwin@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/edwinsanjaya',
  }
]


class About extends Component {
  render() {
    return (
      <div className='about-container'>
        {/* <MDBRipple rippleTag='div' className='bg-image rounded-9'>
          <img src={butterflyBg} className='img-fluid shadow-4' alt='...' />
          <div
            className='mask'
            style={{
              background: 'linear-gradient(to bottom, hsla(0, 0%, 0%, 0.3) 50%, hsla(0, 0%, 0%, 0.6))',
            }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <p className='text-white mb-0'>Edwin Sanjaya</p>
            </div>
          </div>
        </MDBRipple> */}
        <div className="about-information">
          <Container>
            <Row>
              <Col xs="12" md="3" className='profile-container'>
                <MDBRipple rippleTag='div' className='bg-image rounded-9 profile-picture'>
                  <img src={profilePicture} className='img-fluid shadow-4' alt='...' />
                </MDBRipple>
              </Col>
              <Col xs="12" md="9" className='about-detail-container'>
                {/* <Row className='about-detail-name'>{aboutData.name}</Row> */}
                <Row className='about-detail-name'>{aboutData.name}</Row>
                <Row className='about-detail-description'>{aboutData.content}</Row>
              </Col>
            </Row>
            <Row>
              <List>
                <Row>
                  {aboutBullets.map((item, index) => (
                    <Col key={index} xs="12" md="6">
                      <CustomListItemText
                        label={item.label}
                        value={item.value}
                        icon={<DoubleArrowIcon sx={{ color: lightBlue[200] }} />} />
                    </Col>
                  ))}
                </Row>
              </List>
            </Row>
          </Container>
        </div >
      </div >
    );
  }
}

export default About;