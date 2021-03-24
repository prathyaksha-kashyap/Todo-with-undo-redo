import {createStore, applyMiddleware, combineReducers} from 'redux';
import undoable from 'redux-undo';
import thunk from 'redux-thunk';
import {
    ToDoListReducer
  } from '@reducers';

const configureStore = () => {
    const store = createStore(combineReducers({
        toDoList : undoable(ToDoListReducer)
    }), applyMiddleware(thunk));
    return store;
  };

const store = configureStore();
export default store;