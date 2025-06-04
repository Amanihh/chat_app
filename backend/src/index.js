import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import{connectDB} from "./lib/db.js";
import cors from "cors"

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";


dotenv.config();
const app = express();
app.use(cookieParser());

const PORT =process.env.PORT;

// ✅ This line is crucial to parse incoming JSON requests
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials:true,
}))

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);

app.listen(PORT,()=>{
    console.log("server is running on PORT:" + PORT);
    connectDB()
});