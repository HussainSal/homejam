import React from "react";
import { Typography } from "@material-ui/core";
import classes from "./Home.module.css";
import Navigation from "./Navigation";
import { makeStyles } from "@material-ui/core";
import Calendar from "../assets/icon/Calendar";
import Like from "../assets/icon/Like";

const useStyle = makeStyles({
  mainHeading: {
    textTransform: "capitalize",
  },
  subHeading: {
    opacity: 0.6,
  },
  rating: {
    fontFamily: "Libre Baskerville",
    color: "#FFF",
  },
  label: {
    color: "#FFF",
    opacity: ".5",
  },
});

/*USED FOR CREATING DYNAMIC CIRCLE */
const calendars = [1, 2, 3];

const Home = () => {
  const style = useStyle();

  return (
    <section className={classes.header}>
      <div className={classes.container}>
        {/*NAVIGATION*/}
        <Navigation />

        <div className={classes.subContainer}>
          <div className={classes.mainHeadingBox}>
            <Typography variant="h1" className={style.mainHeading}>
              cari cari
            </Typography>
            <div className={classes.subHeadingBox}>
              <Typography variant="subtitle1" className={style.subHeading}>
                Live from their sofa to yours. Get closer to your favorite
                artists, and never miss out.
              </Typography>
            </div>
          </div>
          {/*CIRCLE CONTAINER */}
          <div className={classes.circleContainer}>
            <div className={classes.circle}>
              <div className={classes.circleContentBox}>
                <div className={classes.logo}>
                  <Like />
                </div>
                <Typography className={style.rating} variant="subtitle1">
                  0
                </Typography>
                <Typography className={style.label} variant="h5">
                  Label
                </Typography>
              </div>
            </div>
            {calendars.map((cur) => {
              return (
                <div key={cur} className={classes.circle}>
                  <div className={classes.circleContentBox}>
                    <div className={classes.logo}>
                      <Calendar />
                    </div>
                    <Typography className={style.rating} variant="subtitle1">
                      0
                    </Typography>
                    <Typography className={style.label} variant="h5">
                      Label
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
