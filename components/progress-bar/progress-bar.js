import React from "react"

export const ReadingProgress = ({ target }) => {
  const [readingProgress, setReadingProgress] = React.useState(0)
  const scrollListener = () => {
    if (!target.current) {
      return
    }

    const element = target.current
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight
    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0

    if (windowScrollTop === 0) {
      return setReadingProgress(0)
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100)
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100)
  }

  React.useEffect(() => {
    window.addEventListener("scroll", scrollListener)
    return () => window.removeEventListener("scroll", scrollListener)
  })

  return (
    <>
      {readingProgress > 0 && (
        <>
          <div
            className={`hidden lg:block h-[6px] bg-bleu-clair`}
            style={{ width: `${readingProgress}%` }}
          />

          <div
            className={`fixed lg:hidden top-0 h-[5px] bg-bleu-clair z-50`}
            style={{ width: `${readingProgress}%` }}
          />
        </>
      )}
    </>
  )
}
