const {user} = require("../models");

// Create user service
const createUser = async (reqBody)=>{
    return user.create(reqBody);
};

// get user list service
const getUserList = async(req,res)=>{
    return user.find();
}

// delete user service
const deleteUser = async(userId)=>{
    return user.findByIdAndDelete(userId);
};

// Get user details by id service
const getUserById = async(userId)=>{
    return user.findById(userId)
}

// update user details service
const updateUser = async(userId , updateBody)=>{
    return user.findByIdAndUpdate(userId , {$set : updateBody})
}

// get user by email
const findUserByEmail = async (email) => {
    return user.findOne(email);
  };

//   delete user by email
const deleteUserByEmail= async(email)=>{
    return user.findOneAndDelete(email);
}

module.exports = {
    createUser,
    getUserList,
    deleteUser,
    getUserById,
    updateUser,
    findUserByEmail,
    deleteUserByEmail
}