require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, business, industry, challenge, source } = req.body;

  if (!name || !email || !business || !challenge) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }

  const sourceLabel = source ? ` [${source}]` : '';
  const html = `
    <h2>Nueva solicitud de contacto - Nodumstudio${sourceLabel}</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:Arial,sans-serif;">
      <tr>
        <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;">Nombre</td>
        <td style="padding:8px 12px;border:1px solid #ddd;">${name}</td>
      </tr>
      <tr>
        <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;">Email</td>
        <td style="padding:8px 12px;border:1px solid #ddd;">${email}</td>
      </tr>
      <tr>
        <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;">Negocio</td>
        <td style="padding:8px 12px;border:1px solid #ddd;">${business}</td>
      </tr>
      <tr>
        <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;">Rubro</td>
        <td style="padding:8px 12px;border:1px solid #ddd;">${industry || 'No especificado'}</td>
      </tr>
      <tr>
        <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;">Desafío</td>
        <td style="padding:8px 12px;border:1px solid #ddd;">${challenge}</td>
      </tr>
      <tr>
        <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;">Origen</td>
        <td style="padding:8px 12px;border:1px solid #ddd;">${source || 'General'}</td>
      </tr>
    </table>
  `;

  // Destinatarios según la fuente
  const recipients = [process.env.MAIL_TO || 'admin@nodumstudio.com'];
  if (source === 'asesoria-financiera') {
    recipients.push('carloszevallos1cc@gmail.com');
  }

  try {
    await transporter.sendMail({
      from: `"Nodumstudio Web" <${process.env.SMTP_USER}>`,
      to: recipients.join(', '),
      replyTo: email,
      subject: `Nueva solicitud${sourceLabel}: ${name} - ${business}`,
      html,
    });

    res.json({ ok: true });
  } catch (err) {
    console.error('Error enviando email:', err);
    res.status(500).json({ error: 'Error enviando el correo' });
  }
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`API corriendo en puerto ${PORT}`);
});
