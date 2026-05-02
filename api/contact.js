import { Resend } from 'resend';

const resend = new Resend('re_AeWc4HYo_8DNVatfbyufYZXnRQeoFf2XG');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, area, service, message } = req.body;

    await resend.emails.send({
      from: 'JKJ Solartech <onboarding@resend.dev>', // works for now
      to: ['info@jkjsolatech.co.za'],
      subject: `New Quote Request from ${name}`,
      html: `
        <h2>New Website Lead</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || 'N/A'}</p>
        <p><strong>Area:</strong> ${area || 'N/A'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided'}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false });
  }
}