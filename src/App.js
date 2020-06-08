import React from 'react';
import logo from './logo.svg';
import axios from 'axios';

class App extends React.Component {

  state = {
    covidDataWorld: [],
    covidDataNepal: []
  }

  componentDidMount() {
    axios.get('https://covid19.mohp.gov.np/covid/api/confirmedcases')
      .then(response => {
        this.setState({
          covidDataWorld: response.data.global,
          covidDataNepal: response.data.nepal
        })
      }).catch(err => console.log(err));
  }
  render() {
    return (
      <React.Fragment>
        <p style={{
              fontFamily: 'courier new',
              fontSize: 13,
              marginLeft: 10,
              color: '#777',
            }}>#blacklivesmatter</p>
        <div className="App" style={{ marginTop: '6%' }}>
          <p
            style={{
              textAlign: 'center',
              fontFamily: 'courier new',
              color: '#777',
              fontWeight: 'bold'
            }}>
            Total Confirmed Cases</p>
          <p
            style={{
              textAlign: 'center',
              fontSize: 175,
              margin: 0,
              fontFamily: 'courier new'
            }}>
            {this.state.covidDataNepal.positive}</p>

          <p
            style={{
              textAlign: 'center',
              color: '#777',
              fontWeight: 'bold',
              fontFamily: 'courier new'
            }}>
            Total Recovered Cases</p>
          <p
            style={{
              textAlign: 'center',
              fontSize: 175,
              margin: 0,
              fontFamily: 'courier new'
            }}>
            {this.state.covidDataNepal.extra1}</p>

          <p
            style={{
              textAlign: 'center',
              color: '#777',
              fontWeight: 'bold',
              fontFamily: 'courier new'
            }}>
            Total Death Cases</p>
          <p
            style={{
              textAlign: 'center',
              fontSize: 175,
              margin: 0,
              fontFamily: 'courier new'
            }}>
            {this.state.covidDataNepal.deaths}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
