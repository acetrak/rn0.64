import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';

import todos from './reducers/todos';
import muc from './reducers/muc';
import visibilityFilter from './reducers/visibilityFilter';
import theme from './reducers/theme';
import home from './reducers/home';

const appStore = combineReducers({
  todos,
  visibilityFilter,
  muc,
  theme,
  home
});

export default createStore(appStore, applyMiddleware(thunk));
