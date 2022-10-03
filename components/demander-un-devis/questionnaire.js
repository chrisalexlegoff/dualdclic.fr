// @ts-ignore
import React, { useState } from "react"
import Link from "next/link"
import LazyImage from "./../../lib/lazy-images"
import MultiRangeSlider from "./../MultiRangeSlider/MultiRangeSlider"
import FileUnUpload from "../files-uploads/fileUnUpload"
import FileDeuxUpload from "../files-uploads/fileDeuxUpload"
import FileTroisUpload from "../files-uploads/fileTroisUpload"
import { useRouter } from "next/router"
import { uuid } from "./../../lib/uuid"
import { poster } from "../../api/backend"
import { uploadFile } from "./../../api/backend"

const Questionnaire = ({ devis }) => {
  console.log(devis)
  const router = useRouter()
  const uncheckedIcon = LazyImage(
    devis.besoinUn.icon.data[1].attributes,
    "lazy",
    "30px"
  )
  const checkedIcon = LazyImage(
    devis.besoinUn.icon.data[0].attributes,
    "lazy",
    "30px"
  )
  const checkedIconCircle = LazyImage(
    devis.personneEntreprise.icon.data[1].attributes,
    "lazy",
    "30px"
  )
  const uncheckedIconCircle = LazyImage(
    devis.personneEntreprise.icon.data[0].attributes,
    "lazy",
    "30px"
  )

  const [minValueRange, setMinValueRange] = useState(
    devis.budgetEntreprise.minValue
  )
  const [maxValueRange, setMaxValueRange] = useState(
    devis.budgetEntreprise.maxValue
  )
  const [errorActiviteEntrepriseInput, setErrorActiviteEntrepriseInput] =
    useState(false)
  const [errorNomEntrepriseInput, setErrorNomEntrepriseInput] = useState(false)
  const [errorBesoinsEntrepriseInput, setErrorBesoinsEntrepriseInput] =
    useState(false)
  const [errorBudgetEntreprise, setErrorBudgetEntreprise] = useState(false)
  const [errorFileUnLength, setErrorFileUnLength] = useState(false)
  const [errorFileDeuxLength, setErrorFileDeuxLength] = useState(false)
  const [errorFileTroisLength, setErrorFileTroisLength] = useState(false)
  const [
    errorFonctionnalitesEntrepriseInput,
    setErrorFonctionnalitesEntrepriseInput,
  ] = useState(false)
  const [errorPersonneEntreprise, setErrorPersonneEntreprise] = useState(false)
  const [errorPersonneEntrepriseInputNom, setErrorPersonneEntrepriseInputNom] =
    useState(false)
  const [
    errorPersonneEntrepriseInputPrenom,
    setErrorPersonneEntrepriseInputPrenom,
  ] = useState(false)
  const [
    errorPersonneEntrepriseInputMail,
    setErrorPersonneEntrepriseInputMail,
  ] = useState(false)
  const [
    errorPersonneEntrepriseInputMailRegex,
    setErrorPersonneEntrepriseInputMailRegex,
  ] = useState(false)
  const [errorCheckTermsEntreprise, setErrorCheckTermsEntreprise] =
    useState(false)
  const [part, setPart] = useState(false)
  const [message, setMessage] = useState(false)

  const [fileUn, setFileUn] = useState(null)
  const [fileDeux, setFileDeux] = useState(null)
  const [fileTrois, setFileTrois] = useState(null)

  const [fileUnName, setFileUnName] = useState("")
  const [fileDeuxName, setFileDeuxName] = useState("")
  const [fileTroisName, setFileTroisName] = useState("")

  // @ts-ignore
  const [checked, setChecked] = useState({
    besoinsUn: false,
    besoinsDeux: false,
    besoinsTrois: false,
    besoinsQuatre: false,
    besoinsCinq: false,
    besoinsSix: false,
    besoinsSept: false,
    besoinsHuit: false,
    besoinsNeuf: false,
    besoinsDix: false,
    besoinsOnze: false,
    besoinsDouze: false,
    besoinsTreize: false,
    besoinsQuatorze: false,
    besoinsQuinze: false,
    besoinsSeize: false,
    besoinsDixSept: false,
    besoinsDixHuit: false,
    besoinsDixNeuf: false,
    besoinsVingt: false,
    besoinTextUn: false,
    besoinTextDeux: false,
    textUnChecked: false,
    textDeuxChecked: false,
    checkTerms: false,
  })

  const [devisEnCours, setDevisEnCours] = useState({
    nomEntreprise: {
      input: "",
      errorMessage: devis.nomEntreprise.errorMessage,
    },
    besoinEntreprise: {
      input: devis.besoinEntreprise.input,
      errorMessage: devis.besoinEntreprise.errorMessage,
    },
    activiteEntreprise: {
      input: "",
      errorMessage: devis.activiteEntreprise.errorMessage,
    },
    besoinsUn: {
      checked: checked.besoinsUn,
    },
    besoinsDeux: {
      checked: checked.besoinsDeux,
    },
    besoinsTrois: {
      checked: checked.besoinsTrois,
    },
    besoinsQuatre: {
      checked: checked.besoinsQuatre,
    },
    besoinsCinq: {
      checked: checked.besoinsCinq,
    },
    besoinsSix: {
      checked: checked.besoinsSix,
    },
    besoinsSept: {
      checked: checked.besoinsSept,
    },
    besoinsHuit: {
      checked: checked.besoinsHuit,
    },
    besoinsNeuf: {
      checked: checked.besoinsNeuf,
    },
    besoinsDix: {
      checked: checked.besoinsDix,
      input: devis.besoinsDix.input,
    },
    besoinsOnze: {
      checked: checked.besoinsOnze,
    },
    besoinsDouze: {
      checked: checked.besoinsDouze,
    },
    besoinsTreize: {
      checked: checked.besoinsTreize,
    },
    besoinsQuatorze: {
      checked: checked.besoinsQuatorze,
    },
    besoinsQuinze: {
      checked: checked.besoinsQuinze,
    },
    besoinsSeize: {
      checked: checked.besoinsSeize,
    },
    besoinsDixSept: {
      checked: checked.besoinsDixSept,
    },
    besoinsDixHuit: {
      checked: checked.besoinsDixHuit,
    },
    besoinsDixNeuf: {
      checked: checked.besoinsDixNeuf,
    },
    besoinsVingt: {
      checked: checked.besoinsVingt,
    },
    besoinTextUn: {
      checked: checked.besoinTextUn,
    },
    besoinTextDeux: {
      checked: checked.besoinTextDeux,
    },
    textUnChecked: {
      checked: checked.textUnChecked,
    },
    textDeuxChecked: {
      checked: checked.textDeuxChecked,
    },
    checkTerms: {
      checked: checked.checkTerms,
    },
    fonctionnalitesEntreprise: {
      input: "",
      errorMessage: devis.fonctionnalitesEntreprise.errorMessage,
    },
    pourquoiProjetEntreprise: {
      input: "",
      errorMessage: devis.pourquoiProjetEntreprise.errorMessage,
    },
    contraintesEntreprise: {
      input: "",
      errorMessage: devis.contraintesEntreprise.errorMessage,
    },
    budgetEntreprise: {
      minValue: minValueRange,
      maxValue: maxValueRange,
      errorMessage: devis.budgetEntreprise.errorMessage,
    },
    commentaireEntreprise: {
      input: "",
      errorMessage: devis.commentaireEntreprise.errorMessage,
    },
    personneEntreprise: {
      textUn: "",
      textDeux: "",
      titre: "",
      inputNom: "",
      inputPrenom: "",
      inputMail: "",
      errorMessage: devis.personneEntreprise.errorMessage,
      errorMessageInputNom: devis.personneEntreprise.errorMessageInputNom,
      errorMessageInputPrenom: devis.personneEntreprise.errorMessageInputPrenom,
      errorMessageInputMail: devis.personneEntreprise.errorMessageInputMail,
      errorMessageInputMailRegex:
        devis.personneEntreprise.errorMessageInputMailRegex,
    },
  })

  const handleChangeRangeValue = (min, max) => {
    if (minValueRange != min) {
      setMinValueRange(min)
    }
    if (maxValueRange != max) {
      setMaxValueRange(max)
    }
  }
  function renameFile(originalFile, newName) {
    return new File([originalFile], newName, {
      type: originalFile.type,
      lastModified: originalFile.lastModified,
    })
  }

  const handleUploadFileUn = (files, e) => {
    if (files[0].size > 2097152) {
      setFileUn(null)
      e.target.value = ""
      setErrorFileUnLength(true)
      setErrorFileDeuxLength(false)
      setErrorFileTroisLength(false)
    } else {
      const uuidFileUn = uuid()

      const newName = uuidFileUn + "." + files[0].name.split(".").pop()
      const newFileUn = renameFile(files[0], newName)
      // @ts-ignore
      setFileUn(newFileUn)
      setFileUnName(newFileUn.name)
      setErrorFileUnLength(false)
      setErrorFileDeuxLength(false)
      setErrorFileTroisLength(false)
    }
  }
  const handleUploadFileDeux = (files, e) => {
    if (files[0].size > 2097152) {
      setFileDeux(null)
      e.target.value = ""
      setErrorFileDeuxLength(true)
      setErrorFileUnLength(false)
      setErrorFileTroisLength(false)
    } else {
      const uuidFileDeux = uuid()

      const newName = uuidFileDeux + "." + files[0].name.split(".").pop()
      const newFileDeux = renameFile(files[0], newName)
      // @ts-ignore
      setFileDeux(newFileDeux)
      setFileDeuxName(newFileDeux.name)
      setErrorFileUnLength(false)
      setErrorFileDeuxLength(false)
      setErrorFileTroisLength(false)
    }
  }
  const handleUploadFileTrois = (files, e) => {
    if (files[0].size > 2097152) {
      setFileTrois(null)
      e.target.value = ""
      setErrorFileTroisLength(true)
      setErrorFileUnLength(false)
      setErrorFileDeuxLength(false)
    } else {
      const uuidFileTrois = uuid()

      const newName = uuidFileTrois + "." + files[0].name.split(".").pop()
      const newFileTrois = renameFile(files[0], newName)
      // @ts-ignore
      setFileTrois(newFileTrois)
      setFileTroisName(newFileTrois.name)
      setErrorFileUnLength(false)
      setErrorFileDeuxLength(false)
      setErrorFileTroisLength(false)
    }
  }

  const firstPart = (event) => {
    event.preventDefault()
    const besoins =
      devisEnCours.besoinsUn.checked ||
      devisEnCours.besoinsDeux.checked ||
      devisEnCours.besoinsTrois.checked ||
      devisEnCours.besoinsQuatre.checked ||
      devisEnCours.besoinsCinq.checked ||
      devisEnCours.besoinsSix.checked ||
      devisEnCours.besoinsSept.checked ||
      devisEnCours.besoinsHuit.checked ||
      devisEnCours.besoinsNeuf.checked ||
      devisEnCours.besoinsDix.checked ||
      devisEnCours.besoinsOnze.checked ||
      devisEnCours.besoinsDouze.checked ||
      devisEnCours.besoinsTreize.checked ||
      devisEnCours.besoinsQuatorze.checked ||
      devisEnCours.besoinsQuinze.checked ||
      devisEnCours.besoinsSeize.checked ||
      devisEnCours.besoinsDixSept.checked ||
      devisEnCours.besoinsDixHuit.checked ||
      devisEnCours.besoinsDixNeuf.checked ||
      devisEnCours.besoinsVingt.checked

    if (
      devisEnCours.activiteEntreprise.input.length != 0 &&
      devisEnCours.nomEntreprise.input.length != 0 &&
      devisEnCours.fonctionnalitesEntreprise.input.length != 0 &&
      besoins
    ) {
      setPart(!part)
    }

    if (devisEnCours.activiteEntreprise.input.length == 0)
      setErrorActiviteEntrepriseInput(true)

    if (devisEnCours.nomEntreprise.input.length == 0)
      setErrorNomEntrepriseInput(true)

    if (!besoins) setErrorBesoinsEntrepriseInput(true)

    if (devisEnCours.fonctionnalitesEntreprise.input.length == 0)
      setErrorFonctionnalitesEntrepriseInput(true)

    // activation mode dev (decommenter)
    // setPart(!part)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const budget = checked.besoinTextUn || checked.besoinTextDeux
    if (devisEnCours.personneEntreprise.inputNom.length == 0)
      setErrorPersonneEntrepriseInputNom(true)
    if (devisEnCours.personneEntreprise.inputPrenom.length == 0)
      setErrorPersonneEntrepriseInputPrenom(true)
    if (devisEnCours.personneEntreprise.inputMail.length == 0)
      setErrorPersonneEntrepriseInputMail(true)
    const personne = checked.textUnChecked || checked.textDeuxChecked
    const terms = checked.checkTerms
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (
      devisEnCours.personneEntreprise.inputMail.length > 0 &&
      !mailformat.test(devisEnCours.personneEntreprise.inputMail)
    )
      setErrorPersonneEntrepriseInputMailRegex(true)
    if (!budget) setErrorBudgetEntreprise(true)
    if (!personne) setErrorPersonneEntreprise(true)
    if (!terms) setErrorCheckTermsEntreprise(true)
    const errorSubmit =
      !budget ||
      !personne ||
      errorPersonneEntrepriseInputMail ||
      errorPersonneEntrepriseInputNom ||
      errorPersonneEntrepriseInputPrenom ||
      errorPersonneEntrepriseInputMailRegex ||
      !terms

    if (!errorSubmit) {
      const uuidEnCours = uuid()
      const data = {
        identifiant: uuidEnCours,
        nomEntreprise: {
          input: devisEnCours.nomEntreprise.input,
        },
        activiteEntreprise: {
          input: devisEnCours.activiteEntreprise.input,
        },
        besoinsUn: { checked: checked.besoinsUn },
        besoinsDeux: { checked: checked.besoinsDeux },
        besoinsTrois: { checked: checked.besoinsTrois },
        besoinsQuatre: { checked: checked.besoinsQuatre },
        besoinsCinq: { checked: checked.besoinsCinq },
        besoinsSix: { checked: checked.besoinsSix },
        besoinsSept: { checked: checked.besoinsSept },
        besoinsHuit: { checked: checked.besoinsHuit },
        besoinsNeuf: { checked: checked.besoinsNeuf },
        besoinsDix: {
          checked: checked.besoinsDix,
          input: devisEnCours.besoinsDix.input,
        },
        besoinsOnze: { checked: checked.besoinsOnze },
        besoinsDouze: { checked: checked.besoinsDouze },
        besoinsTreize: { checked: checked.besoinsTreize },
        besoinsQuatorze: { checked: checked.besoinsQuatorze },
        besoinsQuinze: { checked: checked.besoinsQuinze },
        besoinsSeize: { checked: checked.besoinsSeize },
        besoinsDixSept: { checked: checked.besoinsDixSept },
        besoinsDixHuit: { checked: checked.besoinsDixHuit },
        besoinsDixNeuf: { checked: checked.besoinsDixNeuf },
        besoinsVingt: { checked: checked.besoinsVingt },
        budgetEntreprise: {
          minValue: minValueRange,
          maxValue: maxValueRange,
        },
        commentaireEntreprise: {
          input: devisEnCours.commentaireEntreprise.input,
        },
        uploadFilesEntreprise: { fileUnName, fileDeuxName },
        contraintesEntreprise: {
          input: devisEnCours.contraintesEntreprise.input,
        },
        fonctionnalitesEntreprise: {
          input: devisEnCours.fonctionnalitesEntreprise.input,
        },
        pourquoiProjetEntreprise: {
          input: devisEnCours.activiteEntreprise.input,
        },
        personneEntreprise: {
          textUnChecked: checked.textUnChecked,
          textDeuxChecked: checked.textDeuxChecked,
          inputNom: devisEnCours.personneEntreprise.inputNom,
          inputPrenom: devisEnCours.personneEntreprise.inputPrenom,
          inputMail: devisEnCours.personneEntreprise.inputMail,
        },
      }

      fileUn && uploadFile(fileUn)
      fileDeux && uploadFile(fileDeux)
      fileTrois && uploadFile(fileTrois)
      poster("/form-devis", data).then(() => router.push("/success-message"))

      setDevisEnCours({
        nomEntreprise: {
          input: "",
          errorMessage: "",
        },
        activiteEntreprise: {
          input: "",
          errorMessage: "",
        },
        besoinEntreprise: {
          input: "",
          errorMessage: "",
        },
        besoinsUn: { checked: false },
        besoinsDeux: { checked: false },
        besoinsTrois: { checked: false },
        besoinsQuatre: { checked: false },
        besoinsCinq: { checked: false },
        besoinsSix: { checked: false },
        besoinsSept: { checked: false },
        besoinsHuit: { checked: false },
        besoinsNeuf: { checked: false },
        besoinsDix: { checked: false, input: "" },
        besoinsOnze: { checked: false },
        besoinsDouze: { checked: false },
        besoinsTreize: { checked: false },
        besoinsQuatorze: { checked: false },
        besoinsQuinze: { checked: false },
        besoinsSeize: { checked: false },
        besoinsDixSept: { checked: false },
        besoinsDixHuit: { checked: false },
        besoinsDixNeuf: { checked: false },
        besoinsVingt: { checked: false },
        besoinTextUn: {
          checked: false,
        },
        besoinTextDeux: {
          checked: false,
        },
        textUnChecked: {
          checked: false,
        },
        textDeuxChecked: {
          checked: false,
        },
        checkTerms: {
          checked: false,
        },
        fonctionnalitesEntreprise: {
          input: "",
          errorMessage: "",
        },
        pourquoiProjetEntreprise: {
          input: "",
          errorMessage: "",
        },
        contraintesEntreprise: {
          input: "",
          errorMessage: "",
        },
        budgetEntreprise: {
          minValue: minValueRange,
          maxValue: maxValueRange,
          errorMessage: "",
        },
        commentaireEntreprise: {
          input: "",
          errorMessage: "",
        },
        personneEntreprise: {
          textUn: "",
          textDeux: "",
          titre: "",
          inputNom: "",
          inputPrenom: "",
          inputMail: "",
          errorMessage: "",
          errorMessageInputNom: "",
          errorMessageInputPrenom: "",
          errorMessageInputMail: "",
          errorMessageInputMailRegex: "",
        },
      })
      // setMessage(!message)
      // window.scrollTo({
      //   top: 1400,
      //   left: 0,
      //   behavior: "smooth",
      // })
      // setTimeout(() => {
      //   router.push("/")
      // }, 5000)
    }
  }

  const handleCheck = (parse) => {
    switch (parse) {
      case 1:
        checked.besoinsUn = !checked.besoinsUn
        setErrorBesoinsEntrepriseInput(false)
        break
      case 2:
        checked.besoinsDeux = !checked.besoinsDeux
        setErrorBesoinsEntrepriseInput(false)
        break
      case 3:
        checked.besoinsTrois = !checked.besoinsTrois
        setErrorBesoinsEntrepriseInput(false)
        break
      case 4:
        checked.besoinsQuatre = !checked.besoinsQuatre
        setErrorBesoinsEntrepriseInput(false)
        break
      case 5:
        checked.besoinsCinq = !checked.besoinsCinq
        setErrorBesoinsEntrepriseInput(false)
        break
      case 6:
        checked.besoinsSix = !checked.besoinsSix
        setErrorBesoinsEntrepriseInput(false)
        break
      case 7:
        checked.besoinsSept = !checked.besoinsSept
        setErrorBesoinsEntrepriseInput(false)
        break
      case 8:
        checked.besoinsHuit = !checked.besoinsHuit
        setErrorBesoinsEntrepriseInput(false)
        break
      case 9:
        checked.besoinsNeuf = !checked.besoinsNeuf
        setErrorBesoinsEntrepriseInput(false)
        break
      case 10:
        checked.besoinsDix = !checked.besoinsDix
        setErrorBesoinsEntrepriseInput(false)
        break
      case 11:
        checked.besoinsOnze = !checked.besoinsOnze
        setErrorBesoinsEntrepriseInput(false)
        break
      case 12:
        checked.besoinsDouze = !checked.besoinsDouze
        setErrorBesoinsEntrepriseInput(false)
        break
      case 13:
        checked.besoinsTreize = !checked.besoinsTreize
        setErrorBesoinsEntrepriseInput(false)
        break
      case 14:
        checked.besoinsQuatorze = !checked.besoinsQuatorze
        setErrorBesoinsEntrepriseInput(false)
        break
      case 15:
        checked.besoinsQuinze = !checked.besoinsQuinze
        setErrorBesoinsEntrepriseInput(false)
        break
      case 16:
        checked.besoinsSeize = !checked.besoinsSeize
        setErrorBesoinsEntrepriseInput(false)
        break
      case 17:
        checked.besoinsDixSept = !checked.besoinsDixSept
        setErrorBesoinsEntrepriseInput(false)
        break
      case 18:
        checked.besoinsDixHuit = !checked.besoinsDixHuit
        setErrorBesoinsEntrepriseInput(false)
        break
      case 19:
        checked.besoinsDixNeuf = !checked.besoinsDixNeuf
        setErrorBesoinsEntrepriseInput(false)
        break
      case 20:
        checked.besoinsVingt = !checked.besoinsVingt
        setErrorBesoinsEntrepriseInput(false)
        break
      case 21:
        checked.besoinTextUn = !checked.besoinTextUn
        if (checked.besoinTextDeux)
          checked.besoinTextDeux = !checked.besoinTextDeux
        setErrorBudgetEntreprise(false)
        break
      case 22:
        checked.besoinTextDeux = !checked.besoinTextDeux
        if (checked.besoinTextUn) checked.besoinTextUn = !checked.besoinTextUn
        setErrorBudgetEntreprise(false)
        break
      case 23:
        checked.textUnChecked = !checked.textUnChecked
        if (checked.textDeuxChecked)
          checked.textDeuxChecked = !checked.textDeuxChecked
        setErrorPersonneEntreprise(false)
        setErrorPersonneEntrepriseInputNom(false)
        setErrorPersonneEntrepriseInputPrenom(false)
        setErrorPersonneEntrepriseInputMail(false)
        setErrorPersonneEntrepriseInputMailRegex(false)
        break
      case 24:
        checked.textDeuxChecked = !checked.textDeuxChecked
        if (checked.textUnChecked)
          checked.textUnChecked = !checked.textUnChecked
        setErrorPersonneEntreprise(false)
        setErrorPersonneEntrepriseInputNom(false)
        setErrorPersonneEntrepriseInputPrenom(false)
        setErrorPersonneEntrepriseInputMail(false)
        setErrorPersonneEntrepriseInputMailRegex(false)
        break
      case 25:
        checked.checkTerms = !checked.checkTerms
        setErrorCheckTermsEntreprise(false)
        break
      default:
        break
    }

    setDevisEnCours({
      ...devisEnCours,
      besoinsUn: {
        checked: checked.besoinsUn,
      },
      besoinsDeux: {
        checked: checked.besoinsDeux,
      },
      besoinsTrois: {
        checked: checked.besoinsTrois,
      },
      besoinsQuatre: {
        checked: checked.besoinsQuatre,
      },
      besoinsCinq: {
        checked: checked.besoinsCinq,
      },
      besoinsSix: {
        checked: checked.besoinsSix,
      },
      besoinsSept: {
        checked: checked.besoinsSept,
      },
      besoinsHuit: {
        checked: checked.besoinsHuit,
      },
      besoinsNeuf: {
        checked: checked.besoinsNeuf,
      },
      besoinsDix: {
        checked: checked.besoinsDix,
        input: devisEnCours.besoinsDix.input,
      },
      besoinsOnze: {
        checked: checked.besoinsOnze,
      },
      besoinsDouze: {
        checked: checked.besoinsDouze,
      },
      besoinsTreize: {
        checked: checked.besoinsTreize,
      },
      besoinsQuatorze: {
        checked: checked.besoinsQuatorze,
      },
      besoinsQuinze: {
        checked: checked.besoinsQuinze,
      },
      besoinsSeize: {
        checked: checked.besoinsSeize,
      },
      besoinsDixSept: {
        checked: checked.besoinsDixSept,
      },
      besoinsDixHuit: {
        checked: checked.besoinsDixHuit,
      },
      besoinsDixNeuf: {
        checked: checked.besoinsDixNeuf,
      },
      besoinsVingt: {
        checked: checked.besoinsVingt,
      },
      besoinTextUn: {
        checked: checked.besoinTextUn,
      },
      besoinTextDeux: {
        checked: checked.besoinTextDeux,
      },
      textUnChecked: {
        checked: checked.textUnChecked,
      },
      textDeuxChecked: {
        checked: checked.textDeuxChecked,
      },
      checkTerms: {
        checked: checked.checkTerms,
      },
    })
  }
  return (
    <div id="formulaire-devis" className="pb-0 lg:pb-24 pt-0 lg:pt-20 mx-auto">
      <div
        className="uppercase mb-12 text-center px-10 md:px-0"
        dangerouslySetInnerHTML={{ __html: devis.titre }}
      ></div>
      <div className="mb-12 h-[2px] bg-vert mx-auto mt-6 w-1/12"></div>
      <div>
        {!message ? (
          <form onSubmit={handleSubmit} noValidate className="mx-auto">
            {!part ? (
              <div className="mx-auto grid gap-4 items-center">
                {/* NOM ENTREPRISE */}
                <div className="bg-fond-gris">
                  <div className="max-w-5xl py-16 w-3/4 mx-auto">
                    <div
                      className=""
                      dangerouslySetInnerHTML={{
                        __html: devis.nomEntreprise.question,
                      }}
                    ></div>
                    <div
                      className="mt-2"
                      dangerouslySetInnerHTML={{
                        __html: devis.nomEntreprise.legend,
                      }}
                    ></div>
                    <input
                      onChange={(event) => {
                        setErrorNomEntrepriseInput(false)
                        setDevisEnCours({
                          ...devisEnCours,
                          nomEntreprise: {
                            input: event.target.value,
                            errorMessage: devis.nomEntreprise.errorMessage,
                          },
                        })
                      }}
                      type="text"
                      id={devis.nomEntreprise.titre}
                      name={devis.nomEntreprise.titre}
                      placeholder={devis.nomEntreprise.placeholder}
                      className="mt-10 shadow appearance-none border-2 border-noir-paragraphe rounded w-full py-2 px-3 h-[100px] text-noir-paragraphe leading-tight focus:outline-none focus:shadow-outline placeholder:text-noir-paragraphe"
                      value={devisEnCours.nomEntreprise.input}
                      required
                    />

                    {errorNomEntrepriseInput && (
                      <div
                        className="message-erreur mt-2 error-msg animate-pulse"
                        dangerouslySetInnerHTML={{
                          __html: devisEnCours.nomEntreprise.errorMessage,
                        }}
                      ></div>
                    )}
                  </div>
                </div>
                <div className="">
                  <div className="py-16 w-3/4 max-w-5xl mx-auto">
                    <div
                      className=""
                      dangerouslySetInnerHTML={{
                        __html: devis.activiteEntreprise.question,
                      }}
                    ></div>
                    <div
                      className="mt-2"
                      dangerouslySetInnerHTML={{
                        __html: devis.activiteEntreprise.legend,
                      }}
                    ></div>
                    <input
                      onChange={(event) => {
                        setErrorActiviteEntrepriseInput(false)
                        setDevisEnCours({
                          ...devisEnCours,
                          activiteEntreprise: {
                            input: event.target.value,
                            errorMessage: devis.activiteEntreprise.errorMessage,
                          },
                        })
                      }}
                      type="text"
                      id={devis.activiteEntreprise.titre}
                      name={devis.activiteEntreprise.titre}
                      placeholder={devis.activiteEntreprise.placeholder}
                      className="mt-10 shadow appearance-none border-2 border-noir-paragraphe rounded w-full py-2 px-3 h-[100px] text-noir-paragraphe leading-tight focus:outline-none focus:shadow-outline placeholder:text-noir-paragraphe"
                      value={devisEnCours.activiteEntreprise.input}
                      required
                    />
                    {errorActiviteEntrepriseInput && (
                      <div
                        className="message-erreur mt-2 error-msg animate-pulse"
                        dangerouslySetInnerHTML={{
                          __html: devisEnCours.activiteEntreprise.errorMessage,
                        }}
                      ></div>
                    )}
                  </div>
                </div>
                <div className="bg-fond-gris">
                  {" "}
                  <div className="max-w-5xl text-noir-paragraphe py-16 w-3/4 mx-auto">
                    <div
                      className=""
                      dangerouslySetInnerHTML={{
                        __html: devis.besoinEntreprise.question,
                      }}
                    ></div>
                    <div
                      className="mt-2"
                      dangerouslySetInnerHTML={{
                        __html: devis.besoinEntreprise.legend,
                      }}
                    ></div>
                    <div className="flex flex-wrap mt-10">
                      <div className="w-1/2 min-w-[300px]">
                        <div className="flex items-center">
                          <div
                            className="cursor-pointer min-w-[30px]"
                            onClick={() => handleCheck(1)}
                          >
                            {checked.besoinsUn ? checkedIcon : uncheckedIcon}
                          </div>
                          <div
                            className="ml-6"
                            dangerouslySetInnerHTML={{
                              __html: devis.besoinUn.text,
                            }}
                          />
                        </div>
                        <div className="flex items-center">
                          <div
                            className="cursor-pointer min-w-[30px]"
                            onClick={() => handleCheck(2)}
                          >
                            {checked.besoinsDeux ? checkedIcon : uncheckedIcon}
                          </div>
                          <div
                            className="ml-6"
                            dangerouslySetInnerHTML={{
                              __html: devis.besoinsDeux.text,
                            }}
                          />
                        </div>
                        <div className="flex items-center">
                          <div
                            className="cursor-pointer min-w-[30px]"
                            onClick={() => handleCheck(3)}
                          >
                            {checked.besoinsTrois ? checkedIcon : uncheckedIcon}
                          </div>
                          <div
                            className="ml-6"
                            dangerouslySetInnerHTML={{
                              __html: devis.besoinsTrois.text,
                            }}
                          />
                        </div>
                        <div className="flex items-center">
                          <div
                            className="cursor-pointer min-w-[30px]"
                            onClick={() => handleCheck(4)}
                          >
                            {checked.besoinsQuatre
                              ? checkedIcon
                              : uncheckedIcon}
                          </div>
                          <div
                            className="ml-6"
                            dangerouslySetInnerHTML={{
                              __html: devis.besoinsQuatre.text,
                            }}
                          />
                        </div>
                        <div className="flex items-center">
                          <div
                            className="cursor-pointer min-w-[30px]"
                            onClick={() => handleCheck(5)}
                          >
                            {checked.besoinsCinq ? checkedIcon : uncheckedIcon}
                          </div>
                          <div
                            className="ml-6"
                            dangerouslySetInnerHTML={{
                              __html: devis.besoinsCinq.text,
                            }}
                          />
                        </div>
                        <div className="flex items-center">
                          <div
                            className="cursor-pointer min-w-[30px]"
                            onClick={() => handleCheck(6)}
                          >
                            {checked.besoinsSix ? checkedIcon : uncheckedIcon}
                          </div>
                          <div
                            className="ml-6"
                            dangerouslySetInnerHTML={{
                              __html: devis.besoinsSix.text,
                            }}
                          />
                        </div>
                        <div className="flex items-center">
                          <div
                            className="cursor-pointer min-w-[30px]"
                            onClick={() => handleCheck(7)}
                          >
                            {checked.besoinsSept ? checkedIcon : uncheckedIcon}
                          </div>
                          <div
                            className="ml-6"
                            dangerouslySetInnerHTML={{
                              __html: devis.besoinsSept.text,
                            }}
                          />
                        </div>
                        <div className="flex items-center">
                          <div
                            className="cursor-pointer min-w-[30px]"
                            onClick={() => handleCheck(8)}
                          >
                            {checked.besoinsHuit ? checkedIcon : uncheckedIcon}
                          </div>
                          <div
                            className="ml-6"
                            dangerouslySetInnerHTML={{
                              __html: devis.besoinsHuit.text,
                            }}
                          />
                        </div>
                        <div className="flex items-center">
                          <div
                            className="cursor-pointer min-w-[30px]"
                            onClick={() => handleCheck(9)}
                          >
                            {checked.besoinsNeuf ? checkedIcon : uncheckedIcon}
                          </div>
                          <div
                            className="ml-6"
                            dangerouslySetInnerHTML={{
                              __html: devis.besoinsNeuf.text,
                            }}
                          />
                        </div>
                        <div className="flex flex-wrap items-center">
                          <div
                            className="cursor-pointer min-w-[30px]"
                            onClick={() => handleCheck(10)}
                          >
                            {checked.besoinsDix ? checkedIcon : uncheckedIcon}
                          </div>
                          <div
                            className="ml-6"
                            dangerouslySetInnerHTML={{
                              __html: devis.besoinsDix.text,
                            }}
                          />
                          {devisEnCours.besoinsDix.checked && (
                            <input
                              onChange={(event) =>
                                setDevisEnCours({
                                  ...devisEnCours,
                                  besoinsDix: {
                                    checked: checked.besoinsDix,
                                    input: event.target.value,
                                  },
                                })
                              }
                              type="text"
                              id={devis.besoinsDix.text}
                              name={devis.besoinsDix.text}
                              placeholder={devis.besoinsDix.placeholder}
                              className="shadow appearance-none border-[2px] border-noir-paragraphe rounded py-2 px-3 h-[30px] text-noir-paragraphe leading-tight focus:outline-none focus:shadow-outline placeholder:text-noir-paragraphe placeholder:text-xs flex-1 mr-4 mb-2 lg:mb-0"
                              value={devisEnCours.besoinsDix.input}
                              required
                            />
                          )}
                        </div>
                      </div>
                      <div className="w-1/2 min-w-[300px]">
                        <div className="flex items-center">
                          <div
                            className="cursor-pointer min-w-[30px]"
                            onClick={() => handleCheck(11)}
                          >
                            {checked.besoinsOnze ? checkedIcon : uncheckedIcon}
                          </div>
                          <div
                            className="ml-6"
                            dangerouslySetInnerHTML={{
                              __html: devis.besoinsOnze.text,
                            }}
                          />
                        </div>
                        <div className="flex items-center">
                          <div
                            className="cursor-pointer min-w-[30px]"
                            onClick={() => handleCheck(12)}
                          >
                            {checked.besoinsDouze ? checkedIcon : uncheckedIcon}
                          </div>
                          <div
                            className="ml-6"
                            dangerouslySetInnerHTML={{
                              __html: devis.besoinsDouze.text,
                            }}
                          />
                        </div>
                        <div className="flex items-center">
                          <div
                            className="cursor-pointer min-w-[30px]"
                            onClick={() => handleCheck(13)}
                          >
                            {checked.besoinsTreize
                              ? checkedIcon
                              : uncheckedIcon}
                          </div>
                          <div
                            className="ml-6"
                            dangerouslySetInnerHTML={{
                              __html: devis.besoinsTreize.text,
                            }}
                          />
                        </div>
                        <div className="flex items-center">
                          <div
                            className="cursor-pointer min-w-[30px]"
                            onClick={() => handleCheck(14)}
                          >
                            {checked.besoinsQuatorze
                              ? checkedIcon
                              : uncheckedIcon}
                          </div>
                          <div
                            className="ml-6"
                            dangerouslySetInnerHTML={{
                              __html: devis.besoinsQuatorze.text,
                            }}
                          />
                        </div>
                        <div className="flex items-center">
                          <div
                            className="cursor-pointer min-w-[30px]"
                            onClick={() => handleCheck(15)}
                          >
                            {checked.besoinsQuinze
                              ? checkedIcon
                              : uncheckedIcon}
                          </div>
                          <div
                            className="ml-6"
                            dangerouslySetInnerHTML={{
                              __html: devis.besoinsQuinze.text,
                            }}
                          />
                        </div>
                        <div className="flex items-center">
                          <div
                            className="cursor-pointer min-w-[30px]"
                            onClick={() => handleCheck(16)}
                          >
                            {checked.besoinsSeize ? checkedIcon : uncheckedIcon}
                          </div>
                          <div
                            className="ml-6"
                            dangerouslySetInnerHTML={{
                              __html: devis.besoinsSeize.text,
                            }}
                          />
                        </div>
                        <div className="flex items-center">
                          <div
                            className="cursor-pointer min-w-[30px]"
                            onClick={() => handleCheck(17)}
                          >
                            {checked.besoinsDixSept
                              ? checkedIcon
                              : uncheckedIcon}
                          </div>
                          <div
                            className="ml-6"
                            dangerouslySetInnerHTML={{
                              __html: devis.besoinsDixSept.text,
                            }}
                          />
                        </div>
                        <div className="flex items-center">
                          <div
                            className="cursor-pointer min-w-[30px]"
                            onClick={() => handleCheck(18)}
                          >
                            {checked.besoinsDixHuit
                              ? checkedIcon
                              : uncheckedIcon}
                          </div>
                          <div
                            className="ml-6"
                            dangerouslySetInnerHTML={{
                              __html: devis.besoinsDixHuit.text,
                            }}
                          />
                        </div>
                        <div className="flex items-center">
                          <div
                            className="cursor-pointer min-w-[30px]"
                            onClick={() => handleCheck(19)}
                          >
                            {checked.besoinsDixNeuf
                              ? checkedIcon
                              : uncheckedIcon}
                          </div>
                          <div
                            className="ml-6"
                            dangerouslySetInnerHTML={{
                              __html: devis.besoinsDixNeuf.text,
                            }}
                          />
                        </div>
                        <div className="flex items-center">
                          <div
                            className="cursor-pointer min-w-[30px]"
                            onClick={() => handleCheck(20)}
                          >
                            {checked.besoinsVingt ? checkedIcon : uncheckedIcon}
                          </div>
                          <div
                            className="ml-6"
                            dangerouslySetInnerHTML={{
                              __html: devis.besoinsVingt.text,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    {errorBesoinsEntrepriseInput && (
                      <div
                        className="message-erreur mt-2 error-msg animate-pulse"
                        dangerouslySetInnerHTML={{
                          __html: devisEnCours.besoinEntreprise.errorMessage,
                        }}
                      ></div>
                    )}
                  </div>
                </div>
                <div className="">
                  <div className="py-16 w-3/4 max-w-5xl mx-auto pb-10">
                    <div
                      className=""
                      dangerouslySetInnerHTML={{
                        __html: devis.fonctionnalitesEntreprise.question,
                      }}
                    ></div>
                    <div
                      className="mt-2"
                      dangerouslySetInnerHTML={{
                        __html: devis.fonctionnalitesEntreprise.legend,
                      }}
                    ></div>
                    <input
                      onChange={(event) => {
                        setErrorFonctionnalitesEntrepriseInput(false)
                        setDevisEnCours({
                          ...devisEnCours,
                          fonctionnalitesEntreprise: {
                            input: event.target.value,
                            errorMessage:
                              devis.fonctionnalitesEntreprise.errorMessage,
                          },
                        })
                      }}
                      type="text"
                      id={devis.fonctionnalitesEntreprise.titre}
                      name={devis.fonctionnalitesEntreprise.titre}
                      placeholder={devis.fonctionnalitesEntreprise.placeholder}
                      className="mt-10 shadow appearance-none border-2 border-noir-paragraphe rounded w-full py-2 px-3 h-[100px] text-noir-paragraphe leading-tight focus:outline-none focus:shadow-outline placeholder:text-noir-paragraphe"
                      value={devisEnCours.fonctionnalitesEntreprise.input}
                      required
                    />
                    {errorFonctionnalitesEntrepriseInput && (
                      <div
                        className="message-erreur mt-2 error-msg animate-pulse"
                        dangerouslySetInnerHTML={{
                          __html:
                            devisEnCours.fonctionnalitesEntreprise.errorMessage,
                        }}
                      ></div>
                    )}
                  </div>
                </div>
                <div className="bg-fond-gris">
                  <div className="py-16 w-3/4 max-w-5xl mx-auto pb-10">
                    <div
                      className=""
                      dangerouslySetInnerHTML={{
                        __html: devis.pourquoiProjetEntreprise.question,
                      }}
                    ></div>
                    <div
                      className="mt-2"
                      dangerouslySetInnerHTML={{
                        __html: devis.pourquoiProjetEntreprise.legend,
                      }}
                    ></div>
                    <input
                      onChange={(event) => {
                        setDevisEnCours({
                          ...devisEnCours,
                          pourquoiProjetEntreprise: {
                            input: event.target.value,
                            errorMessage:
                              devis.pourquoiProjetEntreprise.errorMessage,
                          },
                        })
                      }}
                      type="text"
                      id={devis.pourquoiProjetEntreprise.titre}
                      name={devis.pourquoiProjetEntreprise.titre}
                      placeholder={devis.pourquoiProjetEntreprise.placeholder}
                      className="mt-10 shadow appearance-none border-2 border-noir-paragraphe rounded w-full py-2 px-3 h-[100px] text-noir-paragraphe leading-tight focus:outline-none focus:shadow-outline placeholder:text-noir-paragraphe"
                      value={devisEnCours.pourquoiProjetEntreprise.input}
                      required
                    />
                  </div>
                </div>
                <div className="">
                  {" "}
                  <div className="py-16 w-3/4 max-w-5xl mx-auto flex flex-row">
                    <div className="grow">
                      <Link href="/">
                        <a>
                          <button
                            type="button"
                            className="group bg-transparent hover:bg-vert w-2/3 h-20 block rounded-lg border-2 border-vert"
                          >
                            <span
                              dangerouslySetInnerHTML={{
                                __html: devis.button1,
                              }}
                              className="text-vert group-hover:text-white"
                            />
                          </button>
                        </a>
                      </Link>
                    </div>
                    <button
                      type="button"
                      onClick={(event) => firstPart(event)}
                      className="group bg-transparent hover:bg-rouge-orange w-1/2 h-20 mx-auto lg:m-0 block rounded-lg border-2 border-rouge-orange"
                    >
                      <span
                        dangerouslySetInnerHTML={{ __html: devis.button2 }}
                        className=" text-rouge-orange group-hover:text-white"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              //DEBUT PARTIE 2
              <div className="mx-auto grid gap-4 items-center">
                <div className="bg-fond-gris">
                  {" "}
                  <div className="py-16 w-3/4 max-w-5xl mx-auto">
                    <div
                      className=""
                      dangerouslySetInnerHTML={{
                        __html: devis.contraintesEntreprise.question,
                      }}
                    ></div>
                    <div
                      className="mt-2"
                      dangerouslySetInnerHTML={{
                        __html: devis.contraintesEntreprise.legend,
                      }}
                    ></div>
                    <input
                      onChange={(event) => {
                        setDevisEnCours({
                          ...devisEnCours,
                          contraintesEntreprise: {
                            input: event.target.value,
                            errorMessage:
                              devis.contraintesEntreprise.errorMessage,
                          },
                        })
                      }}
                      type="text"
                      id={devis.contraintesEntreprise.titre}
                      name={devis.contraintesEntreprise.titre}
                      placeholder={devis.contraintesEntreprise.placeholder}
                      className="mt-10 shadow appearance-none border-2 border-noir-paragraphe rounded w-full py-2 px-3 h-[100px] text-noir-paragraphe leading-tight focus:outline-none focus:shadow-outline placeholder:text-noir-paragraphe"
                      value={devisEnCours.contraintesEntreprise.input}
                      required
                    />
                  </div>
                </div>
                <div className="">
                  <div className="py-16 w-3/4 max-w-5xl mx-auto">
                    <div
                      className="mb-6"
                      dangerouslySetInnerHTML={{
                        __html: devis.budgetEntreprise.question,
                      }}
                    ></div>
                    <div className="flex mb-4 items-center">
                      <div
                        className="cursor-pointer min-w-[30px]"
                        onClick={() => handleCheck(21)}
                      >
                        {checked.besoinTextUn ? checkedIcon : uncheckedIcon}
                      </div>
                      <div
                        className="ml-6"
                        dangerouslySetInnerHTML={{
                          __html: devis.besoinTextUn.text,
                        }}
                      />
                    </div>
                    <div className="flex items-center">
                      <div
                        className="cursor-pointer min-w-[30px]"
                        onClick={() => handleCheck(22)}
                      >
                        {checked.besoinTextDeux ? checkedIcon : uncheckedIcon}
                      </div>
                      <div
                        className="ml-6"
                        dangerouslySetInnerHTML={{
                          __html: devis.besoinTextDeux.text,
                        }}
                      />
                    </div>
                    {checked.besoinTextUn && (
                      <>
                        <div
                          className="pt-10"
                          dangerouslySetInnerHTML={{
                            __html: devis.budgetEntreprise.questionDeux,
                          }}
                        />
                        <MultiRangeSlider
                          minValueRange={minValueRange}
                          maxValueRange={maxValueRange}
                          min={devis.budgetEntreprise.minValue}
                          max={devis.budgetEntreprise.maxValue}
                          onChange={({ min, max }) => {
                            handleChangeRangeValue(min, max)
                          }}
                        />
                      </>
                    )}
                    {errorBudgetEntreprise && (
                      <div
                        className="message-erreur mt-2 error-msg animate-pulse"
                        dangerouslySetInnerHTML={{
                          __html: devisEnCours.budgetEntreprise.errorMessage,
                        }}
                      ></div>
                    )}
                  </div>
                </div>
                <div className="bg-fond-gris">
                  {" "}
                  <div className="py-16 w-3/4 max-w-5xl mx-auto">
                    <div
                      className=""
                      dangerouslySetInnerHTML={{
                        __html: devis.commentaireEntreprise.question,
                      }}
                    ></div>

                    <input
                      onChange={(event) => {
                        setDevisEnCours({
                          ...devisEnCours,
                          commentaireEntreprise: {
                            input: event.target.value,
                            errorMessage:
                              devisEnCours.commentaireEntreprise.errorMessage,
                          },
                        })
                      }}
                      type="text"
                      id={devis.commentaireEntreprise.titre}
                      name={devis.commentaireEntreprise.titre}
                      placeholder={devis.commentaireEntreprise.placeholder}
                      className="mt-10 shadow appearance-none border-2 border-noir-paragraphe rounded w-full py-2 px-3 h-[100px] text-noir-paragraphe leading-tight focus:outline-none focus:shadow-outline placeholder:text-noir-paragraphe"
                      value={devisEnCours.commentaireEntreprise.input}
                      required
                    />
                  </div>
                </div>
                <div className="">
                  <div className="py-16 w-3/4 max-w-5xl mx-auto">
                    <div
                      className=""
                      dangerouslySetInnerHTML={{
                        __html: devis.uploadFilesEntreprise.question,
                      }}
                    ></div>
                    <div
                      className="mt-2"
                      dangerouslySetInnerHTML={{
                        __html: devis.uploadFilesEntreprise.legend,
                      }}
                    ></div>
                    <div className="flex flex-wrap pt-10 justify-center lg:justify-start">
                      <div className="flex flex-col">
                        <FileUnUpload
                          errorMessage={
                            devis.uploadFilesEntreprise.messageErrorLenghtFile
                          }
                          setErrorFileUnLength={setErrorFileUnLength}
                          uploadFilesEntreprise={devis.uploadFilesEntreprise}
                          file={fileUn}
                          value=""
                          handleUploadFile={handleUploadFileUn}
                        />
                        {errorFileUnLength && (
                          <div
                            className="message-erreur mt-2 error-msg animate-pulse w-40 px-2 text-center"
                            dangerouslySetInnerHTML={{
                              __html:
                                devis.uploadFilesEntreprise
                                  .messageErrorLenghtFile,
                            }}
                          ></div>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <FileDeuxUpload
                          errorMessage={
                            devis.uploadFilesEntreprise.messageErrorLenghtFile
                          }
                          setErrorFileDeuxLength={setErrorFileDeuxLength}
                          uploadFilesEntreprise={devis.uploadFilesEntreprise}
                          file={fileDeux}
                          value=""
                          handleUploadFile={handleUploadFileDeux}
                        />
                        {errorFileDeuxLength && (
                          <div
                            className="message-erreur mt-2 error-msg animate-pulse w-40 px-2 text-center"
                            dangerouslySetInnerHTML={{
                              __html:
                                devis.uploadFilesEntreprise
                                  .messageErrorLenghtFile,
                            }}
                          ></div>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <FileTroisUpload
                          errorMessage={
                            devis.uploadFilesEntreprise.messageErrorLenghtFile
                          }
                          setErrorFileTroisLength={setErrorFileTroisLength}
                          uploadFilesEntreprise={devis.uploadFilesEntreprise}
                          file={fileTrois}
                          value=""
                          handleUploadFile={handleUploadFileTrois}
                        />
                        {errorFileTroisLength && (
                          <div
                            className="message-erreur mt-2 error-msg animate-pulse w-40 px-2 text-center"
                            dangerouslySetInnerHTML={{
                              __html:
                                devis.uploadFilesEntreprise
                                  .messageErrorLenghtFile,
                            }}
                          ></div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-fond-gris">
                  <div className="py-16 w-3/4 max-w-5xl mx-auto">
                    <div
                      className="mb-6"
                      dangerouslySetInnerHTML={{
                        __html: devis.personneEntreprise.titre,
                      }}
                    ></div>
                    <div className="flex flex-wrap">
                      <div className="w-full md:w-1/3 pl-10 pt-6 mb-10">
                        <div className="flex mb-4">
                          <div
                            className="cursor-pointer min-w-[30px]"
                            onClick={() => handleCheck(23)}
                          >
                            {checked.textUnChecked
                              ? checkedIconCircle
                              : uncheckedIconCircle}
                          </div>
                          <div
                            className="ml-6"
                            dangerouslySetInnerHTML={{
                              __html: devis.personneEntreprise.textUn,
                            }}
                          />
                        </div>
                        <div className="flex items-center">
                          <div
                            className="cursor-pointer min-w-[30px]"
                            onClick={() => handleCheck(24)}
                          >
                            {checked.textDeuxChecked
                              ? checkedIconCircle
                              : uncheckedIconCircle}
                          </div>
                          <div
                            className="ml-6"
                            dangerouslySetInnerHTML={{
                              __html: devis.personneEntreprise.textDeux,
                            }}
                          />
                        </div>
                      </div>
                      {errorPersonneEntreprise && (
                        <div
                          className="message-erreur mt-6 error-msg animate-pulse"
                          dangerouslySetInnerHTML={{
                            __html:
                              devisEnCours.personneEntreprise.errorMessage,
                          }}
                        ></div>
                      )}
                      {(checked.textUnChecked || checked.textDeuxChecked) && (
                        <div className="flex flex-col grow w-auto lg:min-w-[400px]">
                          <input
                            onChange={(event) => {
                              setErrorPersonneEntrepriseInputNom(false)
                              setDevisEnCours({
                                ...devisEnCours,
                                personneEntreprise: {
                                  inputNom: event.target.value,
                                  textUn: devis.personneEntreprise.textDeUn,
                                  textDeux: devis.personneEntreprise.textDeux,
                                  titre: devis.personneEntreprise.titre,
                                  inputPrenom:
                                    devisEnCours.personneEntreprise.inputPrenom,
                                  inputMail:
                                    devisEnCours.personneEntreprise.inputMail,
                                  errorMessage:
                                    devisEnCours.personneEntreprise
                                      .errorMessage,
                                  errorMessageInputNom:
                                    devisEnCours.personneEntreprise
                                      .errorMessageInputNom,
                                  errorMessageInputPrenom:
                                    devisEnCours.personneEntreprise
                                      .errorMessageInputPrenom,
                                  errorMessageInputMail:
                                    devisEnCours.personneEntreprise
                                      .errorMessageInputMail,
                                  errorMessageInputMailRegex:
                                    devisEnCours.personneEntreprise
                                      .errorMessageInputMailRegex,
                                },
                              })
                            }}
                            type="text"
                            id={devis.personneEntreprise.placeholderNom}
                            name={devis.personneEntreprise.placeholderNom}
                            placeholder={
                              devis.personneEntreprise.placeholderNom
                            }
                            className="mt-4 shadow appearance-none border-2 border-noir-paragraphe rounded-lg w-full py-2 px-3 h-[60px] text-noir-paragraphe leading-tight focus:outline-none focus:shadow-outline placeholder:text-noir-paragraphe"
                            value={devisEnCours.personneEntreprise.inputNom}
                            required
                          />
                          {errorPersonneEntrepriseInputNom && (
                            <div
                              className="message-erreur mt-2 error-msg animate-pulse"
                              dangerouslySetInnerHTML={{
                                __html:
                                  devisEnCours.personneEntreprise
                                    .errorMessageInputNom,
                              }}
                            ></div>
                          )}
                          <input
                            onChange={(event) => {
                              setErrorPersonneEntrepriseInputPrenom(false)
                              setDevisEnCours({
                                ...devisEnCours,
                                personneEntreprise: {
                                  inputPrenom: event.target.value,
                                  textUn: devis.personneEntreprise.textDeUn,
                                  textDeux: devis.personneEntreprise.textDeux,
                                  titre: devis.personneEntreprise.titre,
                                  inputNom:
                                    devisEnCours.personneEntreprise.inputNom,
                                  inputMail:
                                    devisEnCours.personneEntreprise.inputMail,
                                  errorMessage:
                                    devisEnCours.personneEntreprise
                                      .errorMessage,
                                  errorMessageInputNom:
                                    devisEnCours.personneEntreprise
                                      .errorMessageInputNom,
                                  errorMessageInputPrenom:
                                    devisEnCours.personneEntreprise
                                      .errorMessageInputPrenom,
                                  errorMessageInputMail:
                                    devisEnCours.personneEntreprise
                                      .errorMessageInputMail,
                                  errorMessageInputMailRegex:
                                    devisEnCours.personneEntreprise
                                      .errorMessageInputMailRegex,
                                },
                              })
                            }}
                            type="text"
                            id={devis.personneEntreprise.placeholderPrenom}
                            name={devis.personneEntreprise.placeholderPrenom}
                            placeholder={
                              devis.personneEntreprise.placeholderPrenom
                            }
                            className="mt-4 shadow appearance-none border-2 border-noir-paragraphe rounded-lg w-full py-2 px-3 h-[60px] text-noir-paragraphe leading-tight focus:outline-none focus:shadow-outline placeholder:text-noir-paragraphe"
                            value={devisEnCours.personneEntreprise.inputPrenom}
                            required
                          />
                          {errorPersonneEntrepriseInputPrenom && (
                            <div
                              className="message-erreur mt-2 error-msg animate-pulse"
                              dangerouslySetInnerHTML={{
                                __html:
                                  devisEnCours.personneEntreprise
                                    .errorMessageInputPrenom,
                              }}
                            ></div>
                          )}
                          <input
                            onChange={(event) => {
                              setErrorPersonneEntrepriseInputMail(false)
                              setErrorPersonneEntrepriseInputMailRegex(false)
                              setDevisEnCours({
                                ...devisEnCours,
                                personneEntreprise: {
                                  inputMail: event.target.value,
                                  textUn: devis.personneEntreprise.textDeUn,
                                  textDeux: devis.personneEntreprise.textDeux,
                                  titre: devis.personneEntreprise.titre,
                                  inputNom:
                                    devisEnCours.personneEntreprise.inputNom,
                                  inputPrenom:
                                    devisEnCours.personneEntreprise.inputPrenom,
                                  errorMessage:
                                    devisEnCours.personneEntreprise
                                      .errorMessage,
                                  errorMessageInputNom:
                                    devisEnCours.personneEntreprise
                                      .errorMessageInputNom,
                                  errorMessageInputPrenom:
                                    devisEnCours.personneEntreprise
                                      .errorMessageInputPrenom,
                                  errorMessageInputMail:
                                    devisEnCours.personneEntreprise
                                      .errorMessageInputMail,
                                  errorMessageInputMailRegex:
                                    devisEnCours.personneEntreprise
                                      .errorMessageInputMailRegex,
                                },
                              })
                            }}
                            type="text"
                            id={devis.personneEntreprise.placeholderMail}
                            name={devis.personneEntreprise.placeholderMail}
                            placeholder={
                              devis.personneEntreprise.placeholderMail
                            }
                            className="mt-4 shadow appearance-none border-2 border-noir-paragraphe rounded-lg w-full py-2 px-3 h-[60px] text-noir-paragraphe leading-tight focus:outline-none focus:shadow-outline placeholder:text-noir-paragraphe"
                            value={devisEnCours.personneEntreprise.inputMail}
                            required
                          />
                          {errorPersonneEntrepriseInputMail && (
                            <div
                              className="message-erreur mt-2 error-msg animate-pulse"
                              dangerouslySetInnerHTML={{
                                __html:
                                  devisEnCours.personneEntreprise
                                    .errorMessageInputMail,
                              }}
                            ></div>
                          )}
                          {errorPersonneEntrepriseInputMailRegex && (
                            <div
                              className="message-erreur mt-2 error-msg animate-pulse"
                              dangerouslySetInnerHTML={{
                                __html:
                                  devisEnCours.personneEntreprise
                                    .errorMessageInputMailRegex,
                              }}
                            ></div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="py-16 w-3/4 max-w-5xl mx-auto">
                    <div className="flex items-center">
                      <div
                        className="cursor-pointer min-w-[30px]"
                        onClick={() => handleCheck(25)}
                      >
                        {checked.checkTerms ? checkedIcon : uncheckedIcon}
                      </div>
                      <div
                        className="ml-6 align-center"
                        dangerouslySetInnerHTML={{
                          __html: devis.checkTermsEntreprise.text,
                        }}
                      />
                    </div>
                    {errorCheckTermsEntreprise && (
                      <div
                        className="message-erreur mt-6 error-msg animate-pulse px-2"
                        dangerouslySetInnerHTML={{
                          __html: devis.checkTermsEntreprise.errorMessage,
                        }}
                      ></div>
                    )}
                  </div>
                </div>
                <div className=""></div>
                <div className="py-16 w-3/4 max-w-5xl mx-auto flex flex-row">
                  <div className="grow">
                    <Link href="/">
                      <a>
                        <button
                          type="button"
                          onClick={(event) => firstPart(event)}
                          className="group bg-transparent hover:bg-[#2E437D] w-2/3 h-20 block rounded-lg border-2 border-[#2E437D]"
                        >
                          <span
                            dangerouslySetInnerHTML={{
                              __html: devis.button3,
                            }}
                            className=" text-[#2E437D] group-hover:text-white"
                          />
                        </button>
                      </a>
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="group bg-transparent hover:bg-rouge-orange w-1/2 h-20 mx-auto lg:m-0 block rounded-lg border-2 border-rouge-orange"
                  >
                    <span
                      dangerouslySetInnerHTML={{ __html: devis.button4 }}
                      className=" text-rouge-orange group-hover:text-white"
                    />
                  </button>
                </div>
              </div>
            )}
          </form>
        ) : (
          <div className="flex justify-center items-center">
            <div
              className="md:w-full w-3/4 mb-16 py-6 px-16 rounded-xl border-2  border-vert"
              dangerouslySetInnerHTML={{
                __html: devis.message.successMessage,
              }}
            ></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Questionnaire
