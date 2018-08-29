import React, {PureComponent} from 'react';
import Panel from '../../../../components/Panel';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const data = [{name: 'Q1', delivered: 6, active: 18, accepted: 14},
  {name: 'Q2', delivered: 8, active: 16, accepted: 30},
  {name: 'Q3', delivered: 3, active: 20, accepted: 28},
  {name: 'Q4', delivered: 5, active: 17, accepted: 30}];

export default class ActivityChart extends PureComponent {
  render() {
    return (
      <Panel xs={12} lg={9} title='TREND'>
        <ResponsiveContainer height={250} className='dashboard__area'>
          <AreaChart data={data} margin={{top: 20, left: -15, bottom: 20}}>
            <XAxis dataKey='name' tickLine={false}/>
            <YAxis tickFormatter={value => `${value}`} tickLine={false}/>
            <Tooltip/>
            <Legend/>
            <CartesianGrid/>
            <Area name='Delivered' type='monotone' dataKey='delivered' fill='#70bbfd' stroke='#70bbfd' fillOpacity={0.2}/>
            <Area name='Active' type='monotone' dataKey='active' fill='#4ce1b6' stroke='#4ce1b6' fillOpacity={0.2}/>
            <Area name='Accepted' type='monotone' dataKey='accepted' fill='#4ce1c8' stroke='#4ce1c8' fillOpacity={0.2}/>
          </AreaChart>
        </ResponsiveContainer>
      </Panel>
    )
  }
}

