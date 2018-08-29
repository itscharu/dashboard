import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class ChatBubble extends PureComponent {
  static propTypes = {
    contact: PropTypes.object,
    message: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    active: PropTypes.bool
  };
  
  render() {
    return (
      <div className={`chat__bubble${this.props.active ? ' chat__bubble--active' : ''}`}>
        <div className='chat__bubble-avatar'>
          <img src={this.props.contact.avatar} alt='ava'/>
        </div>
        <div className='chat__bubble-message-wrap'>
          <p className='chat__bubble-contact-name'>{this.props.contact.name}</p>
          <p className='chat__bubble-date'>{moment(this.props.date).format('LT')}</p>
          <p className='chat__bubble-message'>{this.props.message}</p>
        </div>
      </div>
    )
  }
}