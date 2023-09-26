import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const getAuthors = createAsyncThunk("getAuthors", async (token) => {
    try {
      const authors = await axios.get("http://localhost:8080/authors/admin", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      return authors.data;
    } catch (error) {
      console.log("error getAuthors", error);
      
    }
  });
  

export {getAuthors} 