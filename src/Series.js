import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Grid, makeStyles, Card, CardMedia } from "@material-ui/core";

import { getData } from "./getData";
import { SubHeader } from "./SubHeader";
const useStyles = makeStyles({
  root: {
    border: "2px solid",
    cursor: "pointer"
  },
  media: {}
});
export const Series = (props) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const data = useSelector((state) => state.data);
  let seriesData = data.filter(
    (item) =>
      item.programType.toLowerCase() === "series" && item.releaseYear >= 2010
  );
  const seriesDataSort = (movieData) => {
    return seriesData.sort((a, b) => {
      let titlea = a.title.toLowerCase();
      let titleb = b.title.toLowerCase();
      if (titlea < titleb) {
        return -1;
      }
      if (titlea > titleb) {
        return 1;
      }

      return 0;
    });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (data.length === 0 || data === undefined) {
      getData(dispatch, setIsLoading, setError);
    }
  }, []);
  return (
    <>
      <SubHeader title="Popular Series" />
      {isLoading && <div>loading.....</div>}
      {error && <div>error occured during data fetch !</div>}
      <div className="Content">
        <Grid container spacing={2}>
          {!isLoading &&
            !error &&
            seriesDataSort(seriesData)?.map((item, index) => (
              <Grid key={index} item xs={8} sm={4} md={3} lg={3}>
                <Card className={classes.root}>
                  <div style={{ position: "relative" }}>
                    <CardMedia
                      className={classes.media}
                      component="img"
                      image={item.images["Poster Art"].url}
                      alt={item.title}
                    />
                  </div>
                </Card>
                <span>{item.title}</span>
              </Grid>
            ))}
        </Grid>
      </div>
    </>
  );
};
