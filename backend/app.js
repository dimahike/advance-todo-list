const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

require("dotenv").config();

const router = require("./routes");

const app = express();

async function run() {
  try {
    // Connect to MongoDB using Mongoose
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Successfully connected to MongoDB using Mongoose!");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  } finally {
    // Disconnect from MongoDB when done
    await mongoose.disconnect();
  }
}

run().catch(console.error);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
