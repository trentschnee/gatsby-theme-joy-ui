import React from "react";
import Provider from "./theme/Provider"

type RootElement = { element: React.ReactNode }
export default function wrapWithProvider({ element }: RootElement) {
  return <Provider>{element}</Provider>;
}
