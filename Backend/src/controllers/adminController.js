import adminModel from '../models/adminModel.js';

// Function to create a new user
const createUser = async (req, res) => {
   try {
      const data = req.body; // Get user data from request body
      const createUser = await adminModel.create(data); // Create a new user in the database
      return res.send({ status: 'ok', message: createUser }); // Send success response with created user data
   } catch (err) {
      console.log(err); // Log any errors
      return res.status(500).send({ status: 'error', message: 'Failed to create user' }); // Send error response
   }
};

// Function to delete a user by ID
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params; // Get user ID from request parameters
        const deleteUser = await adminModel.findByIdAndDelete(id); // Delete user from the database by ID
        if (!deleteUser) {
            return res.status(404).send({ status: 'error', message: 'User not found' }); // Send error response if user not found
        }
        return res.send({ status: 'ok', message: 'User deleted successfully' }); // Send success response
    } catch (err) {
        console.log(err); // Log any errors
        return res.status(500).send({ status: 'error', message: 'Failed to delete user' }); // Send error response
    }
}

// Function to update a user by ID
const updateUser = async (req, res) => {
    try {
        const { id } = req.params; // Get user ID from request parameters
        const data = req.body; // Get updated user data from request body
        const updateUser = await adminModel.findByIdAndUpdate(id, data, { new: true }); // Update user in the database by ID and return the updated user
        if (!updateUser) {
            return res.status(404).send({ status: 'error', message: 'User not found' }); // Send error response if user not found
        }
        return res.send({ status: 'ok', message: updateUser }); // Send success response with updated user data
    } catch (err) {
        console.log(err); // Log any errors
        return res.status(500).send({ status: 'error', message: 'Failed to update user' }); // Send error response
    }
}

// Function to search for users by name
const searchUser = async (req, res) => {
    try {
        const query = {}; // Initialize an empty query object
        const { name } = req.query; // Get name query parameter from request
        if (name) {
            query.Name = name; // Add name to the query object if it exists
        }
        const searchUser = await adminModel.find(query); // Search users in the database by query
        return res.send({ status: 'ok', message: searchUser }); // Send success response with found users
    } catch (err) {
        console.log(err); // Log any errors
        return res.status(500).send({ status: 'error', message: 'Failed to search user' }); // Send error response
    }
}

export { createUser, deleteUser, updateUser, searchUser };
