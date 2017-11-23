import * as React from 'react';

// TODO: create a better type for DOM events
interface InputEvent {
  target: { 
    value: string;
  };
  preventDefault: Function;
}

interface Props { 
  onChange: Function;
  value: string;
}

class ExerciseList extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);    
  }

  handleChange(e: InputEvent) {
    this.props.onChange(e.target.value);
  }

  // tslint:disable-next-line:no-any
  handleSubmit(e: any) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.props.value} onChange={this.handleChange}/>
      </form>
    );
  }
}

export default ExerciseList;
