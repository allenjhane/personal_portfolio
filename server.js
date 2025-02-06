require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" })); // Allow frontend to communicate with backend

// Setup Nodemailer with Zoho Mail SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // Zoho SMTP
  port: process.env.SMTP_PORT, // 587 (TLS)
  secure: false, // TLS (use `true` if port 465)
  auth: {
    user: process.env.SMTP_USER, // noreply@yourdomain.com
    pass: process.env.SMTP_PASS, // Your Zoho Mail Password
  },
});

app.post("/send-email", async (req, res) => {
  const { fromName, fromEmail, message } = req.body;

  if (!fromEmail || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Email to You (Admin)
  const adminMailOptions = {
    from: `"Received Email from Portfolio" <${process.env.SMTP_USER}>`,
    to: process.env.EMAIL_USER, // Your email
    subject: "New Contact Message",
    text: `From: ${fromName}\nEmail: ${fromEmail}\n\nMessage:\n${message}`,
  };

  // Email to the Sender (Confirmation Copy)
  const userMailOptions = {
    from: `"Email Sent to Jhane" <${process.env.SMTP_USER}>`, // Your no-reply email
    to: fromEmail,
    subject: "Your Message Has Been Sent",
    text: `Hello,\n\n
          Thank you for reaching out! Below is a copy of your message:\n\n
          "${message}"\n\n
          I will get back to you as soon as possible.\n\nBest regards,\nJhane`,
  };

  try {
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions); // Send confirmation email

    res.status(200).json({ success: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Error sending email" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

