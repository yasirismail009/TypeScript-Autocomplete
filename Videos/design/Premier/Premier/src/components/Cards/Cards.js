import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Slides from "../../images/slides.jpg";
import { Link } from "react-router-dom";

export default function TemplatesCards() {
  return (
    <div sx={{ maxWidth: 345 }}>
      <Link to="/app/slidesView">
        {" "}
        <CardActionArea>
          <CardMedia
            className="shadow-lg rounded-lg"
            component="img"
            height="50"
            image={Slides}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ color: "#173371" }}
            >
              <b>Qau Design</b>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </div>
  );
}
