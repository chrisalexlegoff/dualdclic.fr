// @ts-ignore
import React, { useState, useEffect } from "react"
import LazyImage from "../../lib/lazy-images"
import { useRouter } from "next/router"
import { uuid } from "./../../lib/uuid"
import { poster } from "../../api/backend"

const ContactForm = ({ contact }) => {
  const router = useRouter()
  const uncheckedIcon = LazyImage(
    contact.checkTerms.icons.data[1].attributes,
    "lazy",
    "30px"
  )
  const checkedIcon = LazyImage(
    contact.checkTerms.icons.data[0].attributes,
    "lazy",
    "30px"
  )
  const imageDeco = LazyImage(
    contact.imageDeco.data.attributes,
    "lazy",
    "80px",
    "",
    "mx-auto lg:flex hidden w-3/4 max-w-5xl justify-end"
  )
  const [errorSubmit, setErrorSubmit] = useState(false)
  const [testEnvoi, setTestEnvoi] = useState(false)
  console.log(errorSubmit)

  const [errorContactFormInputNom, setErrorContactFormInputNom] =
    useState(false)
  const [errorContactFormInputMessage, setErrorContactFormInputMessage] =
    useState(false)
  const [errorContactFormInputMail, setErrorContactFormInputMail] =
    useState(false)
  const [errorContactFormInputMailRegex, setErrorContactFormInputMailRegex] =
    useState(false)
  const [errorCheckTermsContactForm, setErrorCheckTermsContactForm] =
    useState(false)
  useEffect(() => {
    setErrorSubmit(
      errorContactFormInputMail ||
        errorContactFormInputNom ||
        errorContactFormInputMessage ||
        errorContactFormInputMailRegex ||
        errorCheckTermsContactForm
    )
  }, [
    errorContactFormInputMail,
    errorContactFormInputNom,
    errorContactFormInputMessage,
    errorContactFormInputMailRegex,
    errorCheckTermsContactForm,
  ])
  const [message, setMessage] = useState(false)

  // @ts-ignore
  const [checked, setChecked] = useState({
    checkTerms: false,
  })

  const [contactEnCours, setContactEnCours] = useState({
    inputNom: "",
    inputMessage: "",
    inputMail: "",
    checkedTerms: false,
  })

  const handleChangeNom = (event) => {
    event?.target.value.length == 0
      ? setErrorContactFormInputNom(true)
      : setErrorContactFormInputNom(false)
    setContactEnCours({
      ...contactEnCours,
      inputNom: event.target.value,
    })
  }

  const verifMailRegex = (mail) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    mail.length > 0 && !mailformat.test(mail)
      ? setErrorContactFormInputMailRegex(true)
      : setErrorContactFormInputMailRegex(false)
  }

  const handleChangeMail = (event) => {
    verifMailRegex(event?.target.value)
    event?.target.value.length == 0
      ? setErrorContactFormInputMail(true)
      : setErrorContactFormInputMail(false)

    setContactEnCours({
      ...contactEnCours,
      inputMail: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (contactEnCours.inputNom.length == 0) setErrorContactFormInputNom(true)
    if (contactEnCours.inputMessage.length == 0)
      setErrorContactFormInputMessage(true)
    if (contactEnCours.inputMail.length == 0) setErrorContactFormInputMail(true)
    const terms = checked.checkTerms
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (
      contactEnCours.inputMail.length > 0 &&
      !mailformat.test(contactEnCours.inputMail)
    )
      setErrorContactFormInputMailRegex(true)
    if (!terms) setErrorCheckTermsContactForm(true)
    if (!errorSubmit) {
      setTestEnvoi(true)
      const uuidEnCours = uuid()
      console.log(contactEnCours)
      const data = {
        identifiant: uuidEnCours,
        contact: {
          titre: contact.titre,
          personne: {
            inputNom: contactEnCours.inputNom,
            inputMail: contactEnCours.inputMail,
            inputMessage: contactEnCours.inputMessage,
          },
        },
      }

      testEnvoi &&
        poster("/contact-forms", data).then(() =>
          router.push("/success-message")
        )
      // poster("/contact-forms", data).then(() => setMessage(!message))

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

  const handleCheck = () => {
    checked.checkTerms = !checked.checkTerms
    setErrorCheckTermsContactForm(false)

    setContactEnCours({
      ...contactEnCours,
      checkedTerms: checked.checkTerms,
    })
  }
  return (
    <div id="formulaire-contact" className="max-w-9xl pb-24 pt-24 mx-auto">
      <div
        className="uppercase mb-12 text-center"
        dangerouslySetInnerHTML={{ __html: contact.titre }}
      ></div>
      <div className="mb-12 h-[2px] bg-vert mx-auto mt-6 w-1/12"></div>
      <div>
        {!message ? (
          <>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="mx-auto w-4/5 lg:w-3/4 max-w-[600px]"
            >
              <div className="mx-auto grid gap-4 items-center">
                <div className="pb-10">
                  <div className="flex flex-col grow min-w-full lg:min-w-[400px]">
                    <input
                      onChange={(event) => {
                        handleChangeNom(event)
                        // setErrorContactFormInputNom(false)
                        // setContactEnCours({
                        //   ...contactEnCours,
                        //   inputNom: event.target.value,
                        // })
                      }}
                      type="text"
                      id={contact.personne.placeholderNom}
                      name={contact.personne.placeholderNom}
                      placeholder={contact.personne.placeholderNom}
                      className="mt-4 shadow appearance-none border-2 border-bleu-fonce rounded-lg w-full py-2 px-3 h-[60px] text-bleu-fonce leading-tight focus:outline-none focus:shadow-outline placeholder:text-bleu-fonce"
                      value={contactEnCours.inputNom}
                      required
                    />
                    {errorContactFormInputNom && (
                      <div
                        className="message-erreur mt-2 animate-pulse"
                        dangerouslySetInnerHTML={{
                          __html: contact.personne.errorMessageInputNom,
                        }}
                      ></div>
                    )}
                    <input
                      onChange={(event) => {
                        handleChangeMail(event)
                        // setErrorContactFormInputMail(false)
                        // setErrorContactFormInputMailRegex(false)
                        // setContactEnCours({
                        //   ...contactEnCours,
                        //   inputMail: event.target.value,
                        // })
                      }}
                      type="text"
                      id={contact.personne.placeholderMail}
                      name={contact.personne.placeholderMail}
                      placeholder={contact.personne.placeholderMail}
                      className="mt-4 shadow appearance-none border-2 border-bleu-fonce rounded-lg w-full py-2 px-3 h-[60px] text-bleu-fonce leading-tight focus:outline-none focus:shadow-outline placeholder:text-bleu-fonce"
                      value={contactEnCours.inputMail}
                      required
                    />
                    {errorContactFormInputMail && (
                      <div
                        className="message-erreur mt-2 animate-pulse"
                        dangerouslySetInnerHTML={{
                          __html: contact.personne.errorMessageInputMail,
                        }}
                      ></div>
                    )}
                    {errorContactFormInputMailRegex && (
                      <div
                        className="message-erreur mt-2 animate-pulse"
                        dangerouslySetInnerHTML={{
                          __html: contact.personne.errorMessageInputMailRegex,
                        }}
                      ></div>
                    )}
                    <textarea
                      onChange={(event) => {
                        setErrorContactFormInputMessage(false)
                        setContactEnCours({
                          ...contactEnCours,
                          inputMessage: event.target.value,
                        })
                      }}
                      style={{ resize: "none" }}
                      rows={6}
                      cols={50}
                      id={contact.personne.placeholderMessage}
                      name={contact.personne.placeholderMessage}
                      placeholder={contact.personne.placeholderMessage}
                      className="mt-4 shadow appearance-none border-2 border-bleu-fonce rounded-lg w-full py-2 px-3 h-[140px] text-bleu-fonce leading-tight focus:outline-none focus:shadow-outline placeholder:text-bleu-fonce"
                      value={contactEnCours.inputMessage}
                      required
                    />
                    {errorContactFormInputMessage && (
                      <div
                        className="message-erreur mt-2 animate-pulse"
                        dangerouslySetInnerHTML={{
                          __html: contact.personne.errorMessageInputMessage,
                        }}
                      ></div>
                    )}
                  </div>
                </div>
                <div className="pb-10">
                  <div className="flex">
                    <div
                      className="cursor-pointer w-2/12 lg:w-1/12 lg:pt-1 pt-2"
                      onClick={() => handleCheck()}
                    >
                      {checked.checkTerms ? checkedIcon : uncheckedIcon}
                    </div>
                    <div
                      className="text-justify ml-4"
                      dangerouslySetInnerHTML={{
                        __html: contact.checkTerms.text,
                      }}
                    />
                  </div>
                  {errorCheckTermsContactForm && (
                    <div
                      className="message-erreur mt-6 animate-pulse px-2"
                      dangerouslySetInnerHTML={{
                        __html: contact.checkTerms.errorMessage,
                      }}
                    ></div>
                  )}
                </div>

                <button
                  type="submit"
                  className="group bg-transparent hover:bg-bleu-fonce lg:w-1/2 w-full h-20 mx-auto lg:m-0 block rounded-lg border-2 border-bleu-fonce"
                >
                  <span
                    dangerouslySetInnerHTML={{ __html: contact.button }}
                    className="text-bleu-fonce group-hover:text-white"
                  />
                </button>
              </div>
            </form>
            {imageDeco}
          </>
        ) : (
          <div className="flex justify-center items-center">
            <div
              className="py-6 px-16 rounded-xl border-2 border-vert"
              dangerouslySetInnerHTML={{
                __html: contact.successMessage,
              }}
            ></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactForm
