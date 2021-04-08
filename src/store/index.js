import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';

import todos from './reducers/todos';
import muc from './reducers/muc';
import visibilityFilter from './reducers/visibilityFilter';
import theme from './reducers/theme';

const appStore = combineReducers({
  todos,
  visibilityFilter,
  muc,
  theme
});

export default createStore(appStore, applyMiddleware(thunk));
