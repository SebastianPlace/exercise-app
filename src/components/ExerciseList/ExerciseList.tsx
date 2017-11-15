import * as React from 'react';
import './ExerciseList.css';
import Exercise from '../../interfaces/exercise';

const ExerciseCard = (exercise: Exercise) => {
  return (
    <li className="ExerciseCard" key={exercise.id}>
      <h2>{exercise.name}</h2>
    </li>
  );
};

const exerciseElements = (exercises: [Exercise]) => exercises.map(ExerciseCard);

interface Props {
  exercises: [Exercise];
}

class ExerciseList extends React.Component<Props> {
  render() {
    return (
      <div className="ExerciseList">
        <ul>
          {exerciseElements(this.props.exercises)}
        </ul>
      </div>
    );
  }
}

export default ExerciseList;
