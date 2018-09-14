import React, {PureComponent} from 'react';
import {Col, Container, Row, Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import {Field,reduxForm} from 'redux-form';

const renderTextField = ({input, type,placeholder, meta: {touched, error}}) => (
    <div className='form__form-group-input-wrap'>
    <input style={styleInputBox} {...input} placeholder={placeholder} type={type}/>
    {touched && error && <span style={{color:'red'}}>{error}</span>}
    </div>
    )
const styleInputBox={border: 'none',borderBottom: '1px solid #ccc',width:'100%',padding: '12px 20px',margin: '8px 0',boxSizing: 'border-box'}

class IdeaSearch extends PureComponent{
    handleSearch=(e)=>{
        e.preventDefault();
        alert('I will search based on subject');
      }
render(){
    const {handleSubmit,pristine,submitting,reset} = this.props;
    return (<form className='material-form' onSubmit={this.handleSearch}>
              <div>
                <label className='material-form__label'>Subject</label>
                <Field
                  name='search'
                  placeholder='Search...'
                  component={renderTextField}
                />
              </div>                        
                <Button color='primary' type='submit'>Search</Button>
    
            </form>
    )
    }
}
export default reduxForm({
    form: 'searchIdea', // a unique identifier for this form
  })(IdeaSearch);