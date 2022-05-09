import React from "react";
import { Grid } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import SlidesDisplay from "../../components/HtmlDownlaod/Covert";

export default function SlidesView() {
  var classes = useStyles();

  return (
    <>
      <PageTitle title="Slides View" />
      <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
          <Widget disableWidgetMenu>
            <SlidesDisplay />
          </Widget>
        </Grid>
        <Grid item xs={12} md={12}>
          <Widget title="Controls" disableWidgetMenu></Widget>
        </Grid>
      </Grid>
    </>
  );
}
