import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    color: "grey",
    position: "relative",
    right: "90px",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  notifications: {
    color: "grey",
    position: "relative",
    right: "115px"
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

export default function HomeBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <Avatar
          alt="Remy Sharp"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/20180602_FIFA_Friendly_Match_Austria_vs._Germany_Mesut_%C3%96zil_850_0704.jpg"
        />
      </MenuItem>
      <MenuItem>
        <Link to="./New-story" style={{ textDecoration: "none" }}>
          New Story
        </Link>
      </MenuItem>
      <MenuItem>Stories</MenuItem>
      <MenuItem>Series</MenuItem>
      <MenuItem>
        <Link to="./Stats" style={{ textDecoration: "none" }}>
          Stats
        </Link>
      </MenuItem>
      <MenuItem>Medium Partner Program</MenuItem>
      <MenuItem>
        <Link to="./Bookmark" style={{ textDecoration: "none" }}>
          Bookmark
        </Link>
      </MenuItem>
      <MenuItem>Publications</MenuItem>
      <MenuItem>Costumes your interests</MenuItem>
      <MenuItem>
        <Link to="./Story" style={{ textDecoration: "none" }}>
          Story
        </Link>
      </MenuItem>
      <MenuItem>Settings</MenuItem>
      <MenuItem>Help</MenuItem>
      <MenuItem>Sign Out</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#ffffff",
          boxShadow: "none"
        }}
      >
        <Toolbar>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Typography
              className={classes.title}
              variant="h6"
              noWrap
              style={{
                color: "#000000",
                fontFamily: "Verdana",
                fontSize: "14px",
                position: "relative",
                left: "130px",
                textDecoration: "none",
                display: "flex",
                flexDirection: "row",
                marginTop: "13px"
              }}
            >
              <Link to="/Home">
                <img
                  src="https://cdn.dribbble.com/users/314298/screenshots/3796877/medium-dribbble.png"
                  style={{
                    width: "38px",
                    height: "35px",
                    marginRight: "10px"
                  }}
                />
              </Link>
              <p>Draft</p>
            </Typography>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}></div>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label="show 4 new mails"
              color="inherit"
              className={classes.notifications}
              style={{ position: "relative", right: "120px" }}
            >
              <div id="Publish">Publish</div>
            </IconButton>
            <IconButton
              aria-label="show 4 new mails"
              color="inherit"
              className={classes.notifications}
            >
              <img
                src="https://cdn0.iconfinder.com/data/icons/audio-video-multimedia-music-cinema-vol-6/70/Untitled-3-39-512.png"
                style={{ width: "20px" }}
              ></img>
            </IconButton>
            <IconButton
              aria-label="show 17 new notifications"
              color="inherit"
              className={classes.notifications}
            >
              <NotificationsNoneIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              style={{ position: "relative", right: "120px" }}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/20180602_FIFA_Friendly_Match_Austria_vs._Germany_Mesut_%C3%96zil_850_0704.jpg"
              />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}></div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";

// export default function NewStoryBar() {
//   return (
//     <div class="New-story-bar">
//       <div id="New-story-bar-1">
//         <div id="New-story-bar-2">
//           <Link to="../Home">
//             <img src="https://cdn.dribbble.com/users/314298/screenshots/3796877/medium-dribbble.png" />
//           </Link>
//           <p>Draft</p>
//         </div>
//         <div id="New-story-bar-3">
//           <div id="Publish">Publish</div>
//           <img
//             src="https://icon-library.net/images/icon-other/icon-other-26.jpg"
//             id="other"
//           ></img>
//           <img
//             src="https://cdn3.iconfinder.com/data/icons/line-icons-medium-version/64/bell-512.png"
//             id="bell"
//           ></img>
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/a/a7/20180602_FIFA_Friendly_Match_Austria_vs._Germany_Mesut_%C3%96zil_850_0704.jpg"
//             id="account"
//           ></img>
//         </div>
//       </div>
//     </div>
//   );
// }
