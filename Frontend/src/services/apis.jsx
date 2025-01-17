
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const userEndPoints = {

    ADD_USER_DATA_API: BASE_URL + '/user/addUser',
    EDIT_USER_DATA_API: BASE_URL + '/user/editUser',
    DELETE_USER_DATA_API : BASE_URL + '/user/deleteUser'
}