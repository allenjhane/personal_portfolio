require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL })); // Allow frontend to communicate with backend, change to domain later

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

// trying to send an email to myself and sender
app.post("/send-email", async (req, res) => {
  const { fromName, fromEmail, message } = req.body;

  if (!fromName || !fromEmail || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Email to You (Admin)
  const adminMailOptions = {
    from: `"Jhane's Personal Portfolio" <${process.env.SMTP_USER}>`, // from no-reply email
    to: process.env.EMAIL_USER, // my email
    subject: "New email sent through your portfolio",
    text: `From: ${fromName}\nEmail: ${fromEmail}\n\nMessage:\n${message}`,
  };

  // Email to the Sender (Confirmation Copy)
  const userMailOptions = {
    from: `"Jhane's Personal Portfolio" <${process.env.SMTP_USER}>`, // from no-reply email
    to: fromEmail, // sender's email
    subject: "Your email has been sent to Jhane!",
    text: `Hello,\n\n
          Thank you for reaching out! Below is a copy of your message:\n\n
          "${message}"\n\n
          I will get back to you as soon as possible.\n\nBest regards,\nJhane`,
  };

  try {
    await transporter.sendMail(adminMailOptions); // send email to you with the message from the sender
    await transporter.sendMail(userMailOptions); // Send confirmation email

    res.status(200).json({ success: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Error sending email" });
  }
});

let visitorCount = 0;

// GET to simply retrieve the current count
app.get('/visitor-count', (req, res) => {
  res.json({ count: visitorCount });
});

// POST to increment the visitor count
app.post('/visitor-count', (req, res) => {
  visitorCount++;  // Increment here
  res.json({ count: visitorCount });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});



