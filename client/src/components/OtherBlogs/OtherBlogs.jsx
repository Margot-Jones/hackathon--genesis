import { Typography, Divider, Avatar, Button, Grid } from '@material-ui/core';
import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

export const BLOGSEXAMPLE = [
  {
    avatar:
      'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80',
    name: 'ewoij56',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80',
    name: 'Ifms',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80',
    name: 'Pal99',
  },
];

const useStyles = makeStyles({
  mainContainer: {
    alignItems: 'center',
    marginTop: 20,
    color: 'white',
  },
  nameStatus: {
    marginLeft: 10,
    display: 'flex',
    justifyContent: 'center'
  },
  follow: {
    flex: 1,
    marginRight: 10,
  },

});

const FollowBlog = ({ avatar, name }) => {
  const classes = useStyles();
  const [followed, setFollow] = useState(false);

  return (
    <Grid container className={classes.mainContainer}>
      <Avatar aria-label='avatar' src={avatar} />
      <Grid item direction='column' className={classes.nameStatus}>
        <Typography><b>{name}</b></Typography>
        <p style={{fontWeight: '200', margin: '0'}}>status</p>
      </Grid>
      <Grid container direction='row-reverse' className={classes.follow}>
        <Button
          onClick={() => {
            setFollow(!followed);
          }}
        style={{color: '#B51F60'}}>
          {followed ? 'Follow' : 'Unfollow'}
        </Button>
      </Grid>
    </Grid>
  );
};

export const OtherBlogs = ({ blogs }) => {
  return (
    <div style={{color: 'white'}}>
      <Typography variant='h4'>Look at other blogs</Typography>
      <hr />
      <Divider />
      {blogs.map((blog) => (
        <FollowBlog {...blog} />
      ))}
    </div>
  );
};
