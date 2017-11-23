export interface Exercise {
  id: string;
  name: string;
  muscle_groups: string[];
}

export type Exercises = Exercise[];

export interface StoreState {
  exercises: Exercises;
  filterText: string;
}
