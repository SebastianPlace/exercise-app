export interface Exercise {
  id: string;
  name: string;
  muscle_groups: Array<string>;
}

export type Exercises = Array<Exercise>;

export interface StoreState {
  exercises: Exercises;
}
