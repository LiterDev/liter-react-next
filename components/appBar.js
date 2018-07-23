import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppDrawer from "./appDrawer";
import { compose } from "recompose";
import { connect } from "react-redux";

//const styles = {
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  drawer: {
    [theme.breakpoints.up("lg")]: {
      width: 250
    }
  }
});

//function ButtonAppBar(props) {
class ButtonAppBar extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerOpen = () => {
    // this.props.dispatch(increment());
    this.setState({ mobileOpen: true });
  };

  handleDrawerClose = () => {
    // this.props.dispatch(toggleAppDrawer());
    this.setState({ mobileOpen: false });
  };
  render() {
    const { classes, count } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Title
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        {/* <AppDrawer /> */}
        <AppDrawer
          className={classes.drawer}
          // disablePermanent={disablePermanent}
          onClose={this.handleDrawerClose}
          onOpen={this.handleDrawerOpen}
          mobileOpen={this.state.mobileOpen}
        />
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

// const mapStateToProps = ({ count }) => ({ count });
export default withStyles(styles)(ButtonAppBar);
// export default compose(
//   withStyles(styles),
//   connect(mapStateToProps)
// )(ButtonAppBar);
//export default connect(mapStateToProps)(Counter)
