import React from "react";
import classes from "./Main.module.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import artistData from "../assets/data/artist";
import users from "../assets/data/user";
import ticket from "../assets/images/ticket.png";
import ticket2 from "../assets/images/ticket2.png";
import rightarrow from "../assets/images/rightArrow.png";

/*MUI STYLES */
const useStyle = makeStyles({
  viewAll: {
    fontSize: "16px",
    lineHeight: "24px",
  },
  categoryText: {
    fontSize: "12px",
    lineHeight: "14px",
    color: "#682F26",
  },
  moreInfo: {
    color: "#0259EB",
    fontSize: "16px",
    lineHeight: "32px",
  },
  address: {
    textTransform: "uppercase",
  },
  name: {
    textTransform: "capitalize",
  },
});

const Main = () => {
  const style = useStyle();

  return (
    <section>
      <div className={classes.container}>
        <div className={classes.subContainer}>
          <div className={classes.heading}>
            <Typography
              className={classes.showsDetailHeading}
              variant="h2"
              color="primary"
            >
              Upcoming Shows
            </Typography>
            <Typography
              variant="body1"
              color="secondary"
              style={{ cursor: "pointer" }}
              className={`${style.viewAll} ${classes.viewAll}`}
            >
              View All
            </Typography>
          </div>
          {/*CARD*/}
          <div className={classes.cardBox}>
            {artistData.map((cur) => {
              return (
                <div key={cur.name} className={classes.innerCardBox}>
                  <div className={classes.card}>
                    <div className={classes.innerContainer}>
                      <div className={classes.imageBox}>
                        <img
                          src={cur.image}
                          width="268px"
                          height="230px"
                          alt=""
                        />
                      </div>
                      <div className={classes.textBox}>
                        <div className={classes.category}>
                          <Typography
                            variant="body1"
                            className={style.categoryText}
                          >
                            {cur.category}
                          </Typography>
                        </div>
                        <Typography variant="h3" color="primary">
                          {cur.name}
                        </Typography>
                        <div className={classes.moreInfo}>
                          <div className={classes.moreInfoText}>
                            <Typography className={style.moreInfo}>
                              More Info{" "}
                            </Typography>
                            <img src={rightarrow} alt="" />
                          </div>
                          <div className={classes.smallCardBox}>
                            <div className={classes.line} />

                            <div
                              onClick={() => {}}
                              className={classes.ticketBox}
                            >
                              <img
                                className={`${classes.ticket1} `}
                                src={ticket}
                                width="32px"
                                height="36px"
                                alt=""
                              />

                              <img
                                className={`${classes.ticket2} `}
                                src={ticket2}
                                width="32px"
                                height="36px"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className={classes.backCover} />
                  </div>
                </div>
              );
            })}
          </div>
          {/*REVIEW SECTION*/}
          <div className={classes.heading}>
            <Typography
              className={classes.showsDetailHeading}
              variant="h2"
              color="primary"
            >
              Reviews
            </Typography>
          </div>
          {/*REVIEW CARDS */}
          <div className={classes.cardbox2}>
            {users.map((cur) => {
              return (
                <div key={cur.name} className={classes.card2}>
                  <div className={classes.innerContainer2}>
                    <div className={classes.userInfoBox}>
                      <div className={classes.userImage}>
                        <img
                          width="48px"
                          height="48px"
                          src={cur.image}
                          alt=""
                        />
                      </div>
                      <div className={classes.userInfo}>
                        <Typography
                          className={style.name}
                          variant="h4"
                          color="primary"
                        >
                          {cur.name}
                        </Typography>
                        <div className={classes.userState}>
                          <div className={classes.stateFlag}>
                            <img
                              width="24px"
                              height="24px"
                              src={cur.flag}
                              alt=""
                            />
                          </div>
                          <Typography
                            className={style.address}
                            variant="body1"
                            color="secondary"
                          >
                            {cur.address}
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <div className={classes.userDescription}>
                      <Typography color="primary" variant="body2">
                        {cur.description}
                      </Typography>
                    </div>
                  </div>
                  <span className={classes.backCover2} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
