import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {connectDB} from "./db/index.js";
import routes from './routes/index.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 5000;

app.use('/api', routes)

app.get("/", (req, res) => {
    res.send("Working Clean");
});

app.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "Server is running",
        data: null,
    });
});

app.post("/careplus", async (req, res) => {
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
        res.json({
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
});

app.get("/careplus", async (req, res) => {
    try {
        const users = await User.find();
        res.json({
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
});

app.delete("/careplus/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found",
                data: null,
            });
        }
        res.json({
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
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
