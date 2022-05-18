import {Axios} from "./Axios";

function login(){
    return Axios.post('home');
}

export const authServices = {
    login
};