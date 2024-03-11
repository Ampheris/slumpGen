import { Grid, TextField, Typography } from "@mui/material";
import React, { FC } from "react";

const DrawWinner: FC = () => {
  return (
    <Grid container>
      <Typography>Då var det dags!</Typography>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Hello World"
        variant="filled"
      />
    </Grid>
  );
};

export default DrawWinner;
