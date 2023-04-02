
const OPTIONS = {
  method: 'GET',
  // headers: {
  //   'X-RapidAPI-Key': '2540e85d64msh8542e13520f6cdfp1b717ajsn1c6ce2f605f9',
  //   'X-RapidAPI-Host': 'ipstack1.p.rapidapi.com'
  // }
}

const fetchIpInfo = async (id) => {
  try {
    const getInfo = await fetch(`https://dummyjson.com/products/${id}`, OPTIONS)
    const data = getInfo.json()
    console.log(data)
    return data
  } catch (err) {
    console.log(err)
  }
}

// const $ = selector => document.querySelector(selector)
// const $form = $("#form") 
// Esta es una manera de hacer lo que se encuentra aquí abajo pero de manera más resumida.

const $form = document.querySelector("#form")
const $input = document.querySelector("#input")
const $sumbit = document.querySelector("#sumbit")
const $results = document.querySelector("#results")


async function logSomething(e) {
  e.preventDefault() // Es para evitar que se refresque toda la página
  console.log('something');
  const { value: id } = $input


  if (!id) return

  $sumbit.setAttribute('disabled', ' ')
  $sumbit.setAttribute('aria-busy', 'true')


  const productInfo = await fetchIpInfo(id)

  console.log(productInfo)

  // if (ipInfo) {
  //   $results.innerHTML = JSON.strindify(ipInfo, null, 2)
  // }


  // Crear un div 
  // A ese div hacerle un append de un titulo para el nombre del producto
  // Y dos parrafor para  el precio y la descripcion
  // Mostrar ese div en pantalla


  // $sumbit.removeAttribute('disabled')
  // $sumbit.removeAttribute('aria-busy')

}

$form.addEventListener('submit', logSomething)

// $form.addEventListener("sumbit", async (event) => {
//   console.log("ejecutando");
//   const { value } = $input
//   if (!value) return

//   $sumbit.setAttribute('disabled', ' ')
//   $sumbit.setAttribute('aria-busy', 'true')


//   const ipInfo = await fetchIpInfo(value)

//   if (ipInfo) {
//     $results.innerHTML = JSON.strindify(ipInfo, null, 2)
//   }

//   $sumbit.removeAttribute('disabled')
//   $sumbit.removeAttribute('aria-busy')

//   event.preventDefault() // Es para evitar que se refresque toda la página

// })