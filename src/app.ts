import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mailRoutes from "./routes/mail";
import rateLimit from 'express-rate-limit';

dotenv.config();

const app = express();

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-netlify-url.netlify.app'] 
    : ['http://localhost:5173', 'http://localhost:3000']
}));

app.use(express.json());

// Routes
app.use("/api/mail", mailRoutes);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many requests, please try again later.'
});

app.use('/api/mail', limiter);

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Portfolio Mailer API is running!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});





