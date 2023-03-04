import axios from "../config/axios";

//promise object -> asynchronous
export const register = (input) => axios.post("/auth/register", input);

export const login = (input) => axios.post("/auth/login", input);
