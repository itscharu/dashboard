import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import ActivityChart from './components/ActivityChart';
import ActivityRating from './components/ActivityRating';
import FatBurning from './components/FatBurning';
import Delivered from './components/Delivered';
import Accepted from './components/Accepted';
import Active from './components/Active';
import Distance from './components/Distance';
import TodayRunningMap from './components/TodayRunningMap';
import MyCompetitors from './components/MyCompetitors';
import TopIdeas from './components/TopIdeas'

export default class FitnessDashboard extends PureComponent {
  render() {
    return (
      <Container className='dashboard'>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Dashboard</h3>
          </Col>
        </Row>
        <Row>
          <Delivered/>
          <Accepted/>
          <Active/>   
          <MyCompetitors/>     
        </Row>
        <Row>
          <ActivityChart/>       
          
          <TopIdeas/>
        </Row>
      </Container>
    )
  }
}