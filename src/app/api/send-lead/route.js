import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, phone, pincode, email, source } = body;

    const submittedAt = new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short"
    });

    const whatsappLink = `https://wa.me/91${phone}`;
    const callLink = `tel:${phone}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: `"Dream Designer Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "🚨 New Lead Captured | Dream Designer Studio",

      html: `
      <div style="font-family: Arial, sans-serif; background:#f6f8fb; padding:20px;">

        <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; padding:25px; box-shadow:0 2px 10px rgba(0,0,0,0.08);">

          <h2 style="color:#1d4ed8; margin-bottom:10px;">
            🔥 New Lead Captured from Website
          </h2>

          <p style="color:#555; font-size:14px;">
            A new potential customer has submitted their details through Dream Designer Studio website.
          </p>

          <hr style="margin:20px 0;" />

          <h3 style="color:#111;">👤 Customer Information</h3>

          <table style="width:100%; font-size:14px; color:#333;">
            <tr>
              <td style="padding:6px 0;"><strong>Name</strong></td>
              <td>${name}</td>
            </tr>
            <tr>
              <td style="padding:6px 0;"><strong>Phone</strong></td>
              <td>${phone}</td>
            </tr>
            <tr>
              <td style="padding:6px 0;"><strong>Pincode</strong></td>
              <td>${pincode}</td>
            </tr>
            <tr>
              <td style="padding:6px 0;"><strong>Email</strong></td>
              <td>${email || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding:6px 0;"><strong>Source</strong></td>
              <td>${source || "Website Popup"}</td>
            </tr>
            <tr>
              <td style="padding:6px 0;"><strong>Submitted At</strong></td>
              <td>${submittedAt}</td>
            </tr>
          </table>

          <hr style="margin:20px 0;" />

          <div style="background:#f1f5ff; padding:15px; border-radius:8px;">
            <p style="margin:0; font-size:13px;">
              💡 <strong>Action Required:</strong> Contact this lead within 24 hours for maximum conversion potential.
            </p>
          </div>

          <!-- ACTION BUTTONS -->
          <div style="margin-top:20px; text-align:center;">

            <a href="${callLink}"
              style="display:inline-block; margin:5px; padding:10px 15px; background:#16a34a; color:#fff; text-decoration:none; border-radius:6px;">
              📞 Call Now
            </a>

            <a href="${whatsappLink}"
              style="display:inline-block; margin:5px; padding:10px 15px; background:#25D366; color:#fff; text-decoration:none; border-radius:6px;">
              💬 WhatsApp
            </a>

          </div>

          <p style="margin-top:20px; font-size:12px; color:#777; text-align:center;">
            Automated lead notification from Dream Designer Studio system
          </p>

        </div>
      </div>
      `
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}