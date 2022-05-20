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

function overtime(id,h){
    return Axios.get(`api/managersession/request_lamthem/${id}/${h}`);
}

function checkout(id){
    return Axios.get(`api/managersession/request_vesom/${id}`);
}

function getTimekeeping(id){
    return Axios.get(`api/timekeeping/getByStaff/${id}`);
}

export const authServices = {
    login, 
    timekeeping,
    logout,
    overtime,
    checkout,
    getTimekeeping
};