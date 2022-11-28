import { mailOptions, transporter } from "../../config/nodemailer"

const handler = async (req, res) => {
  const data = req.body
  if (data != null) {
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `Message de ${data.contact.personne.inputMail}`,
        text:
          "Demande de contact\nIdentifiant: " +
          data.identifiant +
          "\nNom: " +
          data.contact.personne.inputNom +
          "\nMail: " +
          data.contact.personne.inputMail +
          "\nMessage: " +
          data.contact.personne.inputMessage,
      })
      return res.status(200).json({ success: true })
    } catch (error) {
      return res.status(400).json({ message: error.message })
    }
  } else {
    return res.status(400).json({ message: "Bad Request" })
  }
}

export default handler
