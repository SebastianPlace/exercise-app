import * as constants from '../constants';
import { Exercises } from '../types';
export interface FilterExercisesPayload {
  filterText: string;
  exercises: Exercises;
}
export interface FilterExercisesAction {
  type: constants.FILTER_EXERCISES;
  payload: FilterExercisesPayload;
}

export function filterExercises(filterText: string, exercises: Exercises): FilterExercisesAction {
  return {
    type: constants.FILTER_EXERCISES,
    payload: {
      filterText,
      exercises
    }
  };
}
