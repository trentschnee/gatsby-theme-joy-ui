import React from "react";
import Provider from "./theme/Provider";

export default function wrapWithProvider({
  element,
}: {
  element: React.ReactNode;
}) {
  return <Provider>{element}</Provider>;
}
