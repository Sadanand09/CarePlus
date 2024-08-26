import express from "express";
import cors from "cors";
import mongoose, {model} from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected");
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);
    }
};
connectDB();

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    mob_no: {type: Number, required: true},
    dob: {type: Date, required: true},
    gender: {type: String, required: true},
    address: {type: String, required: true},
    occupation: {type: String, required: true},
    emergencyname: {type: String, required: true},
    emergencynum: {type: Number, required: true},
    physician: {type: String, required: true},
    ins_prov: {type: String, required: true},
    ins_num: {type: Number, required: true},
    allergy: {type: String},
    current_med: {type: String, required: true},
    family_med_his: {type: String},
    past_med_his: {type: String, required: true},
    id_type: {type: String, required: true},
    id_num: {type: Number, required: true},
    image: {type: String, required: true},
});

const User = model("User", userSchema);

const PORT = process.env.PORT || 5000;

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

    console.log("body", req.body);

    for (const field of requiredFields) {
        if (!req.body[field]) {
            return res.status(400).json({
                success: false,
                message: `${field} is required`,
                data: null,
            });
        }
    }

    // return res.json({
    //     success: true,
    //     message: "User created successfully",
    //     data: req.body,
    // });

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
});
