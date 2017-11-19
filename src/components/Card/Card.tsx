import * as React from 'react';
import './Card.css';

interface Props {
  children: {};
  className?: string;
}

export default (props: Props) => {
  const cssClasses = `Card ${props.className}`;
  return (
    <div className={cssClasses}>
      {props.children}
    </div>
  );
};
