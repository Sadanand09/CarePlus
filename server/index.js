import express from "express";
import cors from "cors";
import mongoose, { Schema, model } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL); // Removed deprecated options
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};
connectDB();

// Define the User model
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mob_no: { type: Number, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  occupation: { type: String, required: true },
  emergencyname: { type: String, required: true },
  emergencynum: { type: Number, required: true },
  physician: { type: String, required: true },
  ins_prov: { type: String, required: true },
  ins_num: { type: Number, required: true },
  allergy: { type: String },
  current_med: { type: String, required: true },
  family_med_his: { type: String },
  past_med_his: { type: String, required: true },
  id_type: { type: String, required: true },
  id_num: { type: Number, required: true },
});

const User = model("User", userSchema);

const PORT = process.env.PORT || 5000;

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is running",
    data: null,
  });
});

app.post("/careplus", async (req, res) => {
  const {
    name,
    email,
    mob_no,
    dob,
    gender,
    address,
    occupation,
    emergencyname,
    emergencynum,
    physician,
    ins_prov,
    ins_num,
    allergy,
    current_med,
    family_med_his,
    past_med_his,
    id_type,
    id_num,
  } = req.body;

  // Simple validation for required fields
  const requiredFields = {
    name,
    email,
    mob_no,
    dob,
    address,
    physician,
    gender,
    ins_prov,
    ins_num,
    current_med,
    past_med_his,
    id_type,
    id_num,
  };
  for (const [field, value] of Object.entries(requiredFields)) {
    if (!value) {
      return res.json({
        success: false,
        message: `${field} is required`,
        data: null,
      });
    }
  }

  try {
    const newUser = await User.create({
      name,
      email,
      mob_no,
      dob,
      address,
      occupation,
      emergencyname,
      emergencynum,
      physician,
      gender,
      ins_prov,
      ins_num,
      allergy,
      current_med,
      family_med_his,
      past_med_his,
      id_type,
      id_num,
    });

    res.json({
      success: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.json({
      success: false,
      message: "Error creating user",
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
    res.json({
      success: false,
      message: "Error fetching users",
      data: null,
    });
  }
});

app.delete("/careplus/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "Appointment deleted successfully",
      data: null,
    });
  } catch (error) {
    console.error("Error deleting appointment:", error);
    res.json({
      success: false,
      message: "Error deleting appointment",
      data: null,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
