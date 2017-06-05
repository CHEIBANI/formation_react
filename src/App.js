import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamList from './composants/list_teams';
import CompetitionList from './composants/competitions_list';
import CompetitionDetail from './composants/competitions_detail' ;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {competitions: [], selectedCompetition: null};
    this.listerCompettions();
  }


  listerCompettions() {
    fetch('http://api.football-data.org/v1/competitions/?season=2015')
      .then(res => res.json())
      .then(json => {
        this.setState({competitions:json});
      })
  }
  
  render() {
    return(
      <div className="row">
        <div className="col-md-2">
              <CompetitionList onCompetitionSelect= {(competition) => this.setState({selectedCompetition:competition})} competitions={this.state.competitions}/>
        </div>

        <div className="col-md-8">
              <CompetitionDetail competition={this.state.selectedCompetition} />
        </div>

      </div>

    )
   
  }
}

export default App;
