import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import ChatContact from './ChatContact';
import ChatBubble from './ChatBubble';
import ChatSearch from './ChatSearch';
import ChatField from './ChatField';
import Scrollbar from 'react-smooth-scrollbar';
import ChatTopbar from './ChatTopbar';

export default class Chat extends PureComponent {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    contacts: PropTypes.array,
    messageHistory: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.state = {
      currentMessages: null,
      currentChat: null,
      openContacts: false
    };

    this.onOpenChat = this.onOpenChat.bind(this);
    this.onOpenContacts = this.onOpenContacts.bind(this);
  }

  onOpenChat(contact, e) {
    e.preventDefault();
    const dialog = this.props.messageHistory.find((m) => m.id === contact);
    const messages = dialog ? dialog.messages : null;
    this.setState({
      currentChat: contact,
      currentMessages: messages,
      openContacts: false
    });
  }

  onOpenContacts() {
    this.setState({openContacts: !this.state.openContacts});
  }

  render() {
    return (
      <div className={`chat${this.state.openContacts ? ' chat--open' : ''}`}>
        <div className={`chat__contact-list${this.state.openContacts ? ' chat__contact-list--open' : ''}`}>
          <ChatSearch/>
          <div className='chat__contacts'>
            {this.props.contacts.map((c, i) =>
              <a key={i} onClick={(e) => this.onOpenChat(c.userName, e)}>
                <ChatContact active={c.userName === this.state.currentChat} contact={c}/>
              </a>
            )}
          </div>
        </div>
        {this.state.currentChat === null ?
          <div className='chat__dialog'>
            <ChatTopbar onClick={this.onOpenContacts}/>
            <div className='chat__dialog-select-message'>
              <p>Select a chat to start messaging</p>
            </div>
          </div>
          :
          <div className='chat__dialog'>
            <ChatTopbar contact={this.props.contacts.find((c) => c.userName === this.state.currentChat)}
                        onClick={this.onOpenContacts}/>
            <Scrollbar className='scroll chat__scroll' alwaysShowTracks>
              <div className='chat__dialog-messages-wrap'>
                {this.state.currentMessages === null || this.state.currentMessages.length === 0 ?
                  <div className='chat__dialog-messages'>
                    <div className='chat__dialog-messages-empty'>
                      <p>No messages</p>
                    </div>
                  </div>
                  :
                  <div className='chat__dialog-messages'>
                    {this.state.currentMessages.map((m, i) =>
                      <ChatBubble key={i}
                                  contact={m.userName === this.props.currentUser.userName ? this.props.currentUser :
                                    this.props.contacts.find((c) => c.userName === m.userName)} message={m.message}
                                  date={m.date}
                                  active={m.userName === this.props.currentUser.userName}/>
                    )}
                  </div>
                }
              </div>
            </Scrollbar>
            <ChatField/>
          </div>
        }
      </div>
    )
  }
}