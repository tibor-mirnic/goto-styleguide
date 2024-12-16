import React, { FC } from "react";

export type CuiButtonProps = {
  text?: string;
}

export const CuiButton: FC<CuiButtonProps> = ({ text }) => {
  return <button type="button">{text}</button>;
}