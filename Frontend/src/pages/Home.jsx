import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { setUsers } from '../slices/userSlice';
import { getAllUserDetails, deleteUserDetails } from "../services/operations/userApis";


const Home = () => {

    const { users } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const deleteUserData = async(userId) => { 

        try {

            const result = await deleteUserDetails(userId);

            if (result) { 

                const updatedUser = users.filter((user) => user._id !== result?._id);
                dispatch(setUsers(updatedUser));
            }
        } catch (error) { 

            console.log("Error in deleteUserData : ", error);
        }
    }

    useEffect(() => {

        const fetchAllData = async () => {

            try {

                const result = await getAllUserDetails();
                if (result) {

                    console.log("Result : ", result);
                    dispatch(setUsers(result));

                }

            } catch (error) {

                console.log("Error in fetchAllData : ", error);
            }
        }

        fetchAllData();
    }, [dispatch])
    return (
        <div className="w-full h-screen">
            <div className="pt-4">
                <h1 className="text-center text-3xl font-semibold">User List</h1>
                <div className="text-start pl-3">
                    <NavLink to="/addUser" className="px-4 py-2 rounded-md bg-gray-800 text-white">Add User</NavLink>
                </div>
            </div>
            <div className="mt-4">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.map((user, index) => (
                                <tr key={index} className="bg-base-200">
                                    <th>{index + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{user?.age}</td>
                                    <td>
                                        <div className="flex items-center gap-1">
                                            <NavLink to={`/editUser/${user?._id}`} className="bg-green-400 px-4 py-2 rounded-md">Edit</NavLink>
                                            <NavLink onClick={() => deleteUserData(user?._id)} className="bg-orange-400 px-4 py-2 rounded-md">Delete</NavLink>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home