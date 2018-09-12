export const CREATE_IDEA = 'CREATE_IDEA';
export const DELETE_IDEA = 'DELETE_IDEA';
export const UPDATE_IDEA = 'UPDATE_IDEA';
export function createIdea(idea) {
    console.log(idea)
  return {
    type: CREATE_IDEA,
    payload:idea
  };
}
export function deleteIdea(idea_index) {
    return {
      type: DELETE_IDEA,
      payload:idea_index
    };
  }

  export function updateIdea(idea) {
    return {
      type: UPDATE_IDEA,
      payload:idea
    };
  }