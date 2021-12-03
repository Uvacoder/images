import { Button as MantineButton } from "@mantine/core";
import { MouseEventHandler } from "react";

interface ButtonProps {
  onClick: 
  children: JSX.Element;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return <MantineButton onClick={onclick}>{children}</MantineButton>;
};
