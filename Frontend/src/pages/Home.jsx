import { NavLink } from "react-router-dom"


const Home = () => {
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
                        {/* head */}
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
                            {/* row 1 */}
                            <tr className="bg-base-200">
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td>
                                    <div className="flex items-center gap-1">
                                        <NavLink className="bg-green-400 px-4 py-2 rounded-md">Edit</NavLink>
                                        <NavLink className="bg-orange-400 px-4 py-2 rounded-md">Delete</NavLink>
                                    </div>
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home