import { Button as MantineButton } from "@mantine/core";
import { MouseEventHandler } from "react";

// types
interface ButtonProps {
  disabled?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick: MouseEventHandler;
}

export const Button = ({ onClick, children, disabled, fullWidth = false }: ButtonProps) => {
  return <MantineButton fullWidth={fullWidth} disabled={disabled} onClick={onClick}>{children}</MantineButton>;
};
