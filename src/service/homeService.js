import {Axios} from "./Axios";

function getAddStaff(payload){
    return Axios.post('/api/staff',payload);
}
function delUserById(id){
    return Axios.post(`/api/staff/${id}`);
}
function getDetailUser(id){
    return Axios.get(`api/staff/${id}`);
}
export const homeService = {
    getAddStaff,
    delUserById,
    getDetailUser
};