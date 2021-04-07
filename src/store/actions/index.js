import {search} from '../../services/search';
import to from 'await-to-js';
import {ToastAndroid} from 'react-native';

let nextTodoId = 0;
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };
};

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
};

export const searchAction = () => async dispatch => {
  ToastAndroid.showWithGravity(
    '获取中...',
    ToastAndroid.SHORT,
    ToastAndroid.CENTER,
  );

  const [err, res] = await to(search());

  if (err) {
    console.log('An error occurred.', err);
    return;
  }

  dispatch({
    type: 'ADD',
    songs: res.result.songs,
  });
};
