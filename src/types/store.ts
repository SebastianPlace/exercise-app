import Exercise from './exercise';

export default interface Store {
  languageName: string;
  exercises: Array<Exercise>;
}
