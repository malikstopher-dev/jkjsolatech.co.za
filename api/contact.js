import { Resend } from "resend";

const resend = new Resend("re_AeWc4HYo_8DNVatfbyufYZXnRQeoFf2XG");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const { name, phone, email, area, service, message } = req.body || {};

    if (!name || !phone || !service) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }

    await resend.emails.send({
      from: "JKJ Solartech <onboarding@resend.dev>",
      to: ["info@jkjsolatech.co.za"],
      subject: `New Quote Request - ${name}`,
      html: `
        <h2>New Website Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Area:</strong> ${area || "Not provided"}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Project Details:</strong></p>
        <p>${message || "No project details provided"}</p>
      `
    });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully"
    });
  } catch (error) {
    console.error("Resend email error:", error);

    return res.status(500).json({
      success: false,
      message: "Email failed",
      error: error?.message || "Unknown error"
    });
  }
}