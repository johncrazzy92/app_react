import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const createComment = createAsyncThunk('createComentario', async (info, { rejectWithValue }) => {
    try {
        const res = await axios.post('https://backendminga.onrender.com/comments', info, {
            headers: {
                Authorization: "Bearer " + info.token
            },
        });

        return { comments: res.data.response };
    } catch (error) {
        return rejectWithValue({ error: error.message });
    }
});

export default createComment;
