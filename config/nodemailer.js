import nodemailer from "nodemailer"

const email = process.env.MAIL_USER
const emailPasswrd = process.env.MAIL_PASSWORD

export const transporter = nodemailer.createTransport({
  host: "mail.infomaniak.com",
  port: 587,
  auth: {
    user: email,
    pass: emailPasswrd,
  },
  tls: {
    rejectUnauthorized: false,
  },
})

export const mailOptions = {
  from: email,
  to: email,
}
