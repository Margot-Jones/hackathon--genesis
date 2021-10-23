import React from 'react';
import { Comment } from './Comment';

import {
  Grid,
} from '@material-ui/core';

export const COMMENTEXAMPLE = {
  author: 'asdd5',
  avatar:
    'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80',
  text: 'hi, there!',
  date: '12.05.2021',
};


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
  return (
    <Grid container spacing={2} direction='column'>
      {comments.map((comment, index) => (
        <Grid item>
          <Comment key={index} {...comment} />
        </Grid>
      ))}
    </Grid>
  );
};
