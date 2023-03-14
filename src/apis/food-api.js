import axios from "../config/axios";

export const getTable = (foodId) => axios.get(`/food/table/${foodId}`);
