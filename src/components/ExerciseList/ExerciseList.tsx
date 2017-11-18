import * as React from 'react';
import './ExerciseList.css';
import Exercise from '../../interfaces/exercise';
import ExerciseCard from '../ExerciseCard/ExerciseCard';

interface Props {
  exercises: [Exercise];
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
