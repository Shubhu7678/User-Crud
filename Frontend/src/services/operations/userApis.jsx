import toast from 'react-hot-toast';
import axios from 'axios';
import { userEndPoints } from '../apis';

const { ADD_USER_DATA_API,
    GET_ALL_USER_DETAILS_API,
    GET_USER_DATA_BY_ID_API,
    DELETE_USER_DATA_API,
    UPDATE_USER_DATA_API
} = userEndPoints

export const addNewUser = async(data) => { 
        
    let result = [];
    console.log(ADD_USER_DATA_API);
    const toastId = toast.loading('Loading...');
    try {
          
        const response = await axios.post(ADD_USER_DATA_API, data);
        if (!response.data.success) { 

            throw new Error(response.data.message);
        }
       
        result = response.data.data;
        toast.success(response.data.message);
    } catch (error) { 

        console.log("Error in addNewUser : ", error);
        toast.error(error.response.data.message);
    }

    toast.dismiss(toastId);
    return result;
}

export const getAllUserDetails = async() => { 

    let result = [];
    const toastId = toast.loading('Loading...');
    try {
         
        const response = await axios.get(GET_ALL_USER_DETAILS_API);

        if (!response.data.success) { 

            throw new Error(response.data.message);
        }

        result = response.data.data;

    } catch (error) { 

        console.log("Error occured in getAllUserDetails : ", error);
        toast.error(error.response.data.message);
    }

    toast.dismiss(toastId);
    return result;

}

export const getUserDataById = async (userId) => { 

    let result = [];
    const toastId = toast.loading('Loading...');
    try {
          
        const response = await axios.get(GET_USER_DATA_BY_ID_API + `/${userId}`)

        if (!response.data.success) { 

            throw new Error(response.data.message);
        }

        result = response.data.data;

    } catch (error) { 

        console.log("Error occured in getUserDataById : ", error);
    }

    toast.dismiss(toastId);
    return result;
}

export const updateUserData = async (userId, data) => { 

    let result = [];
    const toastId = toast.loading('Loading...');

    try {

        const response = await axios.put(UPDATE_USER_DATA_API + `/${userId}`, data);

        if (!response.data.success) { 

            throw new Error(response.data.message);
        }

        result = response.data.data;
        toast.success(response.data.message);

    } catch (error) { 

        console.log("Error occured in updateUserData : ", error);
        toast.error(error.response.data.message);

    }

    toast.dismiss(toastId);
    return result;
}

export const deleteUserDetails = async (userId) => { 

    let result = [];
    const toastId = toast.loading('Loading...');
    try {
             
        const response = await axios.delete(DELETE_USER_DATA_API +`/${userId}`);
        
        if (!response.data.success) { 

            throw new Error(response.data.message);
        }

        result = response.data.data;
        toast.success(response.data.message);

    } catch (error) { 

        console.log("Error occured in deleteUserDetails : ", error);
    }

    toast.dismiss(toastId);
    return result;
}