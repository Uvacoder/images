import { useState } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === "light" ? "dark" : "light"));
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme }}>{children}</MantineProvider>
    </ColorSchemeProvider>
  );
};
