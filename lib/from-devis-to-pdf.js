/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  pdf,
  Image,
} from "@react-pdf/renderer"
import { uploadFile } from "../api/backend"
import { uuid } from "./uuid"
import { sendDevisForm } from "./mail"

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    display: "flex",
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  sectionReponse: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  logo: {
    width: 150,
    height: 50,
  },
  textBlock: {
    paddingVertical: 10,
    fontSize: 8,
  },
  textTitle: {
    fontSize: 14,
    textDecoration: "underline",
  },
  textReponses: {
    fontSize: 12,
  },
  footer: {
    backgroundColor: "#fc5050",
    height: 40,
  },
})

// Create Document Component
export const MyDocument = async (data) => {
  const besoins = Object.values(data.besoins).map((val) => {
    const newBesoins = []
    if (val.checked) {
      newBesoins.push(
        ` - ${val.text.slice(3, -4)}${
          val.input != undefined ? ` ${val.input}` : ""
        }`
      )
    }
    return newBesoins
  })

  const doc = (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View>
            <Image
              style={styles.logo}
              source={
                data.img.data[0] != null &&
                process.env.NEXT_PUBLIC_URL + data.img.data[0].attributes.url
              }
            />
            <View style={styles.textBlock}>
              <Text>Rue du Capitaine Lheureux</Text>
              <Text>59184 Sainghin en Weppes</Text>
            </View>
            <View style={styles.textBlock}>
              <Text>N° Siret: 89903766700024</Text>
              <Text>Téléphone: 06 71 54 15 28</Text>
              <Text>Email: contact@dualdclic.fr</Text>
            </View>
          </View>
          <View>
            <View style={styles.textBlock}>
              <Text>Lille, le {new Date().toLocaleDateString()}</Text>
            </View>
            <View style={styles.textBlock}>
              <Text>
                {!data.personneEntreprise.textUnChecked ? "Monsieur" : "Madame"}{" "}
                {data.personneEntreprise.inputNom}{" "}
                {data.personneEntreprise.inputPrenom}
              </Text>
              <Text>{data.personneEntreprise.inputMail}</Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.sectionReponse}>
            <Text style={styles.textTitle}>Nom de l&apos;entreprise: </Text>
            <Text style={styles.textReponses}>{data.nomEntreprise.input}</Text>
          </View>
          <View style={styles.sectionReponse}>
            <Text style={styles.textTitle}>Budget: </Text>
            {data.budgetEntreprise.checked ? (
              <Text style={styles.textReponses}>
                {" "}
                De {data.budgetEntreprise.minValue} à{" "}
                {data.budgetEntreprise.maxValue} euros
              </Text>
            ) : (
              <Text style={styles.textReponses}>Faire une estimation</Text>
            )}
          </View>
        </View>
        <View style={styles.sectionReponse}>
          <Text style={styles.textTitle}>Activité de l&apos;entreprise: </Text>
          <Text style={styles.textReponses}>
            {data.activiteEntreprise.input}
          </Text>
        </View>
        <View style={styles.sectionReponse}>
          <Text style={styles.textTitle}>Besoins de l&apos;entreprise: </Text>
          {besoins.map((val, index) => (
            <Text style={styles.textReponses} key={index}>
              {val}
            </Text>
          ))}
        </View>
        <View style={styles.sectionReponse}>
          <Text style={styles.textTitle}>
            Fonctionnalités de l&apos;entreprise:{" "}
          </Text>
          <Text style={styles.textReponses}>
            {data.fonctionnalitesEntreprise.input}
          </Text>
        </View>
        <View style={styles.sectionReponse}>
          <Text style={styles.textTitle}>
            Pourquoi ce projet (facultatif):{" "}
          </Text>
          <Text style={styles.textReponses}>
            {data.pourquoiProjetEntreprise.input.length > 0
              ? data.pourquoiProjetEntreprise.input
              : "Non renseigné"}
          </Text>
        </View>
        <View style={styles.sectionReponse}>
          <Text style={styles.textTitle}>Contrainte(s) (facultatif): </Text>
          <Text style={styles.textReponses}>
            {data.contraintesEntreprise.input.length > 0
              ? data.contraintesEntreprise.input
              : "Non renseigné"}
          </Text>
        </View>
        <View style={styles.sectionReponse}>
          <Text style={styles.textTitle}>Commentaire(s) (facultatif): </Text>
          <Text style={styles.textReponses}>
            {data.commentaireEntreprise.input.length > 0
              ? data.commentaireEntreprise.input
              : "Non renseigné"}
          </Text>
        </View>
        <View style={styles.footer}></View>
      </Page>
    </Document>
  )

  const uuidEnCours = uuid()
  function renameFile(originalFile, newName) {
    return new File([originalFile], newName, {
      type: originalFile.type,
      lastModified: originalFile.lastModified,
    })
  }
  const myPdf = pdf()
  myPdf.updateContainer(doc)
  const blob = await myPdf.toBlob() /*create blob*/
  var file = new File([blob], "pdfname.pdf", {
    lastModified: new Date().getTime(),
  }) /*create file*/
  const newName = uuidEnCours + "." + file.name.split(".").pop()
  const newFile = renameFile(file, newName)
  uploadFile(newFile).then((response) => {
    const newData = { ...data, url: response[0].url, fileName: newName }
    sendDevisForm(newData)
  })
}
