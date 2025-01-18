import User from '../models/user.js';

export const addNewUser = async (req,res) => { 

    try {
          
        const { name, email, age } = req.body;

        if (!name || !email || !age) { 

            return res.status(401).json({

                success: false,
                message : "All fields are required",
            })
        }

        const newUser = await User.create(
            {
                name: name,
                email: email,
                age: age,
            }
        )

        return res.status(200).json({

            success: true,
            message: "User added successfully",
            data: newUser
        })

    } catch (error) { 

        return res.status(500).json({

            success: false,
            message: "Internal Server Error",
            error: error.message,
        })
    }
}

export const getUserDetails = async (req, res) => { 

    try {

        const users = await User.find({});

        return res.status(200).json({

            success : true,
            message : "Users fetched successfully",
            data : users
        })

    } catch (error) { 

        return res.status(500).json({

            success : false,
            message : "Internal Server Error",
            error : error.message
        })
    }
}

export const getUserDataById = async (req, res) => { 

    try {

        const { userId } = req.params;

        if (!userId) { 

            return res.status(401).json({

                success: false,
                message: "User Id is required"
            })
        }

        const userExist = await User.findById(userId);

        if (!userExist) { 

            return res.status(404).json({

                success: false,
                message: "User not found"
            })
        }

        return res.status(200).json({

            success: true,
            message: "User fetched successfully",
            data: userExist
        })

    } catch (error) { 

        return res.status(500).json({

            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

export const updateUserData = async (req, res) => { 

    try {

        const { userId } = req.params;
        const { name, email, age } = req.body;

        if (!userId) {

            return res.status(401).json({

                success: false,
                message: "User Id is required"
            })
        }
        
        const userExist = await User.findById(userId);

        if (!userExist) { 

            return res.status(404).json({
                
                success: false,
                message: "User not found"
            })
        }
        if (name) { 
           
            userExist.name = name;
        }
        if (email) {

            userExist.email = email;
        }
        if (age) {

            userExist.age = age;
        }

        await userExist.save();

        return res.status(200).json({

            success: true,
            message: "User updated successfully",
            data: userExist
        })

    } catch (error) { 

        return res.status(500).json({

            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

export const deleteUserData = async (req, res) => { 

    try {

        const { userId } = req.params;

        if (!userId) { 

            return res.status(401).json({

                success: false,
                message: "User Id is required"

            })
        }

        const userExist = await User.findByIdAndDelete(userId);

        if (!userExist) { 

            return res.status(404).json({

                success: false,
                message: "User not found"
            })
        }

        return res.status(200).json({

            success: true,
            message: "User deleted successfully",
            data: userExist
        });


    } catch (error) { 

        return res.status(500).json({

            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}