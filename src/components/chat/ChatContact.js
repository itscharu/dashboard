import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class ChatUser extends PureComponent {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    active: PropTypes.bool,
  };

  render() {
    return (
      <div className={`chat__contact${this.props.active ? ' chat__contact--active' : ''}`}>
        <div className='chat__contact-avatar'>
          <img src={this.props.contact.avatar} alt='ava'/>
        </div>
        <div className='chat__contact-preview'>
          <p className='chat__contact-name'>{this.props.contact.name}</p>
          <p className='chat__contact-last-message'>{this.props.contact.lastMessage}</p>
        </div>
      </div>
    )
  }
}