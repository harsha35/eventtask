import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    paddingLeft: '170px',
    paddingRight: '170px',
    margin: theme.spacing(3, 0, 2),
  },
  content: {
    marginBottom: theme.spacing(3),
  },
  textField: {
    width: 185,
  },
  textFields: {
    marginTop: theme.spacing()
  },
  avatar: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(8),
    backgroundColor: theme.palette.secondary.main,
  },
  in: {
    marginBottom: theme.spacing(3),
  },
}));

export default function Form() {

  const classes = useStyles();

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>

          </Avatar>
          <Typography className={classes.in} component="h1" variant="h5">
            Form
        </Typography>

          <Grid container spacing={"2"}>

            <Grid item xs={"12"} >
              <TextField
                name="Event Name"
                variant="outlined"
                required
                fullWidth
                label="Event Name"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Event Type"
                name="Event Type"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Event Location"
                name="Event Location"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                id="Time"
                label="Alarm clock"
                type="time"
                defaultValue="07:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300,
                }}
              />

            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                label="Date"
                type="Date"
                defaultValue="2017-05-24"

                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>



            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Sub-Detail"
                name="SubDetail"
                className={classes.textFields}
              />
            </Grid>

          </Grid>


          <Link href="/card">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
          </Button>
          </Link>

        </div>
      </Container>
    </div>

  );

}