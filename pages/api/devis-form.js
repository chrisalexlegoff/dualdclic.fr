import { mailOptions, transporter } from "../../config/nodemailer"

const handler = async (req, res) => {
  const data = req.body
  console.log(data)
  if (data != null) {
    const styledKeys = "font-weight:bold; text-decoration: underline;"
    let nbrFiles = 0
    const attachements = [
      {
        filename: `Devis_${data.personneEntreprise.inputMail}.pdf`,
        path: process.env.NEXT_PUBLIC_URL + data.url,
      },
    ]
    if (data.urlFiles.urlFileUn) {
      attachements.push({
        filename: data.uploadFilesEntreprise.fileUnName,
        path: process.env.NEXT_PUBLIC_URL + data.urlFiles.urlFileUn,
      })
      nbrFiles += 1
    }
    if (data.urlFiles.urlFileDeux) {
      attachements.push({
        filename: data.uploadFilesEntreprise.fileDeuxName,
        path: process.env.NEXT_PUBLIC_URL + data.urlFiles.urlFileDeux,
      })
      nbrFiles += 1
    }
    if (data.urlFiles.urlFileTrois) {
      attachements.push({
        filename: data.uploadFilesEntreprise.fileTroisName,
        path: process.env.NEXT_PUBLIC_URL + data.urlFiles.urlFileTrois,
      })
      nbrFiles += 1
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `Demande de devis | ${data.personneEntreprise.inputMail}`,
        attachments: attachements,
        html: `<h2>Demande de devis (<a href="mailto:${data.personneEntreprise.inputMail}">${data.personneEntreprise.inputMail}</a>)</h2>
        <p style=${styledKeys}>En pièce(s) jointe(s):</p>
        <p> - 1 Devis,</p>
        <P> - ${nbrFiles} document(s) supplémentaire(s).</p>`,
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
