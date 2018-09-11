import React, {PureComponent} from 'react';
import {Col, CardColumns,Container, Row, Button,ButtonToolbar, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CampaignCard from './components/campaignCard';

const expoImg = process.env.PUBLIC_URL + '/img/for_campaign/expo.jpg';
const hackovationImg = process.env.PUBLIC_URL + '/img/for_campaign/hackovation.png';

class Campaigns extends PureComponent {
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
            <h3 className='page-title'>Campaigns</h3>
          </Col>
        </Row>
        <Row>
          <CardColumns>
              <CampaignCard img={expoImg} tabId='2'/>
              <CampaignCard img={hackovationImg} tabId='3'/>
          </CardColumns>
        </Row>
      </Container>
      
      
    )
  }
}

export default connect()(Campaigns);
