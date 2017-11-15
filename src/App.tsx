import * as React from 'react';
import './App.css';
import ExerciseList from './components/ExerciseList/ExerciseList';
import exercises from './data/exercises';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Exercises</h2>
        <ExerciseList exercises={exercises} />
      </div>
    );
  }
}

export default App;
