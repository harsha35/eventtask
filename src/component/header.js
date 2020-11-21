import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  titles: {
    paddingLeft: '30px',
    fontSize: '5px',
    color: 'white'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 250,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} >
              Event Task
          </Typography>
            <Link href="/"><div className={classes.titles}><Typography variant='h6'>SignIn</Typography></div></Link>
            <Link href="/signup"><div className={classes.titles}><Typography variant='h6'>SignUp</Typography></div></Link>
            <Link href="/Form"><div className={classes.titles}><Typography variant='h6'>Form</Typography></div></Link>
            <Link href="/card"><div className={classes.titles}><Typography variant='h6'>Events</Typography></div></Link>
          </Toolbar>
        </AppBar>
      </div>
    </BrowserRouter>

  );
}