import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const commentAction = createAsyncThunk('comentario', async (info, { rejectWithValue }) => {
    try {
        const res = await axios.get('http://localhost:8080/comments', {
            params: {
                chapter_id: info.chapter_id,
            },
            headers: {
                Authorization: "Bearer " + info.token,
            }
        });
        return { comments: res.data.response.comments };
    } catch (error) {
        return rejectWithValue({ error: error.message });
    }
});

export default commentAction;
