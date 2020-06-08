import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import MyVerticallyCenteredModal from './modals/modal.js';
import { Col, Row, Container } from 'react-bootstrap';
import Map from './assets/map.jpg';

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
     <div className="App">

     <Row style={{width: '90%'}}>
            <Col className="mt-2 ml-3" style={{width: '10%'}}> 
            <MyVerticallyCenteredModal />
            </Col>
          </Row>
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
