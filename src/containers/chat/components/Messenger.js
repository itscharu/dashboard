import React, {PureComponent} from 'react';
import {Card, Col} from 'reactstrap';
import Chat from '../../../components/chat/Chat';
import myContacts from './contacts';
import myHistory from './message_history';

export default class Messenger extends PureComponent {
  
  render() {
    return (
      <Col md={12} lg={12}>
        <Card>
          <Chat contacts={myContacts} messageHistory={myHistory}
                currentUser={{
                  avatar: process.env.PUBLIC_URL + '/img/ava.png',
                  name: 'Roman Johanson',
                  userName: 'dragonKing'
                }}
          />
        </Card>
      </Col>
    )
  }
}