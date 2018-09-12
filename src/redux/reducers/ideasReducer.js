import {
    CREATE_IDEA,UPDATE_IDEA,DELETE_IDEA
  } from '../actions/ideasActions';

export default function (state = [], action) {
    switch (action.type) {
      case CREATE_IDEA:        
        return [...state,action.payload];
        case UPDATE_IDEA:
         let toBeUpdate=state.find((idea)=>{idea.index===action.payload.index})
         toBeUpdate=action.payload;
         state=state.push(toBeUpdate);
         return {...state}
        case DELETE_IDEA:
        
        return [...state.filter((idea)=>{return idea.subject!=action.payload})]
      default:
        return state;
    }
  }