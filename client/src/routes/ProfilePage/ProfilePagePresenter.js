import React from 'react';
import Profile from './Profile';

const ProfilePagePresenter = ({ posts, user }) => <>
  <Profile posts={posts} user={user} />
</>

export default ProfilePagePresenter
