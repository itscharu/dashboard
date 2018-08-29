import React, {PureComponent} from 'react';
import MenuIcon from 'mdi-react/MenuIcon';
import PropTypes from 'prop-types';

export default class ChatTopbar extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func,
    contact: PropTypes.object
  };
  
  render() {
    return (
      <div className='chat__topbar'>
        <button className='chat__topbar-button' onClick={this.props.onClick}>
          <MenuIcon className='chat__topbar-button-icon'/>
        </button>
        {this.props.contact ?
          <div className='chat__topbar-contact'>
            <div className='chat__topbar-contact-avatar'>
              <img src={this.props.contact.avatar} alt=''/>
            </div>
            <p className='chat__topbar-contact-name'>{this.props.contact.name}</p>
          </div> :
          ''}
      </div>
    )
  }
}
