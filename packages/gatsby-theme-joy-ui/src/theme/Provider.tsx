import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider } from "@mui/joy/styles/CssVarsProvider";
import * as React from "react";
import theme from "./theme";

interface IProviderProps {
  children: React.ReactNode;
}

export default ({ children }: IProviderProps) => {
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
};
