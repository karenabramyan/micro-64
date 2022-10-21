import React from 'react';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Theme } from '@mui/material';
import InfoCard from './InfoCard';
import Info from './types/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'black'
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
}));

export default function InfoList(): JSX.Element {
  const classes = useStyles();

  return (
    <>
    <h1>INFO</h1>
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><InfoCard /></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><InfoCard /></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><InfoCard /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><InfoCard /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><InfoCard /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><InfoCard /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><InfoCard /></Paper>
        </Grid>
      </Grid>
    </div>
    </>
  );
}
