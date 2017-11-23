import * as React from 'react';
import { Exercises } from '../../types';
import ExerciseList from '../ExerciseList/ExerciseList';
import SearchBar from '../SearchBar/SearchBar';

interface Props {
  exercises: Exercises;
  filterText: string;
  onChange: Function;
}

class FilterableList extends React.Component<Props> {
  render() {
    return (
      <div className="Filterable-list">
        <SearchBar value={this.props.filterText} onChange={this.props.onChange}/>
        <ExerciseList exercises={this.props.exercises} />
      </div>
    );
  }
}

export default FilterableList;
