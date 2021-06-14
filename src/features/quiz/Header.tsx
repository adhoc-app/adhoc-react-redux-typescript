import { Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (PageURL: string) => {
    history.push(PageURL);
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div>
            <Button
              onClick={() => handleMenuClick("/")}
              variant="contained"
              color="secondary"
            >
              Home
            </Button>
          </div>
          <Typography variant="h6" className={classes.title}>
            Ad Hoc App
          </Typography>
          <div>
            <IconButton
              edge="start"
              onClick={handleMenu}
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={() => handleMenuClick("/login")}>
                Login
              </MenuItem>
              <MenuItem onClick={() => handleMenuClick("/quiz")}>
                Start Quiz
              </MenuItem>
              <MenuItem onClick={() => handleMenuClick("/")}>Home</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
