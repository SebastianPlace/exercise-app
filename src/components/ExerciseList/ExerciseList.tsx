import * as React from 'react';
import './ExerciseList.css';
import { Exercises } from '../../types';
import ExerciseCard from '../ExerciseCard/ExerciseCard';

interface Props {
  exercises: Exercises;
}

class ExerciseList extends React.Component<Props> {
  render() {
    const exercises = this.props.exercises;
    const exerciseCards = exercises.map(ex => <ExerciseCard exercise={ex} key={ex.id} />);

    return (
      <div className="Exercise-list">
        {exerciseCards}
      </div>
    );
  }
}

export default ExerciseList;
