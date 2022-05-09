import React from "react";
import { Grid } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import UploadsCsv from "../../components/Cards/Files";

export default function UploadCsv() {
  var classes = useStyles();

  return (
    <>
      <PageTitle title="Uploads CSV" />
      <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
          <Widget disableWidgetMenu>
            <UploadsCsv />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
