import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
// import userPhoto from "../../assets/img/userPhoto.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  userName: {
    margin: "10px 0",
    fontSize: "20px",
    borderRadius: '20px'
  },

  card: {
    backgroundColor: "#941B0C",
    // position: 'fixed'
  },

  cardContent: {
    color: "#EBEBEB",
  },

  userDesc: {
    fontSize: "13px",
    marginBottom: "10px"
  },
});

const userPhoto = 'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80';

export const USER = {avatar: userPhoto, username: 'someone77', info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dum.'}

export const UserInfo = ({avatar, username, info}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia component="img" src={avatar} height="281" />
        <CardContent className={classes.cardContent}>
          <Typography
            style={{ fontFamily: "Rosarivo" }}
            gutterBottom
            variant="h5"
            component="div"
            align="center"
            className={classes.userName}
          >
            <b>{username}</b>
          </Typography>
          <Typography
            style={{ fontFamily: "Rosarivo" }}
            variant="body2"
            color="text.secondary"
            align="center"
            className={classes.userDesc}
          >
            {info}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
