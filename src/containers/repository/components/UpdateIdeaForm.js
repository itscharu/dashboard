import React, {PureComponent} from 'react';
import {Card, CardBody, Col,Row, Button, ButtonToolbar} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import TextField from '@material-ui/core/TextField';
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

class UpdateIdeaForm extends PureComponent {

  render() {
    const {handleSubmit,reset,submitting,pristine} = this.props;
    
    return (
        <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Idea2Innovate</h5>
            </div>
            <form className='material-form' onSubmit={handleSubmit}>
              <div>
                <label className='material-form__label'>Update Title</label>
                <Field
                  name='subject'
                  component={renderTextField}
                />
              </div>            
                <Row>
                <Col>
                <label className='material-form__label'>Update Tags</label> 
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
                <label className='material-form__label'>Add Git Repo link</label> 
                <Field
                     name='gitRepos'                     
                     component={renderTextField}
                     placeholder='repo1,repo2...'
                />
                </Col>
                <Col>
                <label className='material-form__label'>Update Co-Authors</label> 
                <Field
                    name='coAuthors'
                    component={renderTextField}
                    placeholder='abc@example.com,xyz@abc.com'
                />
                </Col>
                </Row>    
           
              <div>
                <label className='material-form__label'>Update Your Idea</label>
                <Field
                  name='description'
                  component='textarea'
                  placeholder='Type Idea here'
                  style={styleTextAreaBox}
                />
              </div>
              {/* <div>
                <label className='material-form__label'>Add Comments</label>
                <Field
                  name='comments'
                  component='textarea'
                  placeholder='Add comments'
                  style={styleTextAreaBox}
                />
              </div> */}
              <Row>
                <Col>
                <label className='material-form__label'>Add Sponsors</label> 
                <Field
                    name='sponsors'
                    component={renderTextField}
                    placeholder='abc@example.com,xyz@abc.com'
                />
                </Col>
                <Col>
                <label className='material-form__label'>Add Mentors</label> 
                <Field
                    name='mentors'
                    component={renderTextField}
                    placeholder='abc@example.com,xyz@abc.com'
                />
                </Col>
              </Row>
              <ButtonToolbar className='form__button-toolbar'>
                <Button color='primary' type='submit'>Update</Button>
                <Button type='button' disabled={pristine || submitting} onClick={reset}>Reset</Button>
              </ButtonToolbar>
            </form>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default reduxForm({
  form: 'updateIdea', // a unique identifier for this form
})(UpdateIdeaForm);