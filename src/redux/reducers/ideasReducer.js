import {CREATE_SUCCESSFUL,CREATE_FAILED
,DELETE_IDEA_SUCCESS,DELETE_IDEA_FAILED,
GET_ALL_IDEAS_SUCCESS,UPDATE_FAILED,UPDATE_SUCCESSFUL,
GET_ALL__IDEAS_FAILURE} from '../actions/ideasActions';


export default function (state = [], action) {
    switch (action.type) {
      case CREATE_SUCCESSFUL:        
        return [...state,action.payload]
      
        case CREATE_FAILED:    

        return state;

        case GET_ALL_IDEAS_SUCCESS:
        return action.payload

        case UPDATE_SUCCESSFUL:
         let newState=state.filter((idea)=>{idea.id!=action.payload.id})
        
         return newState.concat(action.payload)
        case DELETE_IDEA_SUCCESS:
        
        return state.filter((idea)=>{return idea.id!=action.payload.id})
        
      default:
        return state;
    }
  }