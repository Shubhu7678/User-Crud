
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const userEndPoints = {

    ADD_USER_DATA_API: BASE_URL + '/api/v1/user/addUser',
    GET_ALL_USER_DETAILS_API: BASE_URL + '/api/v1/user/getAllUserDetails',
    GET_USER_DATA_BY_ID_API: BASE_URL + '/api/v1/user/getUserDataById',
    UPDATE_USER_DATA_API: BASE_URL + '/api/v1/user/updateUser',
    DELETE_USER_DATA_API : BASE_URL + '/api/v1/user/deleteUserData'
}