import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import footerAdornment from "../../assets/Footer Adornment.svg";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "24em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
    paddingLeft: "17em",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0,75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  iconImg: {
    height: "2em",
    width: "2em",
    [theme.breakpoints.down("xs")]: {
      height: "1em",
      width: "1em",
    },
  },
  iconContainer: {
    position: "absolute",
    marginTop: "-4em",
    right: "2em",
    [theme.breakpoints.down("xs")]: {
      right: "1em",
    },
  },
}));

const Footer = ({ setValue, setSelected }) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          className={classes.mainContainer}
          justifyContent="center"
        >
          <Grid item className={classes.gridItem}>
            <Grid container>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/"
                onClick={() => setValue(0)}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/services"
                onClick={() => {
                  setValue(1);
                  setSelected(0);
                }}
              >
                Services
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/custom-software"
                onClick={() => {
                  setValue(1);
                  setSelected(1);
                }}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/mobile-apps"
                onClick={() => {
                  setValue(1);
                  setSelected(2);
                }}
              >
                Mobile App Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/websites"
                onClick={() => {
                  setValue(1);
                  setSelected(3);
                }}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                onClick={() => setValue(2)}
                item
                className={classes.link}
                component={Link}
                to="/revolution"
              >
                The Revolution
              </Grid>
              <Grid
                onClick={() => setValue(2)}
                item
                className={classes.link}
                component={Link}
                to="/revolution"
              >
                Vision
              </Grid>
              <Grid
                onClick={() => setValue(2)}
                item
                className={classes.link}
                component={Link}
                to="/revolution"
              >
                Technology
              </Grid>
              <Grid
                onClick={() => setValue(2)}
                item
                className={classes.link}
                component={Link}
                to="/revolution"
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                onClick={() => setValue(3)}
                item
                className={classes.link}
                component={Link}
                to="/about"
              >
                About Us
              </Grid>
              <Grid
                onClick={() => setValue(3)}
                item
                className={classes.link}
                component={Link}
                to="/about"
              >
                History
              </Grid>
              <Grid
                onClick={() => setValue(3)}
                item
                className={classes.link}
                component={Link}
                to="/about"
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2}>
              <Grid
                onClick={() => setValue(4)}
                item
                className={classes.link}
                component={Link}
                to="/contact"
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt="black decorative slash"
        src={footerAdornment}
        className={classes.adornment}
      />
      <Grid
        container
        justifyContent="flex-end"
        className={classes.iconContainer}
        spacing={2}
      >
        <Grid
          item
          component={"a"}
          href="http://facebook.com/andrewhau304"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className={classes.iconImg} src={facebook} alt="facebook icon" />
        </Grid>
        <Grid
          item
          component={"a"}
          href="http://facebook.com/andrewhau304"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className={classes.iconImg} src={twitter} alt="twitter icon" />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com/hau3042000/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className={classes.iconImg}
            src={instagram}
            alt="instagram icon"
          />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
