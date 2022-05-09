import React from "react";
import { Grid } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import SlidesTemplates from "../../components/Cards/Templates";

export default function SlidesSelects() {
  var classes = useStyles();

  return (
    <>
      <PageTitle title="Slides Select" />
      <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
          <Widget disableWidgetMenu>
            <SlidesTemplates />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
