import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { data } from "./data";
import sysend from "sysend";
import { Paper } from "@material-ui/core";

export default function ListofName() {
  const [Pronounce, setProNounce] = useState(0);
  useEffect(() => {
    const handler = (NameVal) => {
      if ((NameVal) => newCartPreviousValue) {
        if (NameVal < data.length) {
          setProNounce(NameVal);
        } else {
          return null;
        }
      } else {
        if (NameVal >= 0) {
          setProNounce(NameVal);
        } else {
          return null;
        }
      }
      let newCartPreviousValue = NameVal;
      // setCart(newCart);
    };
    sysend.on("increment", handler);
    return () => {
      sysend.off("increment", handler);
    };
  }, []);

  return (
    <Box sx={{ width: "100%", maxWidth: 500 }}>
      <Paper className="p-8 text-center">
        {data.length === 0 ? null : (
          <Typography variant="h3" gutterBottom component="div">
            {data[Pronounce].name}
          </Typography>
        )}
      </Paper>
    </Box>
  );
}
