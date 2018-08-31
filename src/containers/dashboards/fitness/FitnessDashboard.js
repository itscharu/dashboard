import React, {PureComponent} from 'react';
import {Col, Container, Row, Button,ButtonToolbar, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import ActivityChart from './components/ActivityChart';
import ActivityRating from './components/ActivityRating';
import FatBurning from './components/FatBurning';
import Delivered from './components/Delivered';
import Accepted from './components/Accepted';
import Active from './components/Active';
import TodayRunningMap from './components/TodayRunningMap';
import MyCompetitors from './components/MyCompetitors';
import Select from 'react-select';
import { selectValueDropDown } from "../../../redux/actions/pieChartActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TopIdeas from './components/TopIdeas'
const options = [
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'quarter', label: 'Quarter' },
];
class FitnessDashboard extends PureComponent {
  constructor(){
    super();
    this.state = {
      modal: false
    };
  }
  handleChange = (selectedOption) => {
    const {selectValueDropDown}=this.props.actions;
    selectValueDropDown(selectedOption);
  }
  
  render() {
    const { selectedOption } = this.props.selectState;
    const {handleSubmit, reset} = this.props;
    return (
      <Container className='dashboard'>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Dashboard</h3>
          </Col>
          <Col lg={3} md={4} sm={6} xs={6}>
          <Select
                  value={selectedOption}
                  onChange={this.handleChange}
                  options={options}
              />
            
          </Col>         
        </Row>       
        <Row>
          <Delivered/>
          <Accepted/>
          <Active/>
          <MyCompetitors/>
        </Row>
        <Row>
          <ActivityChart/>
          <TopIdeas/>
        </Row>
      </Container>
    )
  }
}
const mapStateToProps=(state)=>{
  return {
    selectState: state.select
  };
}
 
const mapDispatchToProps=(dispatch)=>{
  return {
    actions: bindActionCreators({
      selectValueDropDown
    }, dispatch)
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(FitnessDashboard);
