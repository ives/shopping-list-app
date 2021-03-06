import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

// Icons
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ListIcon from "@material-ui/icons/List";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function AppMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          onClick={handleClick}
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          
            <MenuItem onClick={handleClose} component={ReactRouterLink} to="/shopping-list">
              <ListItemIcon>
                <ShoppingCartIcon fontSize="small" />
              </ListItemIcon>
              Shopping List
            </MenuItem>
            <MenuItem onClick={handleClose} component={ReactRouterLink} to="/build-list">
              <ListItemIcon>
                <AddShoppingCartIcon fontSize="small" />
              </ListItemIcon>
              Build List
            </MenuItem>
            <MenuItem onClick={handleClose} component={ReactRouterLink} to="/manage-ingredients">
              <ListItemIcon>
                <ListIcon fontSize="small" />
              </ListItemIcon>
              Manage Ingredients
            </MenuItem>
            <MenuItem onClick={handleClose} component={ReactRouterLink} to="/manage-recipes">
              <ListItemIcon>
                <SpeakerNotesIcon fontSize="small" />
              </ListItemIcon>
              Manage Recipes
            </MenuItem>
          
        </Menu>
        <Typography variant="h6" className={classes.title} align="center">
          Shopping List Generator
        </Typography>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
  );
}

export default AppMenu;
