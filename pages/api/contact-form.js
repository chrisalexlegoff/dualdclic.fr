import { mailOptions, transporter } from "../../config/nodemailer"

const handler = async (req, res) => {
  const data = req.body
  const styledKeys = "font-weight:bold; text-decoration: underline;"
  if (data != null) {
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `Message de ${data.contact.personne.inputMail}`,
        html: `<h3>${data.contact.titre}</h3>
        <p style=${styledKeys}>Identifiant:</p>
        <p>${data.identifiant}</p>
        <p style=${styledKeys}>Nom:</p>
        <p>${data.contact.personne.inputNom}</p>
        <p style=${styledKeys}>Mail:</p>
        <a href=mailto:${data.contact.personne.inputMail}>${data.contact.personne.inputMail}</a>
        <p style=${styledKeys}>Message :</p>
        <textarea>${data.contact.personne.inputMessage}</textarea>`,
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
