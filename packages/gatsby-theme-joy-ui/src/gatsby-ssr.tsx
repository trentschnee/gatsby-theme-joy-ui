// import { getInitColorSchemeScript } from '@mui/material/styles';
import { GatsbySSR } from "gatsby";
import { getInitColorSchemeScript } from "@mui/joy/styles";
import WrapRootElement from "./WrapRootElement";
export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setPreBodyComponents,
}) => {
  setPreBodyComponents([getInitColorSchemeScript()]);
};

export const wrapRootElement = WrapRootElement;
