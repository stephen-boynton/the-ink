// fetch("/posts")
// .then(res => res.json())
// .then(posts => this.setState({ posts: posts }));

const initialState = {
  posts: []
};

const reducer = function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
