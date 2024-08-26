import mongoose, {model} from "mongoose";

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

export default User;