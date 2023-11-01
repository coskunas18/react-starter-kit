import {post , get, postJSON} from "./request.js";

export const getUsers = () => get('/users')