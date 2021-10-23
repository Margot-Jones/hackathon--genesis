import React from 'react';
import { Comment } from './Comment';
import { makeStyles } from '@material-ui/core/styles';

import {
  Grid,
} from '@material-ui/core';
import { Blog } from '../Blog';



export const COMMENTEXAMPLE = {
  author: 'asdd5',
  avatar:
    'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80',
  text: 'hi, there!',
  date: '12.05.2021',
};

const useStyles = makeStyles({
  commentStyle: {
    height: 'auto',
    backgroundColor: 'grey',
    margin: '0 auto'
  },
  // adaptivityComment: {
  //   '@media (max-width: 984px)': {
  //     marginBottom: '500px'
  //   }
  // }
});

export const COMMENTSEXAMPLE = {
  comments: [
    COMMENTEXAMPLE,
    COMMENTEXAMPLE,
    {
      ...COMMENTEXAMPLE,
      author: 'abc',
      text: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ...',
    },
  ],
};

export const CommentPage = ({ comments }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} direction='column' md={9} className={classes.commentStyle}>
      <Blog />
      {comments.map((comment, index) => (
        <Grid item className={classes.adaptivityComment}>
          <Comment key={index} {...comment} />
        </Grid>
      ))}
    </Grid>
  );
};
