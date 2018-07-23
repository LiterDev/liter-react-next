import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

const styles = theme => ({
  paper: {
    width: 250,
    backgroundColor: theme.palette.background.paper
  }
});

function AppDrawer(props) {
  //const { classes } = props;
  const { classes, className, mobileOpen, onClose, onOpen } = props;
  return (
    <div>
      <SwipeableDrawer
        classes={{
          paper: classNames(classes.paper, 'algolia-drawer')
        }}
        variant="temporary"
        open={mobileOpen}
        onOpen={onOpen}
        onClose={onClose}
        ModalProps={{
          keepMounted: true
        }}
      />
    </div>
  );
}

AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppDrawer);
