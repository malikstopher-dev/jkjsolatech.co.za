import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const { name, phone, email, area, service, message } = req.body || {};

    console.log("RESEND KEY:", process.env.RESEND_API_KEY?.slice(0, 10));

    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["malikstopher@gmail.com"],
      subject: `New Quote Request - ${name || "Website Lead"}`,
      reply_to: email || undefined,
      html: `
        <h2>New Website Quote Request</h2>
        <p><strong>Name:</strong> ${name || "Not provided"}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Area:</strong> ${area || "Not provided"}</p>
        <p><strong>Service:</strong> ${service || "Not provided"}</p>
        <p><strong>Project Details:</strong></p>
        <p>${message || "No details provided"}</p>
      `
    });

    console.log("Resend result:", result);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Resend email error:", error);
    return res.status(500).json({
      success: false,
      message: "Email failed",
      error: error?.message || "Unknown error"
    });
  }
}