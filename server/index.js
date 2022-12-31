const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db/conn");
const notesRoute = require("./routes/myNotesRoutes");
const userRoute = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

connectDB();

app.use("",notesRoute);
app.use("",userRoute);

const port = process.env.PORT || 7000;
app.listen(port,()=>{
    console.log(`app is listening on : ${port}`);
})