import * as React from 'react';

interface InputEvent {
  target: { 
    value: string;
  };
}
interface State { value: string; }
interface Props { onChange: Function; }

class ExerciseList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: InputEvent) {
    this.props.onChange(e.target.value);
    // this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </form>
    );
  }
}

export default ExerciseList;
