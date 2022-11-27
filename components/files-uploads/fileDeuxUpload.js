import React, { useEffect, useState } from "react"
import LazyImage from "../../lib/lazy-images"

const noop = () => {}

export const FileDeuxUpload = ({
  value,
  onChange = noop,
  handleUploadFile,
  file,
  uploadFilesEntreprise,
  errorMessage,
  setErrorFileDeuxLength,
  ...rest
}) => {
  const iconError = LazyImage(
    uploadFilesEntreprise.iconError.data.attributes,
    "lazy",
    "20px"
  )
  const iconNuage = LazyImage(
    uploadFilesEntreprise.iconNuage.data.attributes,
    "lazy",
    "50px"
  )
  const iconFichier = LazyImage(
    uploadFilesEntreprise.iconFichier.data.attributes,
    "lazy",
    "50px"
  )
  const iconTrash = LazyImage(
    uploadFilesEntreprise.iconTrash.data.attributes,
    "lazy",
    "30px"
  )
  const [fileEnCours, setFileEnCours] = useState(null)
  useEffect(() => {
    setFileEnCours(file)
  }, [file])
  return (
    <div className="md:mr-12 mb-6">
      {Boolean(value.length) && (
        <div>Selected files: {value.map((f) => f.name).join(", ")}</div>
      )}

      {fileEnCours ? (
        <div className="w-40 h-40 bg-white rounded-lg flex flex-col items-center justify-around py-4 shadow-inner">
          <div className="">{iconFichier}</div>
          {/* <div className="flex w-full text-[#2E437D] items-center justify-center">
              <div className="">...</div> */}
          <div
            className="text-[#2E437D]"
            dangerouslySetInnerHTML={{
              // @ts-ignore
              __html: "..." + fileEnCours.name.slice(-13),
            }}
          />
          {/* </div> */}

          <div className="cursor-pointer" onClick={() => setFileEnCours(null)}>
            {iconTrash}
          </div>
        </div>
      ) : (
        <label className="cursor-pointer">
          <div className="w-40 h-40 border-dashed border-[#4087FF] rounded-lg border-[3px] flex flex-col items-center justify-around py-6">
            <div className="">{iconNuage}</div>
            <div
              className="text-[#4087FF]"
              dangerouslySetInnerHTML={{
                __html: uploadFilesEntreprise.telecharger,
              }}
            />
            <div className="flex items-center justify-center w-ful">
              <div className="mr-2">{iconError}</div>
              <div
                className="text-[#FC5050]"
                dangerouslySetInnerHTML={{
                  __html: uploadFilesEntreprise.errorLenghtFile,
                }}
              />
            </div>
          </div>
          <input
            {...rest}
            style={{ display: "none" }}
            type="file"
            onChange={(e) => {
              // @ts-ignore
              onChange(handleUploadFile([...e.target.files], e))
            }}
          />
        </label>
      )}
    </div>
  )
}

export default FileDeuxUpload
