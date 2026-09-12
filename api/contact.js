import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const { name, phone, email, area, service, message } = req.body || {};

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeArea = escapeHtml(area);
    const safeService = escapeHtml(service);
    const safeMessage = escapeHtml(message);

    if (!safeName || !safePhone) {
      return res.status(400).json({ success: false, message: "Name and phone are required." });
    }

    const { data, error } = await resend.emails.send({
      from: "JKJ Solartech <onboarding@resend.dev>",
      to: ["malikstopher@gmail.com"],
      subject: `New Quote Request - ${safeName}`,
      replyTo: safeEmail || undefined,
      html: `
        <h2>New Website Quote Request</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Email:</strong> ${safeEmail || "Not provided"}</p>
        <p><strong>Area:</strong> ${safeArea || "Not provided"}</p>
        <p><strong>Service:</strong> ${safeService || "Not provided"}</p>
        <p><strong>Project Details:</strong></p>
        <p>${safeMessage || "No details provided"}</p>
      `
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(502).json({ success: false, message: "Failed to send email. Please try again." });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact handler error:", error);
    return res.status(500).json({ success: false, message: "Something went wrong. Please try again." });
  }
}
