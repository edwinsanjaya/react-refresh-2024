import React, { Component, Fragment } from 'react';
import { MDBTableBody } from 'mdb-react-ui-kit';
import './GamingJourneyRow.scss'

class GamingJourneyRow extends Component {
  render() {

    const { gameJourneyData } = this.props;

    return (
      <MDBTableBody>
        {gameJourneyData && gameJourneyData.map((data, index) => (
          <Fragment key={index}>
            <tr>
              <th scope='row'>{data.name}</th>

              <td>
                {data.playtime && <div class='playtime'>{data.playtime}</div>}
                {data.mainDetail && <div class='main-detail'>{data.mainDetail}</div>}
                {data.achievements && data.achievements.length > 1 ? (
                  <div>
                    <ul>
                      {
                        data.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))
                      }
                    </ul>
                  </div>
                ) : data.achievements && data.achievements.length == 1 ? (
                  <div>
                    {data.achievements[0]}
                  </div>
                ) : null}
              </td>
            </tr>
          </Fragment>
        ))}
      </MDBTableBody>
    );
  }
}

export default GamingJourneyRow;