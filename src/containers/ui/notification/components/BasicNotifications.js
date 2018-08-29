import React, {PureComponent} from 'react';
import {Button, ButtonToolbar, Card, CardBody, Col} from 'reactstrap';
import Notification from '../../../../components/Notification';

export default class BasicNotifications extends PureComponent {
  render() {
    return (
      <Col md={12} lg={6} xs={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Basic notifications</h5>
              <h5 className='subhead'>Use default notification with necessary value of property <span
                className='red-text'>position</span></h5>
            </div>
            <ButtonToolbar>
              <Notification title='Remember!' position='tl'
                            message='Learning day desirous informed expenses material returned six the. She enabled
                  invited exposed him another.'>
                <Button outline>Left Up</Button>
              </Notification>
              <Notification title='Remember!' position='bl'
                            message='Learning day desirous informed expenses material returned six the. She enabled
                  invited exposed him another.'>
                <Button outline>Left Down</Button>
              </Notification>
              <Notification title='Remember!' position='tr'
                            message='Learning day desirous informed expenses material returned six the. She enabled
                  invited exposed him another.'>
                <Button outline>Right Up</Button>
              </Notification>
              <Notification title='Remember!' position='br'
                            message='Learning day desirous informed expenses material returned six the. She enabled
                  invited exposed him another.'>
                <Button outline>Right Down</Button>
              </Notification>
            </ButtonToolbar>
          </CardBody>
        </Card>
      </Col>
    )
  }
}