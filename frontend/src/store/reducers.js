

// fetch("/posts")
// .then(res => res.json())
// .then(posts => this.setState({ posts: posts }));

const initialState = {
    posts: []
}


const reducer = function(state = initialState, action) {
    console.log(state)
    switch (action.type) {
        default: 
            return state;
        
        }
    }

export default reducer;






