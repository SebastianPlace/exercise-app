import * as React from 'react';
import './Card.css';

interface Props {
  children: {};
}

export default (props: Props) => {
  return (
    <div className="Card">
      {props.children}
    </div>
  );
};
