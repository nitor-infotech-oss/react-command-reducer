export const getThread = (state, threadSlug) => ({
  ...state,
  isLoading: true,
  threadSlug,
  posts: [],
});

export const getThreadSuccess = (state, posts) => ({
  ...state,
  isLoading: false,
  posts,
  selectedPost: {},
  selectedPostComments: [],
});

export const getThreadFail = (state, error) => ({
  ...state,
  isLoading: false,
  error,
  posts: [],
});

export const getPost = (state, postDetails) => ({
  ...state,
  isLoading: true,
  threadSlug: postDetails.threadSlug,
  selectedPostId: postDetails.postId,
  selectedPost: null,
  selectedPostComments: [],
});

export const getPostSuccess = (state, postDetails) => {
  const { post, comments } = postDetails;

  return {
    ...state,
    isLoading: false,
    selectedPost: {
      data: post.data.children[0].data,
      comments: comments.data.children,
    },
    selectedPostComments: comments.data.children,
  };
};

export const getPostFail = (state, error) => ({
  ...state,
  isLoading: false,
  error,
  selectedPostId: null,
  selectedPost: {},
});

export const sortComments = (state, sortDetails) => {
  const { sortField, sortOrder } = sortDetails;
  const comments = state.selectedPostComments
    .map(comment => comment)
    .sort((a, b) =>
      sortOrder === 'ASC'
        ? a.data[sortField] > b.data[sortField]
          ? 1
          : b.data[sortField] > a.data[sortField]
          ? -1
          : 0
        : b.data[sortField] > a.data[sortField]
        ? 1
        : a.data[sortField] > b.data[sortField]
        ? -1
        : 0,
    );
  return {
    ...state,
    isLoading: false,
    sortCriteria: sortDetails,
    selectedPostComments: comments,
  };
};

export default {
  getThread,
  getThreadSuccess,
  getThreadFail,
  getPost,
  getPostSuccess,
  getPostFail,
  sortComments,
}