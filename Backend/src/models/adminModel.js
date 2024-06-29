import mongoose from "mongoose";

// Define the schema for admin data
const adminSchema = new mongoose.Schema(
  {
    Name: String,       // Field for the name of the user
    Email: String,      // Field for the email of the user
    Mobile: Number,     // Field for the mobile number of the user
    Subject: String,    // Field for the subject
    Message: String,    // Field for the message
  },
  { timestamps: true }   // Enable timestamps to record createdAt and updatedAt times
);

// Export the model for use in other parts of the application
export default mongoose.model("userData", adminSchema);
