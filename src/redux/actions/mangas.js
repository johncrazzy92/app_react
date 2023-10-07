import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const api = "https://backendminga.onrender.com/mangas";
const token = localStorage.getItem("token");
const autorization = { headers: { Authorization: `Bearer ${token}` } };

const mymangas = createAsyncThunk("MYMANGAS", async () => {

    try {
        const response = await axios.get(`${api}/me`, autorization);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

const deleteManga = createAsyncThunk("DELETEMANGA", async (id) => {
    console.log("DETELE MANGA", id)
    try {
        const response = await axios.delete(`${api}/${id}`, autorization);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

const updateManga = createAsyncThunk("UPDATEMANGA", async (manga) => {
    console.log("UPDATE MANGA", manga)
    try {
        const id = manga.id;
        delete manga.id;
        const response = await axios.put(`${api}/${id}`, manga, autorization);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

const action = { mymangas, deleteManga, updateManga };
export default action;
