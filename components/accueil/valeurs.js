import Link from "next/link"
import React from "react"
import FlipCard from "../flip-cards/FlipCard"

const Valeurs = ({ valeurs }) => {
  const cards = valeurs.flipCard
  return (
    <div
      id="valeurs"
      style={{
        backgroundImage: `var(--bg-bleu-fonce),url(${
          process.env.NEXT_PUBLIC_URL + valeurs.images.data[0].attributes.url
        })`,
      }}
      className="bg-cover bg-bottom bg-no-repeat py-32 lg:py-48"
    >
      <div className="max-w-9xl mx-auto grid items-center text-center">
        <div className="row-start-1 mx-auto w-3/4">
          <div
            className="uppercase"
            dangerouslySetInnerHTML={{ __html: valeurs.titre2 }}
          ></div>
          <div className="h-[1px] bg-vert w-[100px] lg:w-[200px] mx-auto mt-10"></div>
        </div>
        <div className="row-start-2 mx-auto lg:w-1/2 w-3/4">
          <div
            className="my-12 uppercase text-justify"
            dangerouslySetInnerHTML={{ __html: valeurs.titre3 }}
          ></div>
        </div>
        <div className="row-start-3 mx-auto lg:w-1/2 w-3/4">
          <div
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: valeurs.paragraphe }}
          ></div>
        </div>{" "}
        <div className="row-start-6 flex flex-wrap mx-auto mt-8 mb-12 w-full lg:w-11/12 justify-evenly">
          {cards.map((card) => (
            <FlipCard key={card.id} card={card} />
          ))}
        </div>
        <div className="mx-auto lg:w-1/3 w-3/4 row-start-7">
          <Link href="/a-propos">
            <a>
              <button className="group bg-transparent lg:hover:bg-rouge-orange h-20 mx-auto w-full block rounded-lg border-2 border-blanc lg:hover:border-rouge-orange">
                <span
                  dangerouslySetInnerHTML={{ __html: valeurs.button }}
                  className="text-blanc"
                />
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Valeurs
