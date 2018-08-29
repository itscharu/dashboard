import React, {PureComponent} from 'react';
import {Button, ButtonToolbar, Card, CardBody, Col} from 'reactstrap';
import SettingsIcon from 'mdi-react/SettingsIcon';
import SendIcon from 'mdi-react/SendIcon';
import CommentAlertOutlineIcon from 'mdi-react/CommentAlertOutlineIcon';
import CloseCircleOutlineIcon from 'mdi-react/CloseCircleOutlineIcon';
import ThumbUpOutlineIcon from 'mdi-react/ThumbUpOutlineIcon';
import Expand from '../../../../components/Expand';

export default class ButtonIcons extends PureComponent {
  render() {
    return (
      <Col md={12} lg={6} xl={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Button icons and Expand</h5>
            </div>
            <h5 className='bold-text'>Icon buttons</h5>
            <div className='card__title'>
              <h5 className='subhead'>Use default buttons with class <span className='red-text'>icon</span>, <span
                className='red-text'>icon icon--right</span></h5>
            </div>
            <ButtonToolbar>
              <Button className='icon' outline><p><SettingsIcon/> Settings</p></Button>
              <Button className='icon' disabled><p><SettingsIcon/> Disabled</p></Button>
              <Button className='icon icon--right' color='primary' outline><p>Settings <SendIcon/></p></Button>
              <Button className='icon' color='primary'><p><SettingsIcon/> Settings</p></Button>
              <Button className='icon' color='success'><p><ThumbUpOutlineIcon/> Success</p></Button>
              <Button className='icon' color='warning'><p><CommentAlertOutlineIcon/> Danger</p></Button>
              <Button className='icon' color='danger'><p><CloseCircleOutlineIcon/> Warning</p></Button>
            </ButtonToolbar>
            
            <h5 className='bold-text'>Expand</h5>
            <ButtonToolbar>
              <Expand title='Expand' outline/>
              <Expand color='primary' title='Settings'/>
            </ButtonToolbar>
          </CardBody>
        </Card>
      </Col>
    )
  }
}