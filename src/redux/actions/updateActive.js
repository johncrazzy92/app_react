import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const updateActive = createAsyncThunk("updateActive", async ( id) => {
    const token = localStorage.getItem("token")
    const author = await axios.put(
        `http://localhost:8080/authors/role/author/${id}`,null,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        );
        
        console.log(author);
  return author.data;
});

export { updateActive };