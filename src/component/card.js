import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(theme => ({
  b: {
    fontWeight: 'bold',
    fontSize: '20px'
  },
  table: {
    minWidth: 700
  },
  root: {
    width: '1110px',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2.3),
    overflowX: 'auto',
  },
  shift: {
    marginLeft: theme.spacing(23),
    width: '1150px',
    marginTop: theme.spacing(20)
  },
  lists: {
    fontWeight: 'bold',
    fontSize: '25px',
    textAlign: 'center'
  },
  shifts: {
    marginTop: theme.spacing(0.5),
    backgroundColor: '#E0E0E0'
  }
}))

const styles = theme => ({
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Business Mettings','Formal','Delhi','12:00 PM','22-5-2020'),
  createData('International Conferences','Formal','Mumbai','9:00 AM','2-6-2020'),
  createData('Trades','Informal','Banglore','10:00 AM','19-7-2020'),
  createData('Seminars','Informal','Jaipur','2:00 PM','17-8-2020'),
  createData('Conferences','Formal','Pune','8:00 AM','1-9-2020'),
];

function Cards(props) {

  const classess = useStyles();

  return (
    <Card className={classess.shift}>
      <Card className={classess.shifts}>
        <CardContent className={classess.lists}>Event List</CardContent>
      </Card>
      <Paper className={classess.root}>
        <Table className={classess.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classess.b}>Event Name</TableCell>
              <TableCell className={classess.b} align="left">Event Type</TableCell>
              <TableCell className={classess.b} align="left">Event Location</TableCell>
              <TableCell className={classess.b} align="left">Time</TableCell>
              <TableCell className={classess.b} align="left">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.calories}</TableCell>
                <TableCell align="left">{row.fat}</TableCell>
                <TableCell align="left">{row.carbs}</TableCell>
                <TableCell align="left">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Card>
  );
}

Cards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cards);