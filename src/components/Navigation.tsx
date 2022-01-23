import React from "react";
import classes from "./Navigation.module.css";
import logo from "../assets/images/homejamLogo.png";
import { Typography } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import basket from "../assets/images/basket.png";
import search from "../assets/images/search.png";
import navtag from "../assets/images/navtag.png";
import { useRef } from "react";

// CREATING STYLES USING MUI
const useStyle = makeStyles({
  link: {
    cursor: "pointer",
  },
  textfield: {
    color: "#FFF",
  },
});

const Navigation = () => {
  const style = useStyle();

  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <nav>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img src={logo} width="86px" height="44px" alt="" />
        </div>

        {/* NAVIGATION FOR DESKTOP SCREENS */}
        <div className={classes.navCategory}>
          <img
            className={classes.search}
            width="24px"
            height="24px"
            src={search}
            alt=""
          />
          <input className={classes.input} placeholder="search" />
          <Link className={style.link}>
            <Typography variant="subtitle2" style={{ color: "#FFF" }}>
              Help
            </Typography>
          </Link>
          <Link className={style.link}>
            <Typography variant="subtitle2" style={{ color: "#FFF" }}>
              Account
            </Typography>
          </Link>{" "}
          <span className={classes.basket}>
            <img src={basket} width="32px" height="32px" alt="" />
          </span>
        </div>
        {/* NAVIGATION FOR MOBILE SCREENS */}
        <div className={classes.navCategory2}>
          <div className={classes.inputContainer}>
            <input
              ref={searchInputRef}
              className={classes.input2}
              placeholder=""
            />

            <img
              className={classes.search2}
              onClick={() => {
                searchInputRef.current?.focus();
              }}
              width="32px"
              height="32px"
              src={search}
              alt=""
            />
          </div>

          <span className={classes.basket2}>
            <img src={basket} width="32px" height="32px" alt="" />
          </span>

          <img
            className={classes.navtag}
            width="32px"
            height="32px"
            src={navtag}
            alt=""
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
