import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [],
    user: [],
    editUser: false,
    loading : false,
}


const userSlice = createSlice({

    name: 'user',
    initialState,
    reducers: {

        setUsers: (state, action) => { 

            state.users = action.payload;
        },
        setUser: (state, action) => { 

            state.user = action.payload;
        },
        setEditUser: (state, action) => { 

            state.editUser = action.payload;
        }
    }
})

export const { setUsers, setUser, setEditUser } = userSlice.actions;

export default userSlice.reducer