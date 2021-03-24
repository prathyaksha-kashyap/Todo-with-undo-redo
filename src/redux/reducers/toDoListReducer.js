export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo 
    }
}

export const removeAuction = (id) => {
    return {
        type: 'REMOVE_TODO',
        payload: id
    }
}


const initialState = []
function ToDoListReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
        return [...state, action.payload]

    case "REMOVE_TODO":
     return state.filter((todo) => {return todo.id != action.payload})

    default:
      return state
  }
}

export default ToDoListReducer