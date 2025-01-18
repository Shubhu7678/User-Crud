
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { addNewUser, updateUserData } from '../../services/operations/userApis';
import { useEffect } from 'react';
import { setUsers } from '../../slices/userSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const UserForm = () => {

    const { handleSubmit, register, formState: { errors },setValue } = useForm();
    const { editUser, user, users } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formChanged = (data) => { 

        if (data?.name !== user?.name || data?.email !== user?.email || data?.age !== user?.age) {

            return true;
        } else { 

            return false;
        }
    }

    const onSubmit = async(data) => { 

        if (editUser) {
            
            console.log("Edit User :", data);

            const isFormChanged = formChanged(data);

            if (isFormChanged) {

                const form = {};

                if (data?.name !== user?.name) {

                    form.name = data?.name;
                }
                if (data?.email !== user?.email) {

                    form.email = data?.email;
                }
                if (data?.age !== user?.age) {

                    form.age = data?.age;
                }

                const result = await updateUserData(user?._id, form);
                if (result) {

                    dispatch(setUsers(users.map((user) => user?._id === result?._id ? result : user)));
                    navigate('/');
                }
            } else { 

                toast.error("No changes made");
            }
            
        } else { 
            
            console.log("Add User :", data);

            const result = await addNewUser(data);
            if (result) { 
                
                dispatch(setUsers([...users, result]));
                navigate('/');
            }
              
        }
    }

    useEffect(() => { 

        if (editUser) { 

            setValue('name', user?.name);
            setValue('email', user?.email);
            setValue('age', user?.age);
        }
    },[editUser, user, setValue])

    return (
        <div className="flex justify-center mt-4" >
            <div className="w-[380px] py-6 px-4 bg-gray-500 rounded-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-2">
                        <label className="text-white" htmlFor="">Name</label>
                        <input
                            type="text"
                            className="px-2 py-2 bg-gray-700 text-white rounded-md w-full"
                            placeholder="Enter your name"
                            name="name"
                            {...register("name", { required: true })}
                        />
                        {errors.name && <p className="text-red-500">Name is required</p>}
                    </div>
                    <div className="mb-2">
                        <label className="text-white" htmlFor="">Email</label>
                        <input
                            type="email"
                            className="px-2 py-2 bg-gray-700 text-white rounded-md w-full"
                            placeholder="Enter your email"
                            name="email"
                            {...register('email', { required: true })}
                        />
                        {errors.email && <p className="text-red-500">Email is required</p>}
                    </div>
                    <div className="mb-4">
                        <label className="text-white" htmlFor="">Age</label>
                        <input
                            type="number"
                            className="px-2 py-2 bg-gray-700 text-white rounded-md w-full"
                            placeholder="Enter your age"
                            name="age"
                            {...register('age', { required: true })}
                        />
                        {errors.age && <p className="text-red-500">Age is required</p>}
                    </div>
                    <div>
                        <button type="submit" className="px-4 py-2 bg-yellow-700 text-white rounded-md" >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserForm