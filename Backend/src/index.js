import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/adminRoute.js";

const app = express(); // Create an instance of the Express application
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS) for all routes
app.use(express.json()); // Middleware to parse incoming JSON requests

// Connect to MongoDB database
mongoose
  .connect(
    "mongodb+srv://piyush2002panwar:GEVr2dKq5A5CnejH@cluster0.rivcjo2.mongodb.net/adminPanel"
  )
  .then(() => {
    console.log("database connected"); // Log success message if the database connection is successful
  })
  .catch((err) => {
    console.log(err); // Log error message if the database connection fails
  });

app.use("/", router); // Use the router for all routes starting with "/"
app.listen(8000, () => {
  console.log("server started on port: 8000"); // Log message when the server starts
});
