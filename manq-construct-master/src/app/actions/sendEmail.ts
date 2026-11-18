'use server';

import { formSchema } from '@/types/schema';
import nodemailer from 'nodemailer';
import { z } from 'zod';

export async function sendEmail(values: z.infer<typeof formSchema>) {
  const { name, email, phone, message } = values;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'mgt.manq@gmail.com',
    subject: 'New Contact Form Submission',
    text: `
      You have a new form submission:

      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
    headers: {
      'X-Priority': '1', // "1" = High priority
      Importance: 'high', // Marks as high importance
    },
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { error: 'Failed to send email. Please try again.' };
  }
}
