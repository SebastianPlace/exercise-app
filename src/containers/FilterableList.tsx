import FilterableList from '../components/FilterableList/FilterableList';
import { FilterExercisesPayload, FilterExercisesAction, filterExercises } from '../actions/';
import { StoreState } from '../types';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ exercises, filterText }: StoreState) {
  return {
    exercises,
    filterText
  };
}

export function mapDispatchToProps(dispatch: Dispatch<FilterExercisesAction>, ownProps: FilterExercisesPayload ) {
  return {
    onChange: () => dispatch(filterExercises(ownProps.filterText, ownProps.exercises)),
  };
}

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(FilterableList);
