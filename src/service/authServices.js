import {Axios} from "./Axios";

function login(payload){
    return Axios.post(`api/auth/signin`,payload);
}

function timekeeping(id){
    return Axios.get(`api/timekeeping/${id}`);
}

function logout(id){
    return Axios.get(`api/timekeeping/${id}`);
}

export const authServices = {
    login, 
    timekeeping,
    logout
};