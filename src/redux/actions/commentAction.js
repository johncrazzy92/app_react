import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const commentAction = createAsyncThunk('comentario', async (info, { rejectWithValue }) => {
    try {
        const { chapter_id, page, token } = info; 
        const res = await axios.get('http://localhost:8080/comments', {
            params: {
                chapter_id,
                page, 
            },
            headers: {
                Authorization: "Bearer " + token,
            }
        });
        return { comments: res.data.response.comments, totalPages: res.data.response.totalPages };
    } catch (error) {
        return rejectWithValue({ error: error.message });
    }
});

export default commentAction;
