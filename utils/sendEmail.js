import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendWelcomeEmail = async (email, name) => {
  await transporter.sendMail({
    from: `"SpendSense" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "🎉 Welcome to SpendSense – Your Finance Journey Starts Here!",
    html: `
      <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:40px;">
        <div style="max-width:600px;margin:auto;background:white;border-radius:12px;overflow:hidden;box-shadow:0 5px 15px rgba(0,0,0,0.1);">

          <!-- HEADER -->
          <div style="background:linear-gradient(135deg,#7C5CFF,#5A8CFF);padding:30px;text-align:center;color:white;">
            <h1 style="margin:0;">SpendSense</h1>
            <p style="margin:5px 0 0;">Smart Personal Finance Dashboard</p>
          </div>

          <!-- BODY -->
          <div style="padding:30px;color:#333;">
            <h2>Hello ${name} 👋</h2>

            <p>
              Welcome to <b>SpendSense</b>! Your account has been successfully created.
            </p>

            <p>
              You can now track expenses, manage budgets, and analyze your financial growth with powerful insights.
            </p>

            <div style="text-align:center;margin:30px 0;">
              <a href="http://localhost:5173/dashboard"
                 style="
                   background:#7C5CFF;
                   color:white;
                   padding:14px 24px;
                   text-decoration:none;
                   border-radius:8px;
                   font-weight:bold;
                   display:inline-block;">
                Open Dashboard 🚀
              </a>
            </div>

            <p>If you didn’t create this account, you can safely ignore this email.</p>

            <p style="margin-top:30px;">
              Cheers,<br/>
              <b>SpendSense Team</b>
            </p>
          </div>

          <!-- FOOTER -->
          <div style="background:#f1f1f1;padding:15px;text-align:center;font-size:12px;color:#777;">
            © ${new Date().getFullYear()} SpendSense • Personal Finance Made Simple
          </div>

        </div>
      </div>
    `,
  });
};