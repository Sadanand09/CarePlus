import User from "../db/user.js";

function checkServerHealth(req, res) {
    res.json({
        success: true,
        message: "Server is healthy",
        data: null,
    });
}

async function registerPatient(req, res) {
    const requiredFields = [
        "name", "email", "mob_no", "dob", "gender", "address",
        "occupation", "id_type", "id_num", "image"
    ];

    for (const field of requiredFields) {
        if (!req.body[field]) {
            return res.status(400).json({
                success: false,
                message: `${field} is required`,
                data: null,
            });
        }
    }

    try {
        const newUser = await User.create(req.body);
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: newUser,
        });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({
            success: false,
            message: `Error creating user: ${error.message}`,
            data: null,
        });
    }
}

async function getAllPatients(req, res) {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            data: users,
        });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({
            success: false,
            message: `Error fetching users: ${error.message}`,
            data: null,
        });
    }
}

async function getPatientById(req, res) {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
                data: null,
            });
        }

        res.status(200).json({
            success: true,
            message: "User fetched successfully",
            data: user,
        });
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({
            success: false,
            message: `Error fetching user: ${error.message}`,
            data: null,
        });
    }
}

async function updatePatient(req, res) {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: updatedUser,
        });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({
            success: false,
            message: `Error updating user: ${error.message}`,
            data: null,
        });
    }
}

async function deletePatient(req, res) {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found",
                data: null,
            });
        }
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: null,
        });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({
            success: false,
            message: `Error deleting user: ${error.message}`,
            data: null,
        });
    }
}

export {
    checkServerHealth,
    registerPatient,
    getAllPatients,
    getPatientById,
    updatePatient,
    deletePatient
}