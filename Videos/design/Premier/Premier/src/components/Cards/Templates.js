import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TemplatesCards from "./Cards";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Item>
            <TemplatesCards />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <TemplatesCards />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <TemplatesCards />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
