import React, {PureComponent} from 'react';
import {Button, ButtonToolbar, Card, CardBody, Col} from 'reactstrap';
import Notification from '../../../../components/Notification';

const Image = process.env.PUBLIC_URL + '/img/photo_notification.png';

export default class ImageNotifications extends PureComponent {
  render() {
    return (
      <Col md={12} lg={6} xs={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Image notifications</h5>
              <h5 className='subhead'>Use default notification with necessary value of properties <span
                className='red-text'>position</span> and <span className='red-text'>img</span></h5>
            </div>
            <ButtonToolbar>
              <Notification title='Lora Simpson' position='tl' img={Image}
                            message='Learning day desirous informed expenses material returned six the. She enabled...'>
                <Button outline>Left Up</Button>
              </Notification>
              <Notification title='Lora Simpson' position='bl' img={Image}
                            message='Learning day desirous informed expenses material returned six the. She enabled...'>
                <Button outline>Left Down</Button>
              </Notification>
              <Notification title='Lora Simpson' position='tr' img={Image}
                            message='Learning day desirous informed expenses material returned six the. She enabled...'>
                <Button outline>Right Up</Button>
              </Notification>
              <Notification title='Lora Simpson' position='br' img={Image}
                            message='Learning day desirous informed expenses material returned six the. She enabled...'>
                <Button outline>Right Down</Button>
              </Notification>
            </ButtonToolbar>
          </CardBody>
        </Card>
      </Col>
    )
  }
}