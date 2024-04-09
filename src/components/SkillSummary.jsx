import React, { Component } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import './SkillSummary.scss'

// https://mui.com/material-ui/material-icons/
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { lightBlue } from '@mui/material/colors';
import ChevronRight from '@mui/icons-material/ChevronRight';

class SkillSummary extends Component {

  constructor(props) {
    super(props);

    this.skills = [
      {
        groupName: "Data Analysis & Science",
        skillList: [
          "Data Preprocessing",
          "Data Mining (Pandas, Numpy)",
          "Data Visualization (Matplotlib, Seaborn, Looker Studio)",
          "Text Mining (nltk)",
          "Classification & Regression (Scikit-learn, Linear/Logistic Regression, Random Forest",
          "Clustering (Scikit-learn, K-Means, K-NN, DBScan)",
          "Association Rule Mining (Apriori, FP-Growth)",
          "Jupyter Notebook"
        ]
      },
      {
        groupName: "Product Management",
        skillList: [
          "Product Strategy: Requirement Gathering, Lifecycle & Prioritization",
          "Agile Methodology (Scrum, Kanban)",
          "User Experience Research",
          "User Interface Design (Figma)",
          "Stakeholder Management",
          "Collaboration Tools (JIRA, Confluence, Zeplin",
        ]
      },
      {
        groupName: "Software Engineering",
        skillList: [
          "Python",
          "Java",
          "React.js",
          "Vue.js",
          "HTML/CSS/JavaScript",
          "Test Automation (Selenium & Cucumber)",
          "Git",
          "Kubernetes"
        ]
      },
      {
        groupName: "Database",
        skillList: [
          "PostgreSQL",
          "MongoDB",
          "PostGIS",
          "GoogleSQL",
        ]
      },
      {
        groupName: "Others",
        skillList: [
          "Research, Presentation & Documentation",
          "Knowledge Sharing & Mentoring",
          "Statistical Analysis",
          "Business System Analysis",
          "Cross-Department Collaboration",
          "Project & Task Management",
          "Integration Test",
          "Quality Assurance",
        ]
      },
      {
        groupName: "Language",
        skillList: [
          "Indonesian",
          "English",
          "Mandarin (Beginner)",
        ]
      },
    ];
  }


  render() {
    return (
      <MDBRow className='mdb-row'>
        {
          this.skills.map((skill, index) => (
            <MDBCol sm='6' className='mdb-col' key={index}>
              <MDBCard className='mdb-card'>
                <MDBCardBody className='mdb-card-body'>
                  <MDBCardTitle className='mdb-card-title'>
                    <ChevronRight sx={{ color: lightBlue[200] }} />
                    {skill.groupName}
                  </MDBCardTitle>
                  <div className="p-1">
                    <ul>
                      {skill.skillList.map((skillItem, skillIndex) => (
                        <li key={skillIndex} className='skill-list'>{skillItem}</li>
                      ))}
                    </ul>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))
        }
      </MDBRow>
    );
  }
}

export default SkillSummary;