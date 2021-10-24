export const selectPosts = state => state.posts.posts

export const selectIsFetchPostsPending = state => state.comments.isFetchingPending

export const selectIsFetchPostsError = state => state.comments.isFetchingError

export const selectIsUpdatePostPending = state => state.comments.isUpdatingPending

export const selectIsUpdatePostError = state => state.comments.isRemovePending

export const selectIsRemovePostPending = state => state.comments.isRemovePending

export const selectIsRemovePostError = state => state.comments.isRemovePending
