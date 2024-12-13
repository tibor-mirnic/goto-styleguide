import { FC } from 'react';

export type CuiButtonProps = {
  text?: string;
};

export const CuiButton: FC<CuiButtonProps> = ({ text }) => {
  return (
    <button className="cui-button" type="button">
      {text}
    </button>
  );
};
