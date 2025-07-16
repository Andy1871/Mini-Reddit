import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk( // automatically gives us three 'action types' which is where we get our extraReducers from.
    // using API here so no need to do this before building the static part of the site.
    'comments/fetchComments',
    async (postId) => {
        return { postId, comments: [] }
    }
)

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        commentsByPostId: {}, // { [postId]: [array of comments] } - fetched comments stored here in an array
        loadingByPostId: {}, // { [postId]: true/false } - while fetching, this becomes true. 
        errorByPostId: {}, // { [postId]: error message or null } - if fetching fails, error is stored here
    },
    reducers: {}, // clearing comments: remove comments when user navigates away, clear comments when opening same post again, reset comment state if app logs out etc
    extraReducers: { // we use extraReducers when we want to tell Redux that when one of these async states are happening, update the state in this way...:
    },       
})