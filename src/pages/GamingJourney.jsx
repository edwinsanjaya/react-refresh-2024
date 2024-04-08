import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { MDBTable, MDBTableHead } from 'mdb-react-ui-kit';
import GamingJourneyRow from '../components/GamingJourneyRow';
import './GamingJourney.scss'
import Footer from '../components/Footer';

class GamingJourney extends Component {

  constructor(props) {
    super(props);

    this.gameData = [
      {
        id: 1,
        name: "Genshin Impact",
        mainDetail: "Adventurer Rank: 60/60",
        playtime: "1110 days active",
        description: "",
        achievements: [
          "Spiral Abyss 36 stars streak during my golden era, including 4 stars characters only handicap"
        ],
        url: ""
      },
      {
        id: 2,
        name: "Honkai: Star Rail",
        mainDetail: "Trailblazer Rank: 70/70",
        playtime: "265 days active",
        description: "",
        achievements: []
      },
      {
        id: 3,
        name: "Final Fantasy XIV Online",
        mainDetail: "Level 90/90 in all support class (Tanks and Healers)",
        playtime: "2350 hours",
        description: "",
        achievements: [
          "Completed main story, expansion and several high-end content (Savage)",
          "Obtained best-in-slot equipments in Tank, Healer and DPS class"
        ],
      },
      {
        id: 4,
        name: "Arknights",
        playtime: "1440+ days active",
        mainDetail: "Level 120/120",
        description: "",
        achievements: ["Completed all contigency contract with risk 18+"]
      },
      {
        id: 5,
        name: "NIKKE: Goddess of Victory",
        mainDetail: "Commander Level: 255, NIKKE Level: 230/415",
      },
      {
        id: 5,
        name: "Tom Clancy's The Division 2",
        playtime: "70 hours",
        mainDetail: "Level 40/40, SHD Level: 30",
      },
    ];

    this.futureGameData = [
      "Zenless Zone Zero",
      "Wuthering Waves",
      "Arknights: Enfield",
      "Monster Hunter Wilds"
    ]

    this.template = {
      id: 1,
      name: "Blue Archive",
      mainDetail: "Level: 77/82 at the time of retiring",
      playtime: "1110 days active",
      description: "",
      achievements: [
        "Spiral Abyss 36 stars streak during my golden era, including 4 stars characters only handicap"
      ],
      url: ""
    }

    this.pastGameData = [
      {
        id: 100,
        name: "Blue Archive",
        mainDetail: "Level: 77/82 at the time of retiring",
      },
      {
        id: 101,
        name: "Azur Lane",
        mainDetail: "Commander Level: 97/200, Main Fleet Average Level: 120/125",
      },
      {
        id: 102,
        name: "Counterside",
        mainDetail: "Account Level: 70, Main Team Average Level: 110/110",
      },
      {
        id: 102,
        name: "BanG Dream! Girls Band Party",
        mainDetail: "Rank 75",
        achievements: [
          "Able to achieve full combo in several song in hardest difficulty (Extreme/Special)"
        ]
      },
      {
        id: 103,
        name: "Monster Hunter World: Iceborne",
        playtime: "335 hours",
        mainDetail: "Master Rank 201",
        achievements: [
          "Defeated ultimate boss (Fatalis)",
          "Best-in-slot equipment"
        ]
      },
      {
        id: 104,
        name: "Monster Hunter Rise",
        mainDetail: "Hunter Rank 101",
        achievements: [
          "Defeated all Monsters by the time of retirement in the base game"
        ]
      },
      {
        id: 105,
        name: "The Elder Scrolls Online",
        playtime: "700 hours",
        mainDetail: "Maximum Level, Champions Level 477",
      },
      {
        id: 105,
        name: "The Elder Scrolls V: Skyrim",
        mainDetail: "Level 93",
        achievements: [
          "Completed the game and all DLC expansion in highest difficulty (Legendary)",
          "Defeated ultimate boss"
        ]
      },
      {
        id: 106,
        name: "Kingdom Hearts 3",
        achievements: [
          "Completed the game in highest difficulty with 100% achievements in the base game with a character at only Level 36/99"
        ]
      },
      {
        id: 106,
        name: "Final Fantasy Brave Exvius",
        mainDetail: "Account Rank 158, Average Party Level 120/120",
        achievements: [
          "Completed all high-end content at the time of retiring"
        ]
      },
      {
        id: 106,
        name: "Final Fantasy XIII",
        achievements: [
          "Completed the game with 100% achievements"
        ]
      },
      {
        id: 106,
        name: "Final Fantasy XII",
        playtime: "120 hours",
        achievements: [
          "Completed the game, defeated all bosses, including optional and ultimate one, with a party at only Level 56/99"
        ]
      },
      {
        id: 106,
        name: "Final Fantasy Tactics A2: Grimoire of the Rift",
        achievements: [
          "Completed the Game, defeated all stages including all optionals and ultimate stages. Average Party Level: 99/99"
        ]
      },
      {
        id: 106,
        name: "Borderlands 2",
        playtime: "135 hours",
        mainDetail: "Level 72/72",
        achievements: [
          "Completed the game, including all DLC in highest difficulty (Ultimate Vault Hunter Mode)"
        ]
      },
      {
        id: 106,
        name: "Borderlands 3",
        playtime: "80 hours",
        mainDetail: "Level 72/72",
        achievements: [
          "Completed the game in highest difficulty (Mayhem 11)"
        ]
      },
      {
        id: 106,
        name: "Code Vein",
        playtime: "32 hours",
        achievements: [
          "Completed the main story in the game with best ending"
        ]
      },
      {
        id: 106,
        name: "The Witcher 3: Wild Hunt",
        mainDetail: "Level 50",
        achievements: [
          "Completed the main story in the base game and Blood & Wine expansion, received best ending for both"
        ]
      },
      {
        id: 106,
        name: "Call of Duty: Modern Warfare 3 (2013)",
        playtime: "600 hours",
        achievements: [
          "Completed singleplayer campaign in hardest difficulty (Veteran)",
          "Multiplayer: resetting maximum level for 7 times, K/D ratio: 1.9"
        ]
      },
      {
        id: 106,
        name: "Battlebit Remastered",
        playtime: "125 hours",
        achievements: [
          "Completed singleplayer campaign in hardest difficulty (Veteran)",
          "Multiplayer: resetting maximum level for 7 times, K/D ratio: 1.9"
        ]
      },
      {
        id: 106,
        name: "Brave Frontier",
        mainDetail: "Account Rank 150, Average Party Level 120/120",
        achievements: [
          "Completed all high-end content at the time of retiring"
        ]
      },
    ];

    this.otherPastGameData = [
      {
        name: "Horizon Zero Dawn",
        description: "Level 53"
      },
      {
        name: "Paladins: Champions of the Realm",
        description: "310 hours gameplay"
      },
      {
        name: "Grand Theft Auto V",
        description: "48 hours gameplay",
      },
      {
        name: "Fallout 4",
        description: "Level 90"
      },
      {
        name: "Battlefield 4",
        description: "70 hours gameplay"
      },
      {
        name: "Call of Duty: Black Ops II",
        description: "125 hours gameplay"
      },
      {
        name: "Grim Dawn",
        description: "79 hours gameplay"
      },
      {
        name: "Seal Online: Blade of Destiny",
        description: "Level 272/310"
      },
      {
        name: "Pokemon Series",
        description: "Pokemon Gold, Pokemon Sapphire, Pokemon Diamond, Pokemon Pearl, Pokemon Heartgold, Pokemon Soulsilver, Pokemon Black"
      },
      {
        name: "Digimon Series",
        description: "Digimon World 3, Digimon World 4, Digimon World DS, Digimon World Dawn, Digimon Master Online, Digimon Story: Cyber Sleuth - Hacker's Memories"
      },
      {
        name: "Simulation Games",
        description: "Cooking Mama, The Sims, The Sims 2, The Sims 3"
      },
      {
        name: "Other Final Fantasy Series",
        description: "Final Fantasy III, Dirge of Cerberus: Final Fantasy VII, Final Fantasy X, Final Fantasy X-2, Final Fantasy XII: Revenant Wings, Final Fantasy XIII-2"
      },
      {
        name: "Other Kingdom Hearts Series",
        description: "Kingdom Hearts, Kingdom Hearts 2: Final Mix, Kingdom Hearts 358/2 Days"
      },
      {
        name: "Other GTA Series",
        description: "GTA III, GTA: Vice City, GTA: San Andreas, GTA: Liberty City Stories, GTA: Vice City Stories, GTA IV"
      },
      {
        name: "Other Call of Duty Series",
        description: "Call of Duty 4: Modern Warfare, Call of Duty: Modern Warfare 2 (2009), Call of Duty: Black Ops, Call of Duty: Ghost"
      },
      {
        name: "Other Rhythm Games",
        description: "Deemo, Dance Dance Revolution, Pump it Up"
      },
    ]
  }

