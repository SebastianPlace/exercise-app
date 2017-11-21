import * as React from 'react';

interface InputEvent {
  target: { 
    value: string;
  };
}

interface Props { 
  onChange: Function;
  value: string;
}

class ExerciseList extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: InputEvent) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <form>
        <input type="text" value={this.props.value} onChange={this.handleChange}/>
      </form>
    );
  }
}

export default ExerciseList;
