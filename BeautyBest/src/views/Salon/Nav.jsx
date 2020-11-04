import React, { Component } from 'react'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginLeft: 130,
    alignSelf: 'flex',
    display: 'flex',
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
});
class Nav extends Component {
  render(props) {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <ElevationScroll {...props}>
          <AppBar position="fixed" style={{ background: '#00bcd4' }}>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.backButton}
                color="inherit"

              >
                <span class="material-icons">
                  keyboard_backspace
      </span>
              </IconButton>
              <Typography className={classes.title} variant="h5" noWrap>
                Zara's Salon
      </Typography>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Toolbar />
      </React.Fragment>
    )
  }
}
export default withStyles(useStyles)(Nav)