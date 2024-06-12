const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const cors=require('cors')
const port = process.env.PORT || 8080;
const dbUrl = process.env.DATABASE_URL;
const projectRoutes = require("./routes/projectRoutes");
const contactRoutes = require("./routes/contactRoutes");
const workRoutes = require("./routes/workRoutes");
const resumeRoutes=require('./routes/resumeRoutes')

// database connection
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

// Middleware
app.use(express.json());
app.use(cors());
//base url hit response
app.get("/", (req, res) => {
  res.send("Hello World");
});
// routes
app.use("/project", projectRoutes);
app.use("/cont", contactRoutes);
app.use("/work", workRoutes);
app.use('/resume',resumeRoutes)
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
