import React, {PureComponent} from 'react';
import {Card, CardBody, Col,Row, Button, ButtonToolbar} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import TextField from '@material-ui/core/TextField';
import renderMultiSelectField from '../../../components/form/MultiSelect';
import renderCheckBoxField from '../../../components/form/CheckBox';


const renderTextField = ({input, label, meta: {touched, error}, children, select}) => (
    <TextField
      className='material-form__field'
      label={label}
      error={touched && error}
      value={input.value}
      children={children}
      select={select}
      onChange={(e) => {
        e.preventDefault();
        input.onChange(e.target.value);
      }}
    />
  );
class UpdateIdeaForm extends PureComponent {

  render() {
    const {handleSubmit, reset} = this.props;
    
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
                  disabled
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
                        {value: 'asp', label: 'Asp.net'}
                    ]}
                />
                </Col>
                <Col>
                <label className='material-form__label'>Add Git Repo link</label> 
                <Field
                     name='gitRepos'
                     type='url'                     
                     component={renderTextField}
                     placeholder='Git repo link'
                />
                </Col>
                <Col>
                <label className='material-form__label'>Update Co-Authors</label> 
                <Field
                    name='coAuthors'
                    component={renderTextField}
                    placeholder='Add Co-Authors separated by ,'
                />
                </Col>
                </Row>    
           
              <div>
                <label className='material-form__label'>Update Your Idea</label>
                <Field
                  name='description'
                  component='textarea'
                  placeholder='Type Idea here'
                  style={{width:'100%',height:'200px',marginBottom:'10px'}}
                />
              </div>
              <div>
                <label className='material-form__label'>Add Comments</label>
                <Field
                  name='comments'
                  component='textarea'
                  placeholder='Add comments'
                  style={{width:'100%',height:'100px',marginBottom:'10px'}}
                />
              </div>
              <div>
              <Field
                    name='sponsership'
                    component={renderCheckBoxField}
                    label='Looking for Sponsership'
                    />
              </div>
              <ButtonToolbar className='form__button-toolbar'>
                <Button color='primary' type='submit'>Update</Button>
                <Button type='button' onClick={reset}>Reset</Button>
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