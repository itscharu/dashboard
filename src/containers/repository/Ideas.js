import React, {PureComponent} from 'react';
import {Col, Container, Row, Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {createIdea} from '../../redux/actions/ideasActions'
import CreateIdeaForm from './components/CreateIdeaForm'
import DataTable from '../tables/data_table/components/DataTable'

class Ideas extends PureComponent {
  constructor(){
    super();
    this.state = {
      modal: false
    };
  }
  
  toggle=()=>{
    this.setState({
      modal: !this.state.modal
    });
  }

  showResults=(values)=>{
    const {createIdea}=this.props.actions
    values.author={emailId:values.author}
    if(values.tags!=undefined)
    values.tags=values.tags.map(tag => {
      return tag.label
    });
    if(values.coAuthors!=undefined){
      values.coAuthors=values.coAuthors.split(/\s*,\s*/)
      values.coAuthors=values.coAuthors.map((coAuthor)=>{
        return {
          'emailId':coAuthor
        }
      })
    }
    values.statusStr='NEW'
    createIdea(values);
    this.toggle();
  }

  render() {
    return (
      <Container className='dashboard'>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Ideas</h3>
          </Col>
          <Col>
        <Button color="danger" onClick={this.toggle}>New Idea</Button>
        <Modal style={{maxWidth:'70%'}} isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
          <CreateIdeaForm onSubmit={this.showResults}/>
          </ModalBody>
        </Modal>
          </Col>         
        </Row>       
        <Row>
        <Col md={12}>
            <div>
        <DataTable/>
        </div>
        </Col>
        </Row>
      </Container>    
    )
  }
}

 
const mapDispatchToProps=(dispatch)=>{
  return {
    actions: bindActionCreators({
      createIdea
    }, dispatch)
  };
}
export default connect(null,mapDispatchToProps)(Ideas);
