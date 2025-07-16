// handle all logic:
// fetching posts from selected subreddit
// storing them in Redux
// tracking loading and error states
// possibly handling vote updates or filtersimport

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk( // automatically gives us three 'action types' which is where we get our extraReducers from.
    // using API here so no need to do this before building the static part of the site.
    'posts/fetchPosts',
    async (subreddit) => {
        // API logic goes here later
    }
)

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [], 
        isLoading: false, 
        error: null, 
    },

    reducers: {

    }, 
    
    extraReducers: { // we use extraReducers when we want to tell Redux that when one of these async states are happening, update the state in this way...:
    }       
})

export const { setSelectedSubreddit } = postsSlice.actions
export default postsSlice.reducer