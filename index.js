const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2540e85d64msh8542e13520f6cdfp1b717ajsn1c6ce2f605f9',
    'X-RapidAPI-Host': 'ipstack1.p.rapidapi.com'
  }
}

const fetchIpInfo = ip => {
  fetch(`https://ipstack1.p.rapidapi.com/api.ipstack.com/${ip}`, OPTIONS)
    .then(res => res.json())
    .catch(err => console.error(err))
}

// const $ = selector => document.querySelector(selector)
// const $form = $("#form") 
// Esta es una manera de hacer lo que se encuentra aquí abajo pero de manera más resumida.

const $form = document.querySelector("#form")
const $input = document.querySelector("#input")
const $sumbit = document.querySelector("#sumbit")
const $results = document.querySelector("#results")

$form.addEventListener("sumbit", async (event) => {
  event.preventDefault() // Es para evitar que se refresque toda la página
  const { value } = $input
  if (!value) return

  $sumbit.setAttribute('disabled', ' ')
  $sumbit.setAttribute('aria-busy', 'true')


  const ipInfo = await fetchIpInfo(value)

  if (ipInfo) {
    $results.innerHTML = JSON.strindify(ipInfo, null, 2)
  }

  $sumbit.removeAttribute('disabled')
  $sumbit.removeAttribute('aria-busy')


})