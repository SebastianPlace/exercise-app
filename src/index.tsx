import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// import App from './App';
import FilterableList from './containers/FilterableList';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { exercisesReducer } from './reducers/index';
import { StoreState } from './types/index';
import MockExercises from './data/exercises';

const store = createStore<StoreState>(exercisesReducer, {
  exercises: MockExercises,
  filterText: ''
});

ReactDOM.render(
  <Provider store={store}>
    <FilterableList />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
