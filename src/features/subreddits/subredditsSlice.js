// should manage:
// array of subreddits
// isLoading 
// error
// selectedSubreddit

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchSubreddits = createAsyncThunk (
    'subreddits/fetchSubreddits',
    async () => {
        // API logic here
    }
)

export const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        isLoading: false,
        error: null, 
        selectedSubreddit: 'popular'
    },

    reducers: {
        setSelectedSubreddit: (state, action) => {
            state.selectedSubreddit = action.payload
        }
    },

    extraReducers: {

    }
})

export const { setSelectedSubreddit } = subredditsSlice.actions
export default subredditsSlice.reducer