  render() {
    return (
      <Container className='gaming-journey-container'>
        <h5>Ongoing Adventures</h5>
        <MDBTable>
          <MDBTableHead>
            <tr>
              <th scope='col'>Game</th>
              <th scope='col'>Details & Achievement</th>
            </tr>
          </MDBTableHead>
          <GamingJourneyRow gameJourneyData={this.gameData} />
        </MDBTable>
        <h5>Awaiting Adventures</h5>
        <MDBTable>
          <MDBTableHead>
            {this.futureGameData.map((game, index) => (
              <tr>
                <td scope='col' key={index}>{game}</td>
              </tr>
            ))}

          </MDBTableHead>
        </MDBTable>

        <h5>Memorable Adventures</h5>
        <MDBTable>
          <MDBTableHead>
            <tr>
              <th scope='col'>Game</th>
              <th scope='col'>Details & Achievement</th>
            </tr>
          </MDBTableHead>
          <GamingJourneyRow gameJourneyData={this.pastGameData} />
        </MDBTable>



        <h5>Other Past Adventures</h5>
        <MDBTable>
          <MDBTableHead>
            {this.otherPastGameData.map((game, index) => (
              <tr>
                <td scope='col' key={index}>
                  <span>{game.name}</span>
                  {game.description &&
                    <span className='other-past-description'>{" : " + game.description}</span>
                  }
                </td>
              </tr>
            ))}
          </MDBTableHead>
        </MDBTable>
        
      </Container>
    );
  }
}

export default GamingJourney;