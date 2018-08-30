import React, {PureComponent} from 'react';
import {Card, CardBody, Col, Button, ButtonToolbar} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import renderMultiSelectField from '../../../../components/form/MultiSelect';
import renderCheckBoxField from '../../../../components/form/CheckBox';

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
class CreateIdeaForm extends PureComponent {

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
                <label className='material-form__label'>Title</label>
                <Field
                  name='title'
                  component={renderTextField}
                  placeholder='Title'
                />
              </div>            
              <div>
              <label className='material-form__label'>Add Tags</label> 
              <Field
                    name='multi_select'
                    component={renderMultiSelectField}
                    options={[
                        {value: 'java', label: 'Java'},
                        {value: 'asp', label: 'Asp.net'}
                    ]}
                />
              </div>   
              <div>
                <label className='material-form__label'>Write Your Idea</label>
                <Field
                  name='textarea'
                  component={renderTextField}
                  placeholder='Type Idea here'
                  multiline
                  rowsMax='4'
                />
              </div>
              <div>
              <Field
                    name='checkbox'
                    component={renderCheckBoxField}
                    label='Looking for Sponsership'
                    />
              </div>
              <ButtonToolbar className='form__button-toolbar'>
                <Button color='primary' type='submit'>Submit</Button>
                <Button type='button' onClick={reset}>
                  Cancel
                </Button>
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