import React, {PureComponent} from 'react';
import {Button} from 'reactstrap'
import PlusIcon from 'mdi-react/PlusIcon';
import EmoticonIcon from 'mdi-react/EmoticonIcon';
import TextField from '@material-ui/core/TextField';

export default class ChatField extends PureComponent {
  render() {
    return (
      <div className='chat__text-field'>
        <form className='chat__form material-form'>
          {/*<input className='chat__text-form-group'/>*/}
          <TextField className='chat__text-form-group material-form__field' multiline
                     rowsMax='3'/>
          <div className='chat__field-controls'>
            <button className='chat__icon-button' onClick={(e) => {
              e.preventDefault()
            }}>
              <EmoticonIcon/>
            </button>
            <button className='chat__icon-button' onClick={(e) => {
              e.preventDefault()
            }}>
              <PlusIcon/>
            </button>
            <Button className='chat__text-button' color='primary' onClick={(e) => {
              e.preventDefault()
            }}>Send</Button>
          </div>
        </form>
      </div>
    )
  }
}
