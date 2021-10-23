import React from 'react';
import { Comment } from './Comment';

import {
  TextField, Button
} from '@material-ui/core';

export const WriteComment = ({ comments }) => {
  return (
      <>
    <TextField id="comment" variant="outlined" multiline={true} fullWidth placeholder='comment here'/>
    <Button onClick={() => {/* send comment*/}}>Send</Button>
    </>
  );
};
