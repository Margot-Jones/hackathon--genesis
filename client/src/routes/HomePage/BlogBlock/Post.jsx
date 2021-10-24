import React from 'react';

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
} from '@material-ui/core';

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

export const UserAvatar = ({ avatar }) => {
  return (
    <Avatar
      style={{ width: 80, height: 80 }}
      aria-label="avatar"
      src={avatar}
    />
  );
};

export const PostBody = ({ title, image, authorData, content, date }) => {
  return (
    <Card style={{flex: 1}}>
      <CardActionArea>
        <CardContent>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" style={{ fontFamily: "Rosarivo" }}>
              <b>{authorData}</b>
            </Typography>
            <Typography
              variant="subtitle2"
              align="right"
              style={{ flex: 1, color: "grey", fontFamily: "Rosarivo" }}
            >
              {date}
            </Typography>
          </div>
        </CardContent>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="post image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: "Rosarivo" }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ fontFamily: "Rosarivo" }}>
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export const Post = ({ post }) => {
  const { title, thumbnailUrl, authorData, content, date, avatar } = post

  return (
    <div style={{ display: 'flex', flexDirection: 'row', margin: '0 auto', flex: 1}}>
      <div style={{ marginRight: 20 }}>
        <Avatar sx={{ bgcolor: 'red' }} aria-label='avatar' src={avatar} />
      </div>
      <PostBody date={date} author={authorData} title={title} image={thumbnailUrl} text={content} />
    </div>
  );
};
