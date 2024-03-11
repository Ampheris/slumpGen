import { Button, styled } from "@mui/material";

export const RHButton = styled(Button)({
  boxShadow: "1px 1px 2px black",
  textTransform: "none",
  backgroundColor: "#2F424C",
  width: "100%",
  color: "#FFFF",
  fontFamily: "Raleway, sans-serif",
  fontSize: "1.5rem",
  ":hover": { backgroundColor: "#e2cdb4", color: "#000" },
});
