import React, {PureComponent} from 'react';
import {Button, ButtonToolbar, Card, CardBody, Col} from 'reactstrap';
import Notification from '../../../../components/Notification';

export default class ColorStates extends PureComponent {
  render() {
    return (
      <Col md={12} lg={6} xs={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Color States</h5>
              <h5 className='subhead'>Use default notification with class <span className='red-text'>info</span>, <span
                className='red-text'>success</span>, <span className='red-text'>warning</span>, <span
                className='red-text'>error</span></h5>
            </div>
            <ButtonToolbar>
              <Notification title='Alert panel divider' position='tr' className='info'
                            message='Heart large seems may purse means few blind. Exquisite newspaper attending
                          on certainty oh suspicion of. .'>
                <Button color='primary'>Primary</Button>
              </Notification>
              <Notification title='Alert panel divider' position='tr' className='success'
                            message='Heart large seems may purse means few blind. Exquisite newspaper attending
                          on certainty oh suspicion of. .'>
                <Button color='success'>Success</Button>
              </Notification>
              <Notification title='Alert panel divider' position='tr' className='warning'
                            message='Heart large seems may purse means few blind. Exquisite newspaper attending
                          on certainty oh suspicion of. .'>
                <Button color='warning'>Warning</Button>
              </Notification>
              <Notification title='Alert panel divider' position='tr' className='error'
                            message='Heart large seems may purse means few blind. Exquisite newspaper attending
                          on certainty oh suspicion of. .'>
                <Button color='danger'>Danger</Button>
              </Notification>
            </ButtonToolbar>
          </CardBody>
        </Card>
      </Col>
    )
  }
}