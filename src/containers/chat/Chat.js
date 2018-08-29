import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import Messenger from './components/Messenger';

export default class Chat extends PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Chat Application</h3>
            <h3 className='page-subhead subhead'>Use this elements, if you want to show some hints or additional
              information</h3>
          </Col>
        </Row>
        <Row>
          <Messenger/>
        </Row>
      </Container>
    )
  }
}