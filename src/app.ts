import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mailRoutes from "./routes/mail";

dotenv.config();

const app = express();

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-actual-domain.vercel.app', 'https://your-custom-domain.com'] 
    : ['http://localhost:5173', 'http://localhost:3000']
}));

app.use(express.json());

// Routes
app.use("/api/mail", mailRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Portfolio Mailer API is running!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
