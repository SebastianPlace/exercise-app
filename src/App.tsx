import * as React from 'react';
import './App.css';
import ExerciseList from './components/ExerciseList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Exercises</h2>
        <ExerciseList />
      </div>
    );
  }
}

export default App;
