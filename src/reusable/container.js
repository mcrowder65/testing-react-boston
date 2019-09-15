import React from "react";
import { theme } from "./theme";

export const Container = ({
  children,
  flexDirection = "column",
  justifyContent = theme.containerAlignItems
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection,
        justifyContent,
        alignItems: theme.containerAlignItems
      }}
    >
      {children}
    </div>
  );
};
