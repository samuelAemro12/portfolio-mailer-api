import express, { Request, Response } from "express";
import transporter from "../utils/transporter";

const router = express.Router();

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

router.post("/", async (req: Request<{}, {}, ContactFormData>, res: Response) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      error: "All fields are required" 
    });
  }

  const mailOptions = {
    from: email,
    to: process.env.TO_EMAIL,
    subject: `Portfolio Contact Form: ${name}`,
    text: `You received a new message from ${name} (${email}):\n\n${message}`,
    html: `
      <h3>New Portfolio Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ 
      success: true, 
      message: "Email sent successfully." 
    });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ 
      success: false, 
      error: "Failed to send email." 
    });
  }
});

export default router;