import { NextRequest } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const schema = z.object({
  nome: z.string().min(2),
  whatsapp: z.string().min(10),
  email: z.string().email(),
  assunto: z.string().min(1),
  mensagem: z.string().min(10),
});

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Corpo da requisição inválido." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: "Dados inválidos. Verifique os campos e tente novamente." }, { status: 422 });
  }

  const { nome, whatsapp, email, assunto, mensagem } = parsed.data;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = `
<!DOCTYPE html>
<html lang="pt-BR">
<body style="font-family: Arial, sans-serif; background: #f5f5f5; padding: 24px;">
  <div style="max-width: 560px; margin: 0 auto; background: #fff; border-radius: 8px; padding: 32px; border: 1px solid #e0e0e0;">
    <h2 style="color: #0A1628; margin-top: 0;">Nova mensagem via site lab82</h2>
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 8px 0; color: #666; width: 110px;">Nome</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(nome)}</td></tr>
      <tr><td style="padding: 8px 0; color: #666;">WhatsApp</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(whatsapp)}</td></tr>
      <tr><td style="padding: 8px 0; color: #666;">E-mail</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(email)}</td></tr>
      <tr><td style="padding: 8px 0; color: #666;">Assunto</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(assunto)}</td></tr>
    </table>
    <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 16px 0;">
    <p style="color: #666; margin: 0 0 8px 0; font-size: 13px;">Mensagem:</p>
    <p style="margin: 0; line-height: 1.6; white-space: pre-line;">${escapeHtml(mensagem)}</p>
  </div>
</body>
</html>
  `.trim();

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `[lab82] ${assunto} — ${nome}`,
      html,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("SMTP error:", err);
    return Response.json(
      { error: "Falha ao enviar e-mail. Tente novamente em instantes." },
      { status: 500 }
    );
  }
}
