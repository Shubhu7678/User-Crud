import express from 'express';
const router = express.Router();

import { addNewUser, getUserDetails, getUserDataById, updateUserData, deleteUserData } from "../controllers/user.js";

router.post('/addUser', addNewUser);
router.get('/getAllUserDetails', getUserDetails);
router.get('/getUserDataById/:userId', getUserDataById);
router.put('/updateUser/:userId', updateUserData);
router.delete('/deleteUserData/:userId', deleteUserData);

export default router;
