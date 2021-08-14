import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ButtonArrow from "../ui/ButtonArrow";
import Button from "@material-ui/core/Button";
import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  leanMoreBtn: {
    ...theme.typography.learnMoreBtn,
    fontSize: "0.7em",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1.3em",
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "40em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  EstimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
}));

const CallToAction = ({ setValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      direction={matchSM ? "column" : "row"}
      alignContent={matchSM ? null : "center"}
      className={classes.background}
      justifyContent={matchSM ? "center" : "space-between"}
    >
      <Grid item>
        <Grid container direction="column">
          <Grid
            item
            style={{
              marginLeft: matchSM ? 0 : "5em",
              textAlign: matchSM && "center",
            }}
          >
            <Typography variant="h2">
              Simple Software <br /> Revolution Result
            </Typography>
            <Typography variant="subtitle1" style={{ color: "white" }}>
              Take advantage of the 21st
            </Typography>
            <Button
              className={classes.leanMoreBtn}
              variant="outlined"
              component={Link}
              to="/revolution"
              onClick={() => setValue(2)}
            >
              <span style={{ marginRight: 5 }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ textAlign: matchSM && "center" }}>
        <Button
          className={classes.EstimateButton}
          variant="contained"
          component={Link}
          to="/estimate"
          onClick={() => setValue(5)}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
