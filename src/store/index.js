import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';

import todos from './reducers/todos';
import muc from './reducers/muc';
import visibilityFilter from './reducers/visibilityFilter';

const appStore = combineReducers({
  todos,
  visibilityFilter,
  muc,
});

export default createStore(appStore, applyMiddleware(thunk));
