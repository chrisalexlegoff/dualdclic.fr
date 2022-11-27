export const sendContactForm = async (data) =>
  fetch("/api/contact-form", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })

export const sendDevisForm = async (data) =>
  fetch("/api/devis-form", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
