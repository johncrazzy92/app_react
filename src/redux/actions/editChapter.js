import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const editChapterAction = createAsyncThunk(
  "editChapter",
  async ({ id, info, token }) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/chapters/${id}?manga_id=65117d91d875b6549eeb2b41`,
        info,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );

      
      return response.data;
    } catch (error) {
      
      throw error;
    }
  }
);

export default editChapterAction;
