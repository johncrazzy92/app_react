import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const updateActive = createAsyncThunk("updateActive", async (id) => {
    const token = localStorage.getItem("token")
    const author = await axios.put(
        `https://backendminga.onrender.com/authors/role/author/${id}`, null,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );


    return author.data;
});

export { updateActive };