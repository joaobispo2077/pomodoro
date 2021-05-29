import React from 'react';

export interface IButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

function Button({ text, onClick, className }: IButtonProps): JSX.Element {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
