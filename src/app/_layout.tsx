import { Stack } from "expo-router";
import React from "react";
import ThemeProvider from "../context/themeContext";

function _layout() {
  return (
    <ThemeProvider>
      <Stack />
    </ThemeProvider>
  );
}

export default _layout;
