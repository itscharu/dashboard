import {
    UPDATE_PIE_CHARTS_STATS
  } from '../actions/pieChartActions';

  const initialState = {
    selectedOption:{ value: 'week', label: 'Week' },
    pieDataDelivered:{dataWeek:[{value: 30, fill: '#ff4861'},
    {value: 70, fill: '#eeeeee'}],dataMonth:[{value: 50, fill: '#ff4861'},
    {value: 50, fill: '#eeeeee'}],dataQuarter:[{value: 80, fill: '#ff4861'},
    {value: 20, fill: '#eeeeee'}]},
    pieDataAccepted:{dataWeek:[{value: 40, fill: '#ff4861'},
    {value: 60, fill: '#eeeeee'}],dataMonth:[{value: 60, fill: '#ff4861'},
    {value: 40, fill: '#eeeeee'}],dataQuarter:[{value: 10, fill: '#ff4861'},
    {value: 90, fill: '#eeeeee'}]},
    pieDataActive:{dataWeek:[{value: 20, fill: '#ff4861'},
    {value: 80, fill: '#eeeeee'}],dataMonth:[{value: 30, fill: '#ff4861'},
    {value: 70, fill: '#eeeeee'}],dataQuarter:[{value: 90, fill: '#ff4861'},
    {value: 10, fill: '#eeeeee'}]}
  };
export default function (state = initialState, action) {
    switch (action.type) {
      case UPDATE_PIE_CHARTS_STATS:
            state.selectedOption=action.payload
        return {...state};
      default:
        return state;
    }
  }