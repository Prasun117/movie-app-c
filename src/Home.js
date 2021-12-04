import React from "react";
import { Grid, Card, CardMedia } from "@material-ui/core";
import MediaImage from "./assests/movie-series.jpg";
import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { SubHeader } from "./SubHeader";
const useStyles = makeStyles({
  root: {
    border: "2px solid",
    cursor: "pointer"
  },
  media: {}
});

export const Home = (props) => {
  const classes = useStyles();
  return (
    <>
      <SubHeader title="Popular Tiles" />
      <div className="Content">
        <Grid container spacing={2}>
          <Grid item xs={8} sm={4} md={3} lg={3}>
            <NavLink className="card-botton-text" to="/movies">
              <Card className={classes.root}>
                <div style={{ position: "relative" }}>
                  <CardMedia
                    className={classes.media}
                    component="img"
                    image={
                      "https://rawcdn.githack.com/Prasun117/movie-app-c/39873c6c17bbf90feea476386f0737ddc818b644/src/assests/movie-series.jpg"
                    }
                    alt="movies"
                  />
                  <div
                    style={{
                      fontSize: "2.25rem",
                      fontWeight: "900",
                      position: "absolute",
                      textAlign: "center",
                      color: "black",
                      top: "40%",
                      left: "50%",
                      transform: "translateX(-50%)"
                    }}
                  >
                    {" "}
                    Movies
                  </div>
                </div>
              </Card>
              <span>Popular Movies</span>
            </NavLink>
          </Grid>
          <Grid item xs={8} sm={4} md={3} lg={3}>
            <NavLink className="card-botton-text" to="/series">
              <Card className={classes.root}>
                <div style={{ position: "relative" }}>
                  <CardMedia
                    className={classes.media}
                    component="img"
                    image={MediaImage}
                    alt="series"
                  />
                  <div
                    style={{
                      fontSize: "2.25rem",
                      fontWeight: "900",
                      position: "absolute",
                      textAlign: "center",
                      color: "black",
                      top: "40%",
                      left: "50%",
                      transform: "translateX(-50%)"
                    }}
                  >
                    Series
                  </div>
                </div>
              </Card>
              <span>Popular Series</span>
            </NavLink>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
