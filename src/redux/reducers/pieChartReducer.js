import {
    UPDATE_PIE_CHARTS_STATS
  } from '../actions/pieChartActions';

  const initialState = {
    selectedOption:{ value: 'week', label: 'Week' },
    pieDataDelivered:{dataWeek:[{value: 30, fill: '#ff4861'},
    {value: 70, fill: '#eeeeee'}],dataMonth:[{value: 50, fill: '#ff4861'},
    {value: 50, fill: '#eeeeee'}],dataQuarter:[{value: 80, fill: '#ff4861'},
    {value: 20, fill: '#eeeeee'}]},
    pieDataAccepted:{dataWeek:[{value: 40, fill: '#70bbfd'},
    {value: 60, fill: '#eeeeee'}],dataMonth:[{value: 60, fill: '#70bbfd'},
    {value: 40, fill: '#eeeeee'}],dataQuarter:[{value: 10, fill: '#70bbfd'},
    {value: 90, fill: '#eeeeee'}]},
    pieDataActive:{dataWeek:[{value: 20, fill: '#4ce1b6'},
    {value: 80, fill: '#eeeeee'}],dataMonth:[{value: 30, fill: '#4ce1b6'},
    {value: 70, fill: '#eeeeee'}],dataQuarter:[{value: 90, fill: '#4ce1b6'},
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