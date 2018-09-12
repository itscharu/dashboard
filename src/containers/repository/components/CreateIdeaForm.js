import React, {PureComponent} from 'react';
import {Card, CardBody, Col,Row, Button, ButtonToolbar} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import renderMultiSelectField from '../../../components/form/MultiSelect';
import renderCheckBoxField from '../../../components/form/CheckBox';

const required = value => value ? undefined : 'Required'
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined
const styleInputBox={border: 'none',borderBottom: '1px solid #ccc',width:'100%',padding: '12px 20px',margin: '8px 0',boxSizing: 'border-box'}
const styleTextAreaBox={width: '100%',height: '150px',padding: '12px 20px',margin:'5px',boxSizing: 'border-box',border: '1px solid #ccc',borderRadius: '4px',backgroundColor: '#f8f8f8',resize: 'none'}
const renderTextField = ({input, type,placeholder, meta: {touched, error}}) => (
  <div className='form__form-group-input-wrap'>
  <input style={styleInputBox} {...input} placeholder={placeholder} type={type}/>
  {touched && error && <span style={{color:'red'}}>{error}</span>}
  </div>
  );
class CreateIdeaForm extends PureComponent {

  render() {
    const {handleSubmit,pristine,submitting,reset} = this.props;
    
    return (
        <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Idea2Innovate</h5>
            </div>
            <form className='material-form' onSubmit={handleSubmit}>
              <div>
                <label className='material-form__label'>Subject</label>
                <Field
                  name='subject'
                  placeholder='Type Subject'
                  validate={required}
                  component={renderTextField}
                />
              </div>            
                <Row>
                <Col>
                <label className='material-form__label'>Add Tags</label> 
              <Field
                    name='tags'
                    component={renderMultiSelectField}
                    options={[
                        {value: 'java', label: 'Java'},
                        {value: 'python', label: 'Python'},
                        {value: 'spring boot', label: 'Spring boot'}
                    ]}
                />
                </Col>
                <Col>
                <label className='material-form__label'>Add Author</label> 
                <Field
                     name='author'
                     type='email'
                     validate={[required,email]}
                     component={renderTextField}
                     placeholder='abc@xyz.com'
                />
                </Col>
                <Col>
                <label className='material-form__label'>Add Co-Authors</label> 
                <Field
                    name='coAuthors'
                    component={renderTextField}
                    placeholder='abc@xyz.com,david@email.com'
                />
                </Col>
                </Row>    
           
              <div>
                <label className='material-form__label'>Write Your Idea</label>
                <Field
                  name='description'
                  component='textarea'
                  placeholder='Type Idea here'
                  style={styleTextAreaBox}
                />
              </div>
              {/* <div>
              <Field
                    name='sponsorship'
                    component={renderCheckBoxField}
                    label='Looking for Sponsorship'
                    />
              </div> */}
              <ButtonToolbar className='form__button-toolbar'>
                <Button color='primary' type='submit'>Submit</Button>
                <Button color='danger' type='button' onClick={reset} disabled={pristine || submitting}>Reset</Button>
              </ButtonToolbar>
            </form>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default reduxForm({
  form: 'createIdea', // a unique identifier for this form
})(CreateIdeaForm);