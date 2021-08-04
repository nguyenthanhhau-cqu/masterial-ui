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
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.5em",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
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
  drawerIconContainer: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    marginLeft: "auto",
  },
  drawerIcon: {
    width: "50px",
    height: "50px",
  },
  drawer: {
    ...theme.typography.tab,
    backgroundColor: theme.palette.common.blue,
    color: "white",
  },
  drawerIconEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItem: {
    opacity: "0.7",
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: "1",
    },
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

const Header = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false); //set visible
  const [selected, setSelected] = useState(0);

  const options = [
    { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 1 },
    {
      name: "Custom Software Development",
      link: "/custom-software",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: "Mobile App Development",
      link: "/mobile-apps",
      activeIndex: 1,
      selectedIndex: 3,
    },
    {
      name: "Website Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 4,
    },
  ];
  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaHasPopup: anchorEl ? "true" : undefined,
      onMouseOver: (e) => handleClick(e),
    },
    { name: "Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 },
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
    [...routes, ...options].forEach((route) => {
      switch (window.location.pathname) {
        case route.link:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selected) {
              setSelected(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [value, selected]);

  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        className={classes.tabContainer}
        onChange={handleChange}
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaHasPopup}
            className={classes.tab}
            label={route.name}
            onMouseOver={route.onMouseOver}
            component={Link}
            to={route.link}
          />
        ))}
      </Tabs>
      <Button
        variant="contained"
        className={classes.button}
        color="secondary"
        component={Link}
        to="/estimate"
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
        style={{ zIndex: 1302 }}
        keepMounted
      >
        {options.map((option, index) => (
          <MenuItem
            key={`${option}${index}`}
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
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        anchor="left"
        classes={{ paper: classes.drawer }}
      >
        <List>
          <div className={classes.toolbarMargin} />
          {routes.map((route) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              button
              divider
              component={Link}
              to={route.link}
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            selected={value === 5}
            classes={{ root: classes.drawerIconEstimate }}
            divider
            button
            component={Link}
            to="/estimate"
          >
            <ListItemText disableTypography>Free Estimate</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );
  return (
    <Fragment>
      <ElevationScroll>
        <AppBar className={classes.appBar}>
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
            {matches ? drawer : tabs}
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}>Hello World</div>
    </Fragment>
  );
};

export default Header;
