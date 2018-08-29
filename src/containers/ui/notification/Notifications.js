import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import BasicNotifications from './components/BasicNotifications';
import ImageNotifications from './components/ImageNotifications';
import ColorStates from './components/ColorStates';
import ColorStatesFullWidth from './components/ColorStatesFullWidth';

export default class Notifications extends PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Notifications</h3>
            <h3 className='page-subhead subhead'>Use this elements, if you want to show some hints or additional
              information</h3>
          </Col>
        </Row>
        <Row>
          <BasicNotifications/>
          <ImageNotifications/>
          <ColorStates/>
          <ColorStatesFullWidth/>
        </Row>
      </Container>
    )
  }
}
