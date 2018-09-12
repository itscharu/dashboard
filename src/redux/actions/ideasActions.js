import axios from 'axios';
export const GET_ALL_IDEAS_SUCCESS = 'GET_ALL_IDEAS_SUCCESS';
export const GET_ALL__IDEAS_FAILURE='GET_ALL__IDEAS_FAILURE';
export const CREATE_FAILED='CREATE_FAILED'
export const CREATE_SUCCESSFUL='CREATE_SUCCESSFUL';
export const DELETE_IDEA_SUCCESS = 'DELETE_IDEA_SUCCESS';
export const DELETE_IDEA_FAILED = 'DELETE_IDEA_FAILED';
export const UPDATE_SUCCESSFUL = 'UPDATE_SUCCESSFUL';
export const UPDATE_FAILED='UPDATE_FAILED'

let config={headers:{
  'Content-Type':'application/json'
}}

export function getAllIdeas(){
  return function (dispatch){
    return axios.get('http://13.126.235.41:8080/idea').then(response => {
    // dispatch
    console.log(response)
      dispatch({
        type: GET_ALL_IDEAS_SUCCESS,
        payload:response.data
      })
    }).catch(response=>{
      // dispatch
      console.log(response)
      dispatch({
        type: GET_ALL__IDEAS_FAILURE,
        payload:response
      })
    })
  }
}
export function createIdea(idea) {
    return function (dispatch){
      return axios.post('http://13.126.235.41:8080/idea',JSON.stringify(idea),config).then(response => {
      // dispatch
      console.log('success')
        dispatch({
          type: CREATE_SUCCESSFUL,
          payload:response.data
        })
      }).catch(response=>{
        // dispatch
        console.log(response)
        dispatch({
          type: CREATE_FAILED,
          payload:response
        })
      })
    }
}

export function deleteIdea(idea_index) {
  console.log(JSON.stringify(idea_index))
  return function (dispatch){
    return axios.delete('http://13.126.235.41:8080/idea',{params:{id:idea_index}}).then(response => {
    // dispatch
    console.log('success')
      dispatch({
        type: DELETE_IDEA_SUCCESS,
        payload:response.data
      })
    }).catch(response=>{
      // dispatch
      console.log(response)
      dispatch({
        type: DELETE_IDEA_FAILED,
        payload:response
      })
    })
  }
  }

  export function updateIdea(idea) {
    console.log(JSON.stringify(idea))
    return function (dispatch){
      return axios.put('http://13.126.235.41:8080/idea',JSON.stringify(idea),config).then(response => {
      // dispatch
      console.log('success')
        dispatch({
          type: UPDATE_SUCCESSFUL,
          payload:response.data
        })
      }).catch(response=>{
        // dispatch
        console.log(response)
        dispatch({
          type: UPDATE_FAILED,
          payload:response
        })
      })
    }
  }