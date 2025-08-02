const express = require("express");
const cors = require("cors");
require("dotenv").config();

const mailRoutes = require("./routes/mail");

const app = express();

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-portfolio-domain.com'] 
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