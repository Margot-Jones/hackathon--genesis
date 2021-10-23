import React, { useState } from 'react';

import { Button, TextField, Grid } from '@material-ui/core';

export const POSTEXAMPLE = {
  date: '23.10.2021',
  author: 'tentacion1999',
  avatar:
    'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80',
  title: 'Lizard',
  image:
    'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80',
  text: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
};

export const CreatePost = () => {
  const [img, setImg] = useState(null);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  return (
    <form>
      <Grid container direction='column' spacing={1}>
          <Grid item>
        <TextField
          id='imgurl'
          label='Post image'
          placeholder='url'
          type='url'
          variant='outlined'
          fullWidth
          value={img}
          onChange={(e) => {
            setImg(e.target.value);
          }}
        />
        </Grid>
        <Grid item>
        <TextField
          id='title'
          label='Title'
          variant='outlined'
          fullWidth
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        </Grid>
        <Grid item>
        <TextField
          id='body'
          label='Description'
          variant='outlined'
          fullWidth
          multiline={true}
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        </Grid>
        <Button onClick={() => {console.log({img: img, title:title, body:body})}}>Create</Button>
      </Grid>
    </form>
  );
};
