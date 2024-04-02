import React, { Component } from 'react';
import ResumeTimeline from './ResumeTimeline';
import { Container, Col, Row } from 'reactstrap'
import './Resume.scss'

const timelineData = [
  {
    location: "Jakarta, Indonesia",
    title1: "Blibli.com (Djarum Group)",
    title2: "Senior Product Lead",
    date: "Jan 2021 - Jun 2021",
    description: "Led the seller platform's strategic roadmap as a product owner, enchancing seller experiences, retention and growth.",
    achievementList: [
      "Reduces seller registration drop-off by 43%",
      "Increase mobile-web compatibility from 56.5% to 75%",
      "Passed and earned Professional Scrum Product Owner I Certification",
      "Executed pivotal projects including fraud management, homepage revamp, promotions and learning center of sellers"
    ]
  },
  {
    location: "Jakarta, Indonesia",
    title2: "Senior Software Design Engineer in Test",
    date: "Jan 2020 - Dec 2020",
    description: "Oversaw seller platform quality assurance, exceeding user satisfaction through testing automation and strategies",
    achievementList: [
      "Technical representative in cross-departement project, analyzing the Indonesia e-commerce landscape to recommend suggestions for the CCO and key stakeholders ",
      "Improved automation coverage from 40% to 83% within 3 months",
      "Developed key projects, including seller analytics, product discussion, pop-up announcement/survey and chat systems",
      "Mentor 2 new test engineers as well as 2 interns",
      "Provide sharing session about our products to new employee including engineers, business analyst, product manager and business users",
      "Mentor and speaker for Advanced UI Automation for interns"
    ]
  },
  {
    title2: "Software Design Engineer in Test",
    date: "Aug 2019 - Dec 2019",
  },
  {
    title2: "Software Development Engineer in Test",
    date: "Jan 2019 - Jul 2019",
  },
  {
    title2: "Associate Software Development Engineer in Test",
    date: "Oct 2017 - Dec 2018",
  },
  // Add more items as necessary
];

const educationData = [
  {
    location: "Hsinchu, Taiwan",
    title1: "National Tsing Hua University (NTHU)",
    title2: "Master of Science in Information Systems and Applications",
    date: "2022 - 2024",
    description: "GPA : 4.28 / 4.30",
    achievementList: [
      "Achieved top 10% of graduating cohort",
      "Ranked #1 in Data Structure course out of 190+ students, promoted to teaching assistant in the next year",
      "Final project from the Social Network Management course submitted as a paper at the International Conference on Service Science and Innovation (ICSSI) 2022",
      "Thesis: Integrating Utility Concept in Grid-based Index for Storage Assignment",
      "Member of Intelligent Data Engineering and Applications Laboratory",
      "Advisor: Professor Yi-Shin Chen"
    ]
  },
  {
    location: "Bandung, Indonesia",
    title1: "Institut Teknologi Bandung (ITB)",
    title2: "Bachelor of Science in Electrical Engineeering",
    date: "2013 - 2017",
    description: "GPA : 3.65 / 4.00",
    achievementList: [
      "Graduated with distinction of Cum Laude",
      "Undergraduate Thesis: Human Machine Interface on e-Shrimp as Smart Control System for Whiteleg Shrimp Pond (Published on IEEE)",
      "Became a teaching & laboratory assistant on 4 courses in my senior year: Problem Solving with C Lab, Digital System Lab, Signal Systems & Controls and Electronics II",
    ]
  },
  // Add more items as necessary
];

class Resume extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs='12' md='6'>
            <Row className="resume-subtitle">Work Experience</Row>
            <Row><ResumeTimeline items={timelineData} /></Row>
            </Col>
          <Col xs='12' md='6'>
            <Row className="resume-subtitle">Education</Row>
            <ResumeTimeline items={educationData} />
            </Col>
        </Row>

      </Container>
    );
  }
}

export default Resume;