import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
  Grid,
} from '@material-ui/core';

export const COMMENTEXAMPLE = {
  author: 'asdd5',
  avatar:
    'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80',
  text: 'hi, there!',
  date: '12.05.2021',
};

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  card: {
    flex: 1,
  },
  authorDate: {
    alignItems: 'center',
  },
  date: {
    // flex: 1,
    color: 'grey',
  },
});

export const Comment = ({ author, avatar, text, date }) => {
  const classes = useStyles();
  const myName = 'abc'; // from localStorage
  const authorComponent = <Typography variant='h6'>{author}</Typography>;
  const dateComponent = (
    <Typography variant='subtitle2' align='right' className={classes.date}>
      {date}
    </Typography>
  );

  return (
    <Grid container direction={author === myName ? 'row-reverse' : 'row'}>
      <Grid item className={classes.avatar}>
        <Avatar className={classes.avatar} aria-label='avatar' src={avatar} />
      </Grid>
      <Grid item className={classes.card}>
        <Card>
          <CardContent>
            <Grid container className={classes.authorDate}>
              <Grid container item alignItems='flex-start' xs={6}>
                {author !== myName ? authorComponent : dateComponent}
              </Grid>
              <Grid container item justifyContent='flex-end' xs={6}>
                {author === myName ? authorComponent : dateComponent}
              </Grid>
            </Grid>
            <Typography variant='body2'>{text}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
