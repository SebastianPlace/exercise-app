import { FilterExercisesAction } from '../actions';
import { StoreState, Exercises } from '../types';
import { FILTER_EXERCISES } from '../constants/index';

export function exercises(state: StoreState, action: FilterExercisesAction): StoreState {
  switch (action.type) {
    case FILTER_EXERCISES: {
      const newExercises: Exercises = action.payload.exercises
        .filter(ex => ex.name.toLowerCase().includes(action.payload.filterText.toLowerCase()));
      
      return { ...state, exercises: newExercises };
    }
    default: return state;
  }
}