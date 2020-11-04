import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.css';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',

    },
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <h2>SIGN IN</h2>
        <TextField id="username" label="USERNAME" variant="outlined" />
        <TextField id="password" label="PASSWORD" variant="outlined" />
        <Button variant="contained" color="lightseagreen">
          <a href="/beauty-best/dashboard" >LOGIN</a>
        </Button>
        <div className="signuplink">
          <p>Do not have an account? <Button size="small" className={classes.margin}> SIGNUP</Button></p></div>
        <div className="social_app">

        </div>
      </form>
    </div >
  )
}
