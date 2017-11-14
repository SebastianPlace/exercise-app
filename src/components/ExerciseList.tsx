import * as React from 'react';
import './ExerciseList.css';
import exercises from '../data/exercises';

const exerciseElements = exercises.map(exercise => {
 return (
  <li key={exercise.id}>
    <h2>{exercise.name}</h2>
  </li>
 );
});

class ExerciseList extends React.Component {
  render() {
    return (
      <div className="ExerciseList">
        <ul>
          {exerciseElements}
        </ul>
      </div>
    );
  }
}

export default ExerciseList;
