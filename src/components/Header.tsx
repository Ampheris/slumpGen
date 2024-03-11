import { Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import { Colors } from "../static/Colors";
import logo from "./Logga.png";

interface Props {
  title?: string;
}

const Header: FC<Props> = ({ title = "Någon random titel" }) => {
  return (
    <Grid
      container
      gap={2}
      justifyContent="center"
      alignItems="center"
      padding={1}
      sx={{ backgroundColor: "white" }}
      boxShadow="0px 0px 10px black"
    >
      <Grid item height="80px" width="80px">
        <img src={logo} alt="logga" height="100%" />
      </Grid>
      <Typography
        variant="h3"
        fontWeight={700}
        fontFamily="Amatic SC, sans-serif"
        color={Colors.RHBlue}
        sx={{ textShadow: "1px 1px 1px black" }}
      >
        {title}
      </Typography>
    </Grid>
  );
};

export default Header;
