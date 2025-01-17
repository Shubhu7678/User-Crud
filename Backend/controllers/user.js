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