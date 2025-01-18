import { useParams } from "react-router-dom"
import UserForm from "../../common/UserForm"
import { getUserDataById } from "../../../services/operations/userApis";
import {useEffect} from 'react'
import { useDispatch } from "react-redux";
import { setEditUser, setUser } from "../../../slices/userSlice";



const EditUser = () => {
  const { userId } = useParams(); 
  const dispatch = useDispatch();
  
  useEffect(() => { 

    const fetchUserData = async () => { 

      try {
            
        const result = await getUserDataById(userId);
        if (result) { 

          // console.log("Result : ", result); 
          dispatch(setEditUser(true))
          dispatch(setUser(result));
        }

      } catch (error) { 

        console.log("Error in fetchUserData : ", error);
      }
    }

    fetchUserData();

  },[userId, dispatch])

  return (
    <div className="w-full h-screen">
          <div className="pt-4 text-center text-3xl font-semibold">
              Edit User
          </div>
          <div>
              <UserForm/>
          </div>
          
    </div>
  )
}

export default EditUser