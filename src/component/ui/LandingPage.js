import React, { Fragment } from "react";
import Lottie from "react-lottie";
import animationData from "../../animations/landinganimation/data";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ButtonArrow from "../ui/ButtonArrow";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import mobileAppIcon from "../../assets/mobileIcon.svg";
import websiteIcon from "../../assets/websiteIcon.svg";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import revolutionBackground from "../../assets/repeatingBackground.svg";
import aboutUsBackground from "../../assets/infoBackground.svg";
const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  buttonContainer: {
    margin: "1em",
  },
  EstimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  LeanMoreButton: {
    ...theme.typography.learnMoreBtn,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  mainContainer: {
    marginTop: "2em",
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  leanMoreBtn: {
    ...theme.typography.learnMoreBtn,
    fontSize: "0.7em",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1.3em",
    },
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  customItem: {
    marginLeft: "5em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      textAlign: "center",
    },
  },
  customItem2: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  customContainer: {
    marginTop: "12em",
    padding: 24,
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  },
  aboutUsBackground: {
    backgroundImage: `url(${aboutUsBackground})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "5em",
    [theme.breakpoints.down("sm")]: {
      padding: "8em 0",
      borderRadius: 0,
    },
  },
  carItem: {
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

const LandingPage = () => {
  const theme = useTheme();
  const classes = useStyles();
  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Fragment>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Grid item sm className={classes.heroTextContainer}>
              <Typography align="center" variant="h2">
                Bring West Cost Technology <br />
                to the Midwest
              </Typography>
              <Grid
                container
                justify="center"
                className={classes.buttonContainer}
              >
                <Grid item>
                  <Button
                    className={classes.EstimateButton}
                    variant="contained"
                  >
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button className={classes.LeanMoreButton} variant="outlined">
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid sm item className={classes.animation}>
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </Grid>
          </Grid>
        </Grid>
        {/* Customer Software */}
        <Grid item className={classes.customContainer}>
          <Grid container direction="row" justify={matchSM && "center"}>
            <Grid item className={classes.customItem}>
              <Typography variant="h4">Custom Software Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Save Energy, save money, save time
              </Typography>
              <Typography variant="subtitle1">
                Complete digital solutions, from investigation to{" "}
                <span className={classes.specialText}>celebrations</span>
              </Typography>
              <Button className={classes.leanMoreBtn} variant="outlined">
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img
                className={classes.icon}
                src={customSoftwareIcon}
                alt="Software icon"
              />
            </Grid>
          </Grid>
        </Grid>
        {/* Mobile development */}
        <Grid item className={classes.customContainer}>
          <Grid
            container
            direction="row"
            justify={matchSM ? "center" : "flex-end"}
          >
            <Grid item className={classes.customItem2}>
              <Typography variant="h4">Android/IOS app development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Extend functionality. Extend Access. Increase Engagement
              </Typography>
              <Typography variant="subtitle1">
                Integrate your web experience or create a standalone application{" "}
                {matchSM ? null : <br />}
                app with either mobile platform
              </Typography>
              <Button className={classes.leanMoreBtn} variant="outlined">
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item style={{ marginRight: matchSM ? 0 : "5em" }}>
              <img
                className={classes.icon}
                src={mobileAppIcon}
                alt="Mobile icon"
              />
            </Grid>
          </Grid>
        </Grid>
        {/* Website Development */}
        <Grid item className={classes.customContainer}>
          <Grid container direction="row" justify={matchSM && "center"}>
            <Grid item className={classes.customItem}>
              <Typography variant="h4">Website Development </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Reach more. Discover more. Sell more
              </Typography>
              <Typography variant="subtitle1">
                Optimized for Search Engines, built for speed
              </Typography>
              <Button className={classes.leanMoreBtn} variant="outlined">
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img
                className={classes.icon}
                src={websiteIcon}
                alt="Software icon"
              />
            </Grid>
          </Grid>
        </Grid>
        {/* The revolution*/}
        <Grid item style={{ marginTop: "12em" }}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ height: "45em" }}
          >
            <div className={classes.revolutionBackground} />
            <Grid item className={classes.carItem}>
              <Card className={classes.revolutionCard}>
                <CardContent style={{ textAlign: "center" }}>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is
                    recipe for a revolution
                  </Typography>
                  <Button className={classes.leanMoreBtn} variant="outlined">
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        {/* The About us section*/}
        <Grid item>
          <Grid
            container
            direction="row"
            style={{ height: "45em" }}
            alignItems="center"
          >
            <div className={classes.aboutUsBackground} />
            <Grid
              container
              item
              style={{
                position: "absolute",
                textAlign: matchXS ? "center" : "inherit",
              }}
              direction={matchXS ? "column" : "row"}
            >
              <Grid
                item
                sm
                style={{ marginLeft: matchXS ? 0 : matchSM ? "2em" : "5em" }}
              >
                <Grid container direction="column">
                  <Grid item>
                    <Typography variant="h2" style={{ color: "white" }}>
                      About Us
                    </Typography>
                    <Typography variant="subtitle1" style={{ color: "white" }}>
                      Let's get personal
                    </Typography>
                    <Button
                      className={classes.leanMoreBtn}
                      variant="outlined"
                      style={{
                        color: "white",
                        borderColor: "white",
                        marginBottom: "10em",
                      }}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow width={15} height={15} fill="white" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                sm
                style={{
                  marginRight: matchXS ? 0 : matchSM ? "2em" : "5em",
                  textAlign: matchXS ? "center" : "right",
                }}
              >
                <Grid container direction="column">
                  <Grid item>
                    <Typography variant="h2" style={{ color: "white" }}>
                      Contact Us
                    </Typography>
                    <Typography variant="subtitle1" style={{ color: "white" }}>
                      Say hello!
                    </Typography>
                    <Button
                      className={classes.leanMoreBtn}
                      variant="outlined"
                      style={{ color: "white", borderColor: "white" }}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow width={15} height={15} fill="white" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default LandingPage;
