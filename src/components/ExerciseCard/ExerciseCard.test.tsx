import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ExerciseCard from './ExerciseCard';
import Exercise from '../../interfaces/exercise';

const fakeExercise: Exercise = {
  id: '1',
  name: 'Test',
  muscle_groups: ['chest']
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExerciseCard exercise={fakeExercise} key={fakeExercise.id} />, div);
});

it('renders the exercise name', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExerciseCard exercise={fakeExercise} key={fakeExercise.id} />, div);
  expect(div.textContent).toBe('Test');
});
