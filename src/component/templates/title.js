import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = {
  root: {
    marginTop: 30,
    width: '100%',

  },
};

function Title(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="accent">
        <Toolbar>
          <Typography type="title" color="inherit">
            {props.titlename}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Title.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Title);