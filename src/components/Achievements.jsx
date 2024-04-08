import React, { Component } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Container, Row, Col } from 'reactstrap'
import './Achievements.scss';

class Achievements extends Component {

  constructor(props) {
    super(props);

    this.achievements = [
      {
        name: "Network Growth of the Internet Memes: A Perspective from Content Controversiality",
        description: "International Conference on Service Science and Innovation (ICSSI), Taiwan",
        date: "Nov 2022",
        type: "Presenter"
      },
      {
        name: "IELTS 7.0 (CEFR C1)",
        description: "IELTS Official",
        date: "Sep 2021",
        type: "Certification"
      },
      {
        name: "Professional Scrum Product Owner I (PSPO I)",
        description: "Scrum.org",
        date: "Jan 2021",
        type: "Certification"
      },
      {
        name: "Advanced UI Automation",
        description: "Blibli Future Program Batch 4",
        date: "2020",
        type: "Presenter"
      },
      {
        name: "Human Machine Interface on e-Shrimp as Smart Control System for Whiteleg Shrimp Pond",
        description: "Institute of Electrical and Electronics Engineering (IEEE)",
        date: "Oct 2017",
        type: "Publication"
      },
      {
        name: "Cum Laude",
        description: "Bandung Institute of Technology (ITB)",
        date: "Jul 2017",
        type: "Award"
      },

    ];
  }

  render() {
    return (
      <div className='achievement-container'>
        <MDBTable align='middle' >
          <MDBTableBody>


            {this.achievements.map((achievement, index) => (
              <tr key={index}>
                <td>
                  <Container className="align-items-center p-2">
                    <Row className='align-items-center'>
                      <Col className="badge-container" xs="12" lg="3">
                        <MDBBadge pill>
                          {achievement.type}
                        </MDBBadge>
                      </Col>
                      <Col xs="12" lg="9">
                        <Row className="achievement-title">{achievement.name}</Row>
                        <Row className="achievement-description">{achievement.description} - {achievement.date}</Row>
                      </Col>
                    </Row>
                  </Container>
                </td>
              </tr>
            ))
            }




          </MDBTableBody>
        </MDBTable>
      </div>
    );
  }
}

export default Achievements;