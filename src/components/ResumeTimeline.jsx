import React from 'react';
import { Container, Row, Col, List } from 'reactstrap';
import './ResumeTimeline.scss'

const TimelineItem = ({ location, title1, title2, date, description, achievementList }) => (
  <Row className="timeline-item">
    <Col xs="1">
      <div className="timeline-point"></div>
    </Col>
    <Col xs="9">
      {title1 && <h5 className='title1'>{title1}</h5>}
      {title2 && <h5 className='title2'>{title2}</h5>}
      <span className="text-muted">{date}</span>
      <p className="text-muted">{location}</p>
      {description && <p>{description}</p>}
      <List>
      {achievementList && achievementList.map((item, index) => (
        <li key={index} className='list-item'>{item}</li>
      ))}
      </List>
    </Col>
  </Row>
);

const ResumeTimeline = ({ items }) => (
  <Container>
    <div className="timeline">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  </Container>
);

export default ResumeTimeline;