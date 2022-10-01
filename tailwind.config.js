/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js, ts, jsx, tsx}",
    "./components/**/*.{js, ts, jsx, tsx}",
  ],
  theme: {
    height: (theme) => ({
      auto: "auto",
      // @ts-ignore
      ...theme("spacing"),
      full: "100%",
      screen: "calc(var(--vh) * 100)",
    }),
    minHeight: (theme) => ({
      0: "0",
      // @ts-ignore
      ...theme("spacing"),
      full: "100%",
      screen: "calc(var(--vh) * 100)",
    }),
    extend: {
      colors: {
        "bleu-clair": "var(--bleu-clair)",
        "rouge-orange": "var(--rouge-orange)",
        blanc: "var(--blanc)",
        "bleu-fonce": "var(--bleu-fonce)",
        vert: "var(--vert)",
        "fond-orange": "var(--fond-orange)",
        "noir-style": "var(--noir-style)",
        "vert-fond": "var(--vert-fond)",
        "fond-gris": "var(--fond-gris)",
        gris: "var(--gris)",
        "bleu-fond": "var(--bleu-fond)",
        "noir-paragraphe": "var(--noir-paragraphe)",
      },
      backgroundColor: {
        "accueil-entete-mobile": "var(--rouge-orange);",
        "accueil-nous": "var(--blanc);",
        "accueil-projet": "var(--vert);",
        "accueil-pourquoi": "var(--blanc);",
        nav: "var(--fond-gris)",
        footer: "var(--bleu-fonce)",
        "intro-presentation": "var(--vert)",
        "prestation-expertise-card-close": "var(--blanc-transparent)",
        "prestation-methodologie-card-mobile": "var(--blanc-transparent)",
        "prestation-expertise-card-open": "var(--blanc-transparent-2)",
        // "entete-realisations-mobile": "var(--vert-transparent)",
      },
      backgroundImage: {
        "accueil-entete":
          "linear-gradient(to right, var(--rouge-orange) 50%, var(--blanc) 50%);",
        "split-bottom-orange-white":
          "linear-gradient(to bottom, #FC5050 50%, #FFFFFF 50%);",
        "about-mission":
          "linear-gradient(to bottom, var(--bleu-fonce) 50%, var(--blanc) 50%);",
        "devis-mission":
          "linear-gradient(to bottom, var(--bleu-fonce) 50%, var(--blanc) 50%);",
        "entete-devis":
          "linear-gradient(to right, var(--bleu-fonce-transparent-2) 50%, var(--transparent) 50%);",
        "entete-devis-mobile":
          "linear-gradient(to right, var(--bleu-fonce-transparent-2) 100%, var(--transparent) 0%);",
        "accueil-realisations":
          "linear-gradient(to right, var(--vert) 50%, var(--blanc) 50%);",
        "accueil-realisations-mobile":
          "linear-gradient(to bottom, var(--vert) 70%, var(--blanc) 30%);",
        "entete-realisations":
          "linear-gradient(to right, var(--vert-transparent) 50%, var(--transparent) 50%);",
        "entete-realisations-mobile":
          "linear-gradient(to right, var(--vert-transparent) 100%, var(--transparent) 0%);",
        "entete-a-propos":
          "linear-gradient(to right, var(--bleu-fonce-transparent) 50%, var(--transparent) 50%);",
        "entete-contact":
          "linear-gradient(to right, rgba(252, 80, 80, 0.95) 50%, rgba(255,255,255,0) 50%);",
        "entete-prestation":
          "linear-gradient(to right, rgba(65, 234, 212, 0.8) 50%, rgba(255,255,255,0) 50%);",
        "entete-a-propos-mobile":
          "linear-gradient(0deg, var(--bleu-fonce-transparent), var(--bleu-fonce-transparent));",
        "about-mission-mobile":
          "linear-gradient(0deg, rgba(46, 67, 125, 0.8), rgba(46, 67, 125, 0.8));",
        "devis-mission-mobile":
          "linear-gradient(0deg, rgba(46, 67, 125, 0.8), rgba(46, 67, 125, 0.8));",
        "orange-transparent":
          "linear-gradient(0deg, rgba(252, 80, 80, 0.8), rgba(252, 80, 80, 0.8));",
        "white-transparent":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));",
        "entete-contact-mobile":
          "linear-gradient(0deg, rgba(252, 80, 80, 0.7), rgba(252, 80, 80, 0.7));",
        "white-transparent-board":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9));",
        "entete-prestation-mobile":
          "linear-gradient(0deg, rgba(65, 234, 212, 0.95), rgba(65, 234, 212, 0.95));",
        "blue-binome":
          "linear-gradient(0deg, rgba(248, 250, 255, 0.8), rgba(248, 250, 255, 0.8));",
      },
      boxShadow: {
        inner: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
    fontFamily: {
      Humanist521BT: "Humanist521BT",
    },
  },
  plugins: [],
}
