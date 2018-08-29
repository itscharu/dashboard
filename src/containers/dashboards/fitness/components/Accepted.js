import React, {PureComponent} from 'react';
import {PieChart, Pie, ResponsiveContainer} from 'recharts';
import {Card, CardBody, Col} from 'reactstrap';

const data = [{value: 360, fill: '#f6da6e'},
  {value: 140, fill: '#eeeeee'}];

export default class Accepted extends PureComponent {
  render() {
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
                  <Pie data={data} dataKey='value' cy={85} innerRadius={80} outerRadius={90}/>
                </PieChart>
              </ResponsiveContainer>
              <div className='dashboard__health-chart-info'>
                {/* <FlashIcon style={{fill: '#f6da6e'}}/> */}
                <p className='dashboard__health-chart-number'>24</p>
              </div>
            </div>
            <p className='dashboard__goal'>Total:150</p>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

