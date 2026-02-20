console.log(regionsData)

const mainTitle = document.getElementById("main-title")
const regionsContainer = document.getElementById("regions-container")
const regionCard = document.getElementById("region-card")

function showRegion(regionKey) {

  const data = regionsData[regionKey]

  let html = `<h2>🍷 ${data.nom}</h2>`

  if (data.histoire) {
    html += `
      <h3>Histoire</h3>
      <p>${data.histoire}</p>
    `
  }

  if (data.situation) {
    html += `
      <h3>Situation</h3>
      <p>${data.situation}</p>
    `
  }

  if (data.climat) {
    html += `
      <h3>Climat</h3>
      <p>${data.climat}</p>
    `
  }

  if (data.cepages) {
    html += `
      <h3>Cépages principaux</h3>
      <p>${data.cepages}</p>
    `
  }

  regionCard.innerHTML = html

  regionCard.classList.remove("hidden")
  regionCard.classList.remove("show")

  setTimeout(() => {
    regionCard.classList.add("show")
  }, 50)
}

function generateButtons() {

  for (const key in regionsData) {

    const btn = document.createElement("button")
    btn.textContent = regionsData[key].nom

    btn.addEventListener("click", () => {

      showRegion(key)

      const allButtons = regionsContainer.querySelectorAll("button")
      allButtons.forEach(b => b.classList.remove("active"))

      btn.classList.add("active")

      mainTitle.textContent = "Explorer " + regionsData[key].nom + " 🍷"
    })

    regionsContainer.appendChild(btn)
  }
}

function generateButtons() {

  for (const key in regionsData) {

    const btn = document.createElement("button")
    btn.textContent = regionsData[key].nom

    btn.addEventListener("click", () => {

      showRegion(key)

      const allButtons = regionsContainer.querySelectorAll("button")
      allButtons.forEach(b => b.classList.remove("active"))

      btn.classList.add("active")

      mainTitle.textContent = "Explorer " + regionsData[key].nom + " 🍷"
    })

    regionsContainer.appendChild(btn)
  }
}

generateButtons()