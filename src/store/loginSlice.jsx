import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    email: '',
    password: '',
    data: [],
};

const URL = 'https://jsonplaceholder.typicode.com/users';

export const onFinish = createAsyncThunk('/', async () => {
    try {
        const response = await axios.get(URL)
        return await response.data
    } catch (error) {
        console.log(error);
    }
});

export const loginSlice = createSlice({
    name: 'loginForm',
    initialState,
    reducers: {
        changeEmailValue: (state, action) => {
            state.email = action.payload;
        },
        changePasswordValue: (state, action) => {
            state.password = action.payload;
        },
    }, 
    extraReducers: (builder) => {
        builder.addCase(onFinish.fulfilled, (state, action) => {
            state.data = action.payload
            console.log('E-mail:', state.email, 'Password:', state.password);
            console.log('Data:', state.data);
        });
    },
});

export const { changeEmailValue, changePasswordValue } = loginSlice.actions;
export default loginSlice.reducer;