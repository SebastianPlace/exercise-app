import SearchBar from '../components/SearchBar/SearchBar';
import { FilterExercisesPayload, FilterExercisesAction, filterExercises } from '../actions/';
import { StoreState } from '../types';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ exercises }: StoreState) {
  return {
    exercises,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<FilterExercisesAction>, ownProps: FilterExercisesPayload ) {
  return {
    onChange: () => dispatch(filterExercises(ownProps.filterText, ownProps.exercises)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
