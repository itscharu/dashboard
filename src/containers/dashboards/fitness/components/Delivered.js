import React, {PureComponent} from 'react';
import {PieChart, Pie, ResponsiveContainer} from 'recharts';
import {Card, CardBody, Col} from 'reactstrap';
import Select from 'react-select';

const dataWeek = [{value: 30, fill: '#ff4861'},
  {value: 70, fill: '#eeeeee'}];
const dataMonth=[{value: 50, fill: '#ff4861'},
{value: 50, fill: '#eeeeee'}];
const dataQuarter=[{value: 80, fill: '#ff4861'},
{value: 20, fill: '#eeeeee'}]
  const options = [
    { value: 'week', label: 'Week' },
    { value: 'month', label: 'Month' },
    { value: 'quarter', label: 'Quarter' },
  ];
export default class Delivered extends PureComponent {
  constructor(){
    super();
    this.state={selectedOption:{ value: 'week', label: 'Week' },pieData:[{value: 30, fill: '#ff4861'},
    {value: 70, fill: '#eeeeee'}]}
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    if(selectedOption.value==='week'){
      //call an action here
      this.setState({pieData:dataWeek})
    }else if(selectedOption.value==='month'){
      //call an action here
      this.setState({pieData:dataMonth})
    }else{
      //call an action here
      this.setState({pieData:dataQuarter})
    }
  }
  render() {
    const { selectedOption } = this.state;
    return (
      <Col md={12} xl={3} lg={6} sm={12} xs={12}>
        <Card>
          <CardBody className='dashboard__health-chart-card'>
            <div className='card__title'>
              <h5 className='bold-text'>Delivered</h5>
              <Select
                  value={selectedOption}
                  onChange={this.handleChange}
                  options={options}
              />
            </div>
            <div className='dashboard__health-chart'>
              <ResponsiveContainer height={180}>
                <PieChart>
                  <Pie data={this.state.pieData} dataKey='value' cy={85} innerRadius={80} outerRadius={90}/>
                </PieChart>
              </ResponsiveContainer>
              <div className='dashboard__health-chart-info'>
                <p className='dashboard__health-chart-number'>{this.state.pieData[0].value}</p>
              </div>
            </div>
            <p className='dashboard__goal'>Total:150</p>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

