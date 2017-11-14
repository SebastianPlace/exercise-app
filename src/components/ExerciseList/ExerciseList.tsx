import * as React from 'react';
import './ExerciseList.css';
import exercises from '../../data/exercises';
import Exercise from '../../interfaces/exercise';

const ExerciseCard = (exercise: Exercise) => {
  return (
    <li className="ExerciseCard" key={exercise.id}>
      <h2>{exercise.name}</h2>
    </li>
   );
};

const exerciseElements = exercises.map(ExerciseCard);

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
