import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios';

class Details extends React.Component {

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
        <Container>
          <h3 style={{
            textAlign: 'center',
            fontWeight: 'bold',
              fontFamily: 'courier new',
              color: '#777'}}>Global Data</h3>
          <Row>
            <Col xs={12} md={8} style={{
              fontFamily: 'courier new',
              color: '#777',
              fontWeight: 'bold'
            }}>
              Global Confirmed Cases
              <p style={{ color: 'black' }}>{this.state.covidDataWorld.positive}</p>
            </Col>
            <Col xs={6} md={4} style={{
              fontFamily: 'courier new',
              color: '#777',
              fontWeight: 'bold'
            }}>
              Global Death Cases
              <p style={{ color: 'black' }}>{this.state.covidDataWorld.deaths}</p>
            </Col>
          </Row>
          <hr></hr>

          <h3 style={{
            textAlign: 'center',
            fontWeight: 'bold',
              fontFamily: 'courier new',
              color: '#777'}}>Nepal Data</h3>
          <Row>
            <Col xs={6} md={4} style={{
              fontFamily: 'courier new',
              color: '#777',
              fontWeight: 'bold'
            }}>
              Total PCR Test
              <p style={{ color: 'black' }}>{this.state.covidDataNepal.samples_tested}</p>
            </Col>
            <Col xs={6} md={4} style={{
              fontFamily: 'courier new',
              color: '#777',
              fontWeight: 'bold'
            }}>
              Total RDT Test
              <p style={{ color: 'black' }}>{this.state.covidDataNepal.extra7}</p>
            </Col>
            <Col xs={6} md={4} style={{
              fontFamily: 'courier new',
              color: '#777',
              fontWeight: 'bold'
            }}>
              Negative Cases
              <p style={{ color: 'black' }}>{this.state.covidDataNepal.negative}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4} style={{
              fontFamily: 'courier new',
              color: '#777',
              fontWeight: 'bold'
            }}>
              Total In Quarantie
              <p style={{ color: 'black' }}>{this.state.covidDataNepal.extra8}</p>
            </Col>
            <Col xs={6} md={4} style={{
              fontFamily: 'courier new',
              color: '#777',
              fontWeight: 'bold'
            }}>
              Total In Isloation
              <p style={{ color: 'black' }}>{this.state.covidDataNepal.extra2}</p>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Details;