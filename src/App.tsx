import React from "react";
import { Grid } from "@mui/material";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { Colors } from "./static/Colors";

function App() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="flex-start"
      height="100vh"
      sx={{ backgroundColor: Colors.RHBlue }}
    >
      <Header title="Råtthjälpens Lottdragning" />
      <MainContent />
    </Grid>
  );
}

export default App;
