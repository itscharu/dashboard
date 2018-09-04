import React, {PureComponent} from 'react';
import {Col, Container, Row, Button,ButtonToolbar, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Select from 'react-select';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateIdeaForm from './components/CreateIdeaForm'
import showResults from './components/showFormResults'
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
  render() {
   
    return (
      <Container className='dashboard'>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Ideas</h3>
          </Col>
          <Col lg={3} md={4} sm={6} xs={6}>
                <div>
        <Button color="danger" onClick={this.toggle}>New Idea</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Ideate2Innovate</ModalHeader>
          <ModalBody>
          <CreateIdeaForm onSubmit={showResults}/>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
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

export default connect()(Ideas);
