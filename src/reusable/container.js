import React from "react";
import { theme } from "./theme";

export const Container = ({
  children,
  flexDirection = "row",
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
