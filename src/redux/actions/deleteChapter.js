import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const deleteChapterAction = createAsyncThunk("deleteChapter", async ({ id, token }) => {
  try {
    const response = await axios.delete(
      `https://backendminga.onrender.com/chapters/${id}?manga_id=65117d91d875b6549eeb2b41`,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export default deleteChapterAction;
