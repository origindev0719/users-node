import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, trim: true, required: true },
  email: {
    type: String,
    trim: true,
    unique: true,
    validate: {
      validator: function (value) {
        return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
      },
      message: "Invalid emailsss",
    },
    required: true,
  },
  password: { type: String, minlength: 6, required: true },
  created_at: { type: Date, default: Date.now },
});

export default userSchema;
