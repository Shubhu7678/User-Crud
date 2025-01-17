import toast from 'react-hot-toast';
import axios from 'axios';
import { userEndPoints } from '../apis';

const { ADD_USER_DATA_API } = userEndPoints

export const addNewUser = async(data) => { 
        
    let result = [];
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