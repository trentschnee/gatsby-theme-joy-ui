// import { getInitColorSchemeScript } from '@mui/material/styles';
import { GatsbySSR } from "gatsby";
import { getInitColorSchemeScript } from "@mui/joy";
import WrapRootElement from "./src/WrapRootElement";
export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setPreBodyComponents,
}) => {
  setPreBodyComponents([getInitColorSchemeScript()]);
};

export const wrapRootElement = WrapRootElement;
