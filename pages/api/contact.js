const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const info = await transporter.sendMail(
      {
        from: "Remitente",
        to: `${req.body.email}`,
        subject: "Enviado",
        text: `¡Tienes un mensaje de ${req.body.name}!\n\nSu mensaje es: ${req.body.message}\n\nTe puedes contactar con el mediante:\n\t Telefono: ${req.body.phone}`,
      },
      function (error) {
        if (error) {
          res.status(200).json({ success: "false" });
        } else {
          res.status(200).json({ success: "true" });
        }
      }
    );
  } else {
    res.status(404).json({ Hi: "What are you looking for here?" });
  }
}
