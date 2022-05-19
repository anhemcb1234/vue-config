import {Axios} from "./Axios";

function getAddStaff(payload){
    return Axios.post('/api/staff',payload);
}
function delUserById(id){
    return Axios.post(`/api/staff/${id}`);
}
function getAllStaff(){
    return Axios.get(`/api/staff`);
}
export const homeService = {
    getAddStaff,
    delUserById,
    getAllStaff
};