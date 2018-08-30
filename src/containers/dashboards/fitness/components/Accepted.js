import React, {PureComponent} from 'react';
import {PieChart, Pie, ResponsiveContainer} from 'recharts';
import {Card, CardBody, Col} from 'reactstrap';
import { connect } from 'react-redux';

class Accepted extends PureComponent {
  render() {
    const {pieDataAccepted,selectedOption}=this.props.pieData;
    let pieDataToShow=[];
    if(selectedOption.value==='week'){
      pieDataToShow=pieDataAccepted.dataWeek;
    }
    else if(selectedOption.value==='month'){
      pieDataToShow=pieDataAccepted.dataMonth;
    }
    else{
      pieDataToShow=pieDataAccepted.dataQuarter;
    }
    return (
      <Col md={12} xl={3} lg={6} sm={12} xs={12}>
        <Card>
          <CardBody className='dashboard__health-chart-card'>
            <div className='card__title'>
              <h5 className='bold-text'>Accepted</h5>
            </div>
            <div className='dashboard__health-chart'>
              <ResponsiveContainer height={180}>
                <PieChart>
                  <Pie data={pieDataToShow} dataKey='value' cy={85} innerRadius={80} outerRadius={90}/>
                </PieChart>
              </ResponsiveContainer>
              <div className='dashboard__health-chart-info'>
                {/* <FlashIcon style={{fill: '#f6da6e'}}/> */}
                <p className='dashboard__health-chart-number'>{pieDataToShow[0].value}</p>
              </div>
            </div>
            <p className='dashboard__goal'>Total:150</p>
          </CardBody>
        </Card>
      </Col>
    )
  }
}
const mapStateToProps=(state)=>{
  return {
    pieData: state.select
  };
}
export default connect(mapStateToProps,null)(Accepted);

