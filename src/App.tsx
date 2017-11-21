import * as React from 'react';
import './App.css';
import ExerciseList from './components/ExerciseList/ExerciseList';
import SearchBar from './components/SearchBar/SearchBar';

import Exercise from './types/exercise';
import exercises from './data/exercises';

interface Props {}
interface State {
  filterText: string;
  exercises: Array<Exercise>;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.filterResults = this.filterResults.bind(this);
    this.state = { filterText: '', exercises };
  }

  filterResults(filterText: string) {
    const filteredExercises: Array<Exercise> = exercises
      .filter(ex => ex.name.toLowerCase().includes(filterText.toLowerCase()));
    this.setState({
      filterText,
      exercises: filteredExercises
    });
  }

  render() {
    return (
      <div className="App">
        <h2>Exercises</h2>
        <SearchBar onChange={this.filterResults} value={this.state.filterText}/>
        <ExerciseList exercises={this.state.exercises} />
      </div>
    );
  }
}

export default App;
