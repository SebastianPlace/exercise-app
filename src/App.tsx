import * as React from 'react';
import './App.css';
import FilterableList from './containers/FilterableList';

interface Props {}

class App extends React.Component<Props> {
  render() {
    return (
      <div className="App">
        <h2>Exercises</h2>
        <FilterableList />
      </div>
    );
  }
}

export default App;
