require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" })); // Allow frontend to communicate with backend

const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email provider
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
});

app.post("/send-email", async (req, res) => {
  const { fromName, fromEmail, message } = req.body;

  if (!fromEmail || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Email to You (Admin)
  const adminMailOptions = {
    from: fromEmail,
    to: process.env.EMAIL_USER, // Your email
    subject: "New Contact Message",
    text: `From: ${fromName}\nEmail: ${fromEmail}\n\nMessage:\n${message}`,
  };

  // Email to the Sender (Confirmation Copy)
  const userMailOptions = {
    from: process.env.EMAIL_USER,
    to: fromEmail,
    subject: "Your Message Has Been Sent",
    text: `Hello,\n\nThank you for reaching out! Below is a copy of your message:\n\n"${message}"\n\nI will get back to you as soon as possible.\n\nBest regards,\nJhane`,
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

