import * as React from 'react';
import './Tag.css';

interface Props {
  text: string;
}

export default (props: Props) => {
  return (
    <span className="Tag">
      {props.text}
    </span>
  );
};
