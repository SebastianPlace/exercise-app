import * as React from 'react';
import Card from '../Card/Card';
import Tag from '../Tag/Tag';
import { Exercise } from '../../types';

interface Props {
  exercise: Exercise;
}

export default (props: Props) => {
  const muscleGroups = props.exercise.muscle_groups
    .map(muscleGroup => <Tag text={muscleGroup} key={muscleGroup} />);

  return (
    <Card className="Exercise-card">
      <h2>{props.exercise.name}</h2>
      <div className="Tag-list">
        {muscleGroups}
      </div>
    </Card>
  );
};
