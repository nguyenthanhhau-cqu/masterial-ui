import React, { Fragment, useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import logo from "../../assets/logo.svg";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar, //Create a little space under the appBar so content can be push under the appBar
    marginBottom: "3em",
  },
  logo: {
    height: "8em",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    fontSize: "1rem",
    minWidth: "10px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
  logoButton: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: "0.7",
    "&:hover": {
      opacity: "1",
    },
  },
}));

const Header = () => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false); //set visible
  const [selected, setSelected] = useState(0);

  const options = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/custom-software" },
    { name: "Mobile App Development", link: "/mobile-apps" },
    { name: "Website Development", link: "/websites" },
  ];

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };
  const handleItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelected(i);
  };

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        setValue(0);
        break;
      case "/services":
        setValue(1);
        setSelected(0);
        break;
      case "/custom-software":
        setValue(1);
        setSelected(1);
        break;
      case "/mobile-apps":
        setValue(1);
        setSelected(2);
        break;
      case "/websites":
        setValue(1);
        setSelected(3);
        break;
      case "/revolution":
        setValue(2);
        break;
      case "/about":
        setValue(3);
        break;
      case "contact":
        setValue(4);
        break;
      default:
        break;
    }
  }, [value]);

  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar>
          <ToolBar disableGutters>
            <Button
              className={classes.logoButton}
              component={Link}
              to="/"
              onClick={() => setValue(0)}
              disableRipple
            >
              <img
                alt="Company logo"
                src={logo}
                className={classes.logo}
                component={Link}
                to="/"
              />
            </Button>
            <Tabs
              value={value}
              className={classes.tabContainer}
              onChange={handleChange}
            >
              <Tab
                className={classes.tab}
                label="Home"
                component={Link}
                to="/"
              />
              <Tab
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                className={classes.tab}
                label="Services"
                onMouseOver={(e) => handleClick(e)}
                component={Link}
                to="/services"
              />
              <Tab
                className={classes.tab}
                label="The revolution"
                component={Link}
                to="/revolution"
              />
              <Tab
                className={classes.tab}
                label="About Us"
                component={Link}
                to="/about"
              />
              <Tab
                className={classes.tab}
                label="Contact Us"
                component={Link}
                to="/contact"
              />
            </Tabs>
            <Button
              variant="contained"
              className={classes.button}
              color="secondary"
              component={Link}
              to="/"
            >
              Free estimate
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              classes={{ paper: classes.menu }}
              elevation={0}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  onClick={(e) => {
                    handleClose();
                    setValue(1);
                    handleItemClick(e, index);
                  }}
                  classes={{ root: classes.menuItem }}
                  component={Link}
                  to={option.link}
                  selected={index === selected && value === 1}
                >
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}>Hello World</div>
    </Fragment>
  );
};

export default Header;
