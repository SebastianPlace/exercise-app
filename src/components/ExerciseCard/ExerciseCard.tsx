import * as React from 'react';
import Card from '../Card/Card';
import Exercise from '../../interfaces/exercise';

interface Props {
  exercise: Exercise;
  key: string;
}

export default (props: Props) => {
  return (
    <Card>
      <div className="Exercise-card">
        <h2>{props.exercise.name}</h2>
      </div>
    </Card>
  );
};
