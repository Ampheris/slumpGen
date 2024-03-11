import { Button, Grid, styled } from "@mui/material";
import React, { FC, useState } from "react";
import DrawWinner from "./DrawWinner";

const RHButton = styled(Button)({
  boxShadow: "1px 1px 2px black",
  textTransform: "none",
  backgroundColor: "#2F424C",
  width: "100%",
  color: "#FFFF",
  fontFamily: "Raleway, sans-serif",
  fontSize: "1.5rem",
  ":hover": { backgroundColor: "#e2cdb4", color: "#000" },
});

type ButtonTextTypes = "Gå vidare" | "Dra en vinnare" | "Börja om";

const MainContent: FC = () => {
  const [showDrawWinner, setShowDrawWinner] = useState<boolean>(false);
  const [showWinner, setShowWinner] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<ButtonTextTypes>("Gå vidare");

  const onButtonClick = () => {
    switch (buttonText) {
      case "Gå vidare":
        setShowDrawWinner(true);
        setButtonText("Dra en vinnare");
        break;
      case "Dra en vinnare":
        setShowDrawWinner(false);
        setShowWinner(true);
        setButtonText("Börja om");
        break;
      case "Börja om":
        setButtonText("Gå vidare");
        break;
      default:
        setButtonText("Gå vidare");
        setShowDrawWinner(false);
        setShowWinner(false);
        break;
    }
  };

  return (
    <Grid
      container
      gap={2}
      justifyContent="center"
      alignItems="center"
      width="60vw"
    >
      {showDrawWinner ? <DrawWinner /> : null}
      {showWinner ? <DrawWinner /> : null}

      <RHButton onClick={() => onButtonClick()}>{buttonText}</RHButton>
    </Grid>
  );
};

export default MainContent;
