
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { addNewUser } from '../../services/operations/userApis';

const UserForm = () => {

    const { handleSubmit, register, formState: { errors } } = useForm();
    const { editUser } = useSelector((state) => state.user);

    const onSubmit = async(data) => { 

        if (editUser) {
            
            console.log("Edit User :", data);
            
        } else { 
            
            console.log("Add User :", data);

            const result = await addNewUser(data);
            if (result) { 
                
                console.log("Result : ", result);
            }
              
        }
    }

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