export const selectComments = state => state.comments.comments

export const selectIsFetchCommentsPending = state => state.comments.isFetchingPending

export const selectIsFetchCommentsError = state => state.comments.isFetchingError

export const selectIsUpdateCommentPending = state => state.comments.isUpdatingPending

export const selectIsUpdateCommentError = state => state.comments.isRemovePending

export const selectIsRemoveCommentPending = state => state.comments.isRemovePending

export const selectIsRemoveCommentError = state => state.comments.isRemovePending
