const titulo = document.getElementById('titulo')
const continuar = document.getElementById('continuar1')
const main = document.getElementById('main')
const detalle = document.getElementById('detalle')
const detalleCerrar = document.getElementById('detalle-cerrar')
const detalleInfo = document.getElementById('detalle-info')
const detalleSolar = document.getElementById('detalle-solar')
const detalleHidraulica = document.getElementById('detalle-hidraulica')
const detalleBiomasa = document.getElementById('detalle-biomasa')
const detalleEolica= document.getElementById('detalle-eolica')
const detalleGeotermica = document.getElementById('detalle-geotermica')

const menuItem = document.getElementsByClassName('menu-item')
const menuInfo = document.getElementsByClassName('menu-info')
const menuSolar = document.getElementsByClassName('menu-solar')
const menuHidraulica = document.getElementsByClassName('menu-hidraulica')
const menuBiomasa = document.getElementsByClassName('menu-biomasa')
const menuEolica = document.getElementsByClassName('menu-eolica')
const menuGeotermica = document.getElementsByClassName('menu-geotermica')

const nube = document.getElementById('solar-info-1')
const solar2 = document.getElementById('solar-info-2')
const solar3 = document.getElementById('solar-info-3')

const viento = document.getElementById('eolica-info-2')
const eolica2 = document.getElementById('eolica-info-1')
const eolica3 = document.getElementById('eolica-info-3')

const tubo = document.getElementById('geotermica-info-2')
const geotermica2 = document.getElementById('geotermica-info-1')
const geotermica3 = document.getElementById('geotermica-info-3')

const agua = document.getElementById('hidraulica-info-2')
const hidraulica2 = document.getElementById('hidraulica-info-1')
const hidraulica3 = document.getElementById('hidraulica-info-3')

const masa = document.getElementById('biomasa-info-2')
const biomasa2 = document.getElementById('biomasa-info-1')
const biomasa3 = document.getElementById('biomasa-info-3')

/////////////////////////////////////////////////////////

const textoSolar = document.getElementById('texto-solar')
const textoSolar2 = document.getElementById('texto-solar-1')
const textoSolar3 = document.getElementById('texto-solar-2')
const textoSolar4 = document.getElementById('texto-solar-3')
const textoSolar5 = document.getElementById('texto-solar-4')
const textoSolar6 = document.getElementById('texto-solar-5')
const textoSolar7 = document.getElementById('texto-solar-31')
const textoSolar8 = document.getElementById('texto-solar-32')
const graficoSolar = document.getElementById('solar-grafico')

//////////////////////////////////////////////////////////////



const estadisticaSolar = document.getElementById('solar-contenedor')
const estadisticaSolar1 = document.getElementById('solar-contenedor1')
const estadisticaSolar2 = document.getElementById('solar-contenedor2')
const estadisticaSolar3 = document.getElementById('solar-contenedor3')
const estadisticaSolar4 = document.getElementById('contenedor-solar-grande')


//////////////////////////////////////////////////////////////////////


const textoAgua = document.getElementById('texto-agua')
const textoAgua2 = document.getElementById('texto-agua-1')
const textoAgua3 = document.getElementById('texto-agua-2')
const textoAgua4 = document.getElementById('texto-agua-3')
const textoAgua5 = document.getElementById('texto-agua-4')
const textoAgua6 = document.getElementById('texto-agua-5')
const textoAgua7 = document.getElementById('texto-agua-31')
const textoAgua8 = document.getElementById('texto-agua-32')
const graficoAgua = document.getElementById('agua-grafico')



//////////////////////////////////////////////////////////////////

const estadisticaHidraulica = document.getElementById('hidraulica-contenedor')
const estadisticaHidraulica1 = document.getElementById('hidraulica-contenedor1')
const estadisticaHidraulica2 = document.getElementById('hidraulica-contenedor2')
const estadisticaHidraulica3 = document.getElementById('hidraulica-contenedor3')
const estadisticaHidraulica4 = document.getElementById('contenedor-hidraulica-grande')


////////////////////////////////////////////////////////////////////


const estadisticaEolica = document.getElementById('eolica-contenedor')
const estadisticaEolica1 = document.getElementById('eolica-contenedor1')
const estadisticaEolica2 = document.getElementById('eolica-contenedor2')
const estadisticaEolica3 = document.getElementById('eolica-contenedor3')
const estadisticaEolica4 = document.getElementById('contenedor-eolica-grande')


const textoEolica = document.getElementById('texto-eolica')
const textoEolica2 = document.getElementById('texto-eolica-1')
const textoEolica3 = document.getElementById('texto-eolica-2')
const textoEolica4 = document.getElementById('texto-eolica-3')
const textoEolica5 = document.getElementById('texto-eolica-4')
const textoEolica6 = document.getElementById('texto-eolica-5')
const textoEolica7 = document.getElementById('texto-eolica-31')
const textoEolica8 = document.getElementById('texto-eolica-32')
const graficoEolica = document.getElementById('eolica-grafico')





///////////////////////////////////////////////////////////////////

const textoBiomasa = document.getElementById('texto-biomasa')
const textoBiomasa2 = document.getElementById('texto-biomasa-1')
const textoBiomasa3 = document.getElementById('texto-biomasa-2')
const textoBiomasa4 = document.getElementById('texto-biomasa-3')
const textoBiomasa5 = document.getElementById('texto-biomasa-4')
const textoBiomasa6 = document.getElementById('texto-biomasa-5')
const textoBiomasa7 = document.getElementById('texto-biomasa-31')
const textoBiomasa8 = document.getElementById('texto-biomasa-32')

const graficoBiomasa = document.getElementById('biomasa-grafico')


const estadisticaBiomasa = document.getElementById('biomasa-contenedor')
const estadisticaBiomasa1 = document.getElementById('biomasa-contenedor1')
const estadisticaBiomasa2 = document.getElementById('biomasa-contenedor2')
const estadisticaBiomasa3 = document.getElementById('biomasa-contenedor3')
const estadisticaBiomasa4 = document.getElementById('contenedor-biomasa-grande')


////////////////////////////////////


const estadisticaGeotermica = document.getElementById('geotermica-contenedor')
const estadisticaGeotermica1 = document.getElementById('geotermica-contenedor1')
const estadisticaGeotermica2 = document.getElementById('geotermica-contenedor2')
const estadisticaGeotermica3 = document.getElementById('geotermica-contenedor3')
const estadisticaGeotermica4 = document.getElementById('contenedor-geotermica-grande')


const textoGeotermica = document.getElementById('texto-geotermica')
const textoGeotermica2 = document.getElementById('texto-geotermica-1')
const textoGeotermica3 = document.getElementById('texto-geotermica-2')
const textoGeotermica4 = document.getElementById('texto-geotermica-3')
const textoGeotermica5 = document.getElementById('texto-geotermica-4')
const textoGeotermica6 = document.getElementById('texto-geotermica-5')
// const textoGeotermica7 = document.getElementById('texto-geotermica-31')
// const textoGeotermica8 = document.getElementById('texto-geotermica-32')
const graficoGeotermica = document.getElementById('geotermica-grafico')


////////////////////////////////////////////////////////////////////////
const estadisticaInfo = document.getElementById('info-contenedor')
const estadisticaInfo1 = document.getElementById('info-contenedor1')
const estadisticaInfo2 = document.getElementById('info-contenedor2')
const estadisticaInfo3 = document.getElementById('info-contenedor3')
const estadisticaInfo4 = document.getElementById('contenedor-info-grande')


const textoInfo = document.getElementById('texto-info')
const textoInfo2 = document.getElementById('texto-info-1')
const textoInfo3 = document.getElementById('texto-info-2')
const textoInfo4 = document.getElementById('texto-info-3')
const textoInfo5 = document.getElementById('texto-info-4')
const textoInfo6 = document.getElementById('texto-info-5')
const graficoinfo = document.getElementById('geotermica-grafico')




///////////////////////////////////////////

const infoColor = document.getElementById('menu-info-color')
const infoSinColor = document.getElementById('menu-sinColor')
const solarColor = document.getElementById('menu-solar-color')
const solarSinColor = document.getElementById('solar-sinColor')
const hidraulicaColor = document.getElementById('menu-hidraulica-color')
const hidraulicaSinColor = document.getElementById('hidraulica-sinColor')
const biomasaColor = document.getElementById('menu-biomasa-color')
const biomasaSinColor = document.getElementById('biomasa-sinColor')
const eolicaColor = document.getElementById('menu-eolica-color')
const eolicaSinColor = document.getElementById('eolica-sinColor')
const geotermicaColor = document.getElementById('menu-geotermica-color')
const geotermicaSinColor = document.getElementById('geotermica-sinColor')


const infoColor1 = document.getElementById('info1-color')
const infoSinColor1 = document.getElementById('info1-sinColor')
const solarColor1 = document.getElementById('solar1-color')
const solarSinColor1 = document.getElementById('solar1-sinColor')
const hidraulicaColor1 = document.getElementById('hidraulica1-color')
const hidraulicaSinColor1 = document.getElementById('hidraulica1-sinColor')
const biomasaColor1 = document.getElementById('biomasa1-color')
const biomasaSinColor1 = document.getElementById('biomasa1-sinColor')
const eolicaColor1 = document.getElementById('eolica1-color')
const eolicaSinColor1 = document.getElementById('eolica1-sinColor')
const geotermicaColor1 = document.getElementById('geotermica1-color')
const geotermicaSinColor1 = document.getElementById('geotermica1-sinColor')


const textoContinuar = document.getElementById('continuar')

const continuarDetalle = document.getElementById('continuar2')



const info = document.getElementById('info-1')

var visitoInfo = false
var visitoSolar = false
var visitoHidraulica = false
var visitoBiomasa = false
var visitoGeotermica = false
var visitoEolica = false;

let paso = 1
let pasoBiomasa = 1
let pasoHidraulica = 1
let pasoGeotermica = 1
let pasoViento = 1


let ultimoItem = detalleInfo

info.addEventListener('click', () => {
  info.classList.remove('mostrar')

  textoInfo.classList.add('visibilidad')
  textoInfo2.classList.add('visibilidad')
  textoInfo3.classList.add('visibilidad')
  textoInfo4.classList.add('visibilidad')
  textoInfo5.classList.add('visibilidad')
  textoInfo6.classList.add('visibilidad')
  estadisticaInfo.classList.add('mostrar')
  estadisticaInfo1.classList.add('mostrar')
  estadisticaInfo2.classList.add('mostrar')
  estadisticaInfo3.classList.add('mostrar')
  estadisticaInfo4.classList.add('mostrar')

})

// titulo.addEventListener('click', () => {
//   main.classList.add('mostrar-main')
// })

continuar.addEventListener('click', () => {
  main.classList.add('mostrar-main')
})

for (let i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener('click', () => {
    detalle.classList.add('mostrar')
  })
}

detalleCerrar.addEventListener('click', () => {
  detalle.classList.remove('mostrar')
})

for (let i = 0; i < menuInfo.length; i++) {
  menuInfo[i].addEventListener('click', () => {
      visitoInfo = true
      ultimoItem.classList.remove('mostrar')
      detalleInfo.classList.add('mostrar')
      
      infoColor.classList.add('mostrar')
      infoSinColor.classList.remove('mostrar')

      infoColor1.classList.add('mostrar1')
      infoSinColor1.classList.remove('mostrar1')

      ultimoItem = detalleInfo
      if (visitoInfo && visitoBiomasa && visitoSolar && visitoHidraulica && visitoGeotermica && visitoEolica){
        detalleCerrar.classList.add('verde')
        textoContinuar.classList.remove('continuar')
        textoContinuar.classList.add('visibleContinuar')
        

        setTimeout(function(){
          continuarDetalle.classList.add('mostrar')
          },7000)
        
      }
  })
}

for (let i = 0; i < menuSolar.length; i++) {
  menuSolar[i].addEventListener('click', () => {
    visitoSolar = true
    ultimoItem.classList.remove('mostrar')
    detalleSolar.classList.add('mostrar')

    solarColor.classList.add('mostrar')
    solarSinColor.classList.remove('mostrar')

    solarColor1.classList.add('mostrar1')
    solarSinColor1.classList.remove('mostrar1')

    ultimoItem = detalleSolar
    if (visitoInfo && visitoBiomasa && visitoSolar && visitoHidraulica && visitoGeotermica && visitoEolica){
      detalleCerrar.classList.add('verde')
      textoContinuar.classList.remove('continuar')
      textoContinuar.classList.add('visibleContinuar')

      setTimeout(function(){
        continuarDetalle.classList.add('mostrar')
        },7000)
    }
  })
}

for (let i = 0; i < menuHidraulica.length; i++) {
  menuHidraulica[i].addEventListener('click', () => {
    visitoHidraulica = true
    ultimoItem.classList.remove('mostrar')
    detalleHidraulica.classList.add('mostrar')

    hidraulicaColor.classList.add('mostrar')
    hidraulicaSinColor.classList.remove('mostrar')

    hidraulicaColor1.classList.add('mostrar1')
    hidraulicaSinColor1.classList.remove('mostrar1')

    ultimoItem = detalleHidraulica
    if (visitoInfo && visitoBiomasa && visitoSolar && visitoHidraulica && visitoGeotermica && visitoEolica){
      detalleCerrar.classList.add('verde')
      textoContinuar.classList.remove('continuar')
      textoContinuar.classList.add('visibleContinuar')


      setTimeout(function(){
        continuarDetalle.classList.add('mostrar')
        },7000)

    }
  })
}

for (let i = 0; i < menuBiomasa.length; i++) {
  menuBiomasa[i].addEventListener('click', () => {
    visitoBiomasa = true
    ultimoItem.classList.remove('mostrar')
    detalleBiomasa.classList.add('mostrar')

    biomasaColor.classList.add('mostrar')
    biomasaSinColor.classList.remove('mostrar')

    biomasaColor1.classList.add('mostrar1')
    biomasaSinColor1.classList.remove('mostrar1')

    ultimoItem = detalleBiomasa
    if (visitoInfo && visitoBiomasa && visitoSolar && visitoHidraulica && visitoGeotermica && visitoEolica){
      detalleCerrar.classList.add('verde')
      textoContinuar.classList.remove('continuar')
      textoContinuar.classList.add('visibleContinuar')


      setTimeout(function(){
        continuarDetalle.classList.add('mostrar')
        },7000)


    }
  })
}

for (let i = 0; i < menuEolica.length; i++) {
  menuEolica[i].addEventListener('click', () => {
    visitoEolica = true
    ultimoItem.classList.remove('mostrar')
    detalleEolica.classList.add('mostrar')

    eolicaColor.classList.add('mostrar')
    eolicaSinColor.classList.remove('mostrar')

    eolicaColor1.classList.add('mostrar1')
    eolicaSinColor1.classList.remove('mostrar1')

    ultimoItem = detalleEolica
    if (visitoInfo && visitoBiomasa && visitoSolar && visitoEolica && visitoGeotermica && visitoEolica){
      detalleCerrar.classList.add('verde')
      textoContinuar.classList.remove('continuar')
      textoContinuar.classList.add('visibleContinuar')

      setTimeout(function(){
        continuarDetalle.classList.add('mostrar')
        },7000)


    }
  })
}

for (let i = 0; i < menuGeotermica.length; i++) {
  menuGeotermica[i].addEventListener('click', () => {
    visitoGeotermica = true
    ultimoItem.classList.remove('mostrar')
    detalleGeotermica.classList.add('mostrar')

    geotermicaColor.classList.add('mostrar')
    geotermicaSinColor.classList.remove('mostrar')

    geotermicaColor1.classList.add('mostrar1')
    geotermicaSinColor1.classList.remove('mostrar1')

    ultimoItem = detalleGeotermica
    if (visitoInfo && visitoBiomasa && visitoSolar && visitoHidraulica && visitoGeotermica && visitoEolica){
      detalleCerrar.classList.add('verde')
      textoContinuar.classList.remove('continuar')
      textoContinuar.classList.add('visibleContinuar')

      setTimeout(function(){
        continuarDetalle.classList.add('mostrar')
        },7000)


    }
  })
}

// nube.addEventListener('click', () => {
//     nube.classList.remove('mostrar')
//     paso++
// })

// solar2.addEventListener('click', ()=> { 
//   if (paso === 2){
//     solar2.classList.remove('mostrar')
//     paso++
//     solar3.classList.add('mostrar')
//   }
// })

// solar3.addEventListener('click', ()=> { 
  
//   if (paso === 3){
//     solar3.classList.remove('mostrar')
//     paso++
//   }
// })

nube.addEventListener('click', () => {
  nube.classList.remove('mostrar')
  paso++
  var tiempoViento = function(){
    if (paso === 2){
      solar2.classList.remove('mostrar')
      paso++
      solar3.classList.add('mostrar')
    }
  }
  setTimeout(tiempoViento,1200)

  var tiempoViento2 = function(){
    if (paso === 3){
      solar3.classList.remove('mostrar')
      paso++
    }
    textoSolar.classList.add('visibilidad')
    textoSolar2.classList.add('visibilidad')
    textoSolar3.classList.add('visibilidad')
    textoSolar4.classList.add('visibilidad')
    textoSolar5.classList.add('visibilidad')
    textoSolar6.classList.add('visibilidad')
    textoSolar7.classList.add('visibilidad')
    textoSolar8.classList.add('visibilidad')
    graficoSolar.classList.add('mostrar')
    estadisticaSolar.classList.add('mostrar')
    estadisticaSolar1.classList.add('mostrar')
    estadisticaSolar2.classList.add('mostrar')
    estadisticaSolar3.classList.add('mostrar')
    estadisticaSolar4.classList.add('mostrar')
  }
  setTimeout(tiempoViento2, 3000) 
  
})



viento.addEventListener('click', () => {
  viento.classList.remove('mostrar')
  pasoViento++
  var tiempoViento = function(){
    if (pasoViento === 2){
      eolica2.classList.remove('mostrar')
      pasoViento++
      eolica3.classList.add('mostrar')
    }
  }
  setTimeout(tiempoViento,1200)

  var tiempoViento2 = function(){
    if (pasoViento === 3){
      eolica3.classList.remove('mostrar')
      pasoViento++

      textoEolica.classList.add('visibilidad')
      textoEolica2.classList.add('visibilidad')
      textoEolica3.classList.add('visibilidad')
      textoEolica4.classList.add('visibilidad')
      textoEolica5.classList.add('visibilidad')
      textoEolica6.classList.add('visibilidad')
      textoEolica7.classList.add('visibilidad')
      textoEolica8.classList.add('visibilidad')
      estadisticaEolica.classList.add('mostrar')
      estadisticaEolica1.classList.add('mostrar')
      estadisticaEolica2.classList.add('mostrar')
      estadisticaEolica3.classList.add('mostrar')
      estadisticaEolica4.classList.add('mostrar')
      graficoEolica.classList.add('mostrar')
    }
  }
  setTimeout(tiempoViento2, 3000)
})






// tubo.addEventListener('click', () => {
//   tubo.classList.remove('mostrar')
//   pasoGeotermica++
// })

// geotermica2.addEventListener('click', ()=> { 
// if (pasoGeotermica === 2){
//   geotermica2.classList.remove('mostrar')
//   pasoGeotermica++
//   geotermica3.classList.add('mostrar')
// }
// })

// geotermica3.addEventListener('click', ()=> { 

// if (pasoGeotermica === 3){
//   geotermica3.classList.remove('mostrar')
//   pasoGeotermica++
// }
// })

tubo.addEventListener('click', () => {
  tubo.classList.remove('mostrar')
  pasoGeotermica++
  var tiempoViento = function(){
    if (pasoGeotermica === 2){
      geotermica2.classList.remove('mostrar')
      pasoGeotermica++
      geotermica3.classList.add('mostrar')
    }
  }
  setTimeout(tiempoViento,1200)

  var tiempoViento2 = function(){
    if (pasoGeotermica === 3){
      geotermica3.classList.remove('mostrar')
      pasoGeotermica++
      textoGeotermica.classList.add('visibilidad')
      textoGeotermica2.classList.add('visibilidad')
      textoGeotermica3.classList.add('visibilidad')
      textoGeotermica4.classList.add('visibilidad')
      textoGeotermica5.classList.add('visibilidad')
      textoGeotermica6.classList.add('visibilidad')
      // textoGeotermica7.classList.add('visibilidad')
      // textoGeotermica8.classList.add('visibilidad')
      estadisticaGeotermica.classList.add('mostrar')
      estadisticaGeotermica1.classList.add('mostrar')
      estadisticaGeotermica2.classList.add('mostrar')
      estadisticaGeotermica3.classList.add('mostrar')
      estadisticaGeotermica4.classList.add('mostrar')
      graficoGeotermica.classList.add('mostrar')
    }
  }
  setTimeout(tiempoViento2, 3000)
})


//////////////////////////////////////////////////////////////////


masa.addEventListener('click', () => {
  masa.classList.remove('mostrar')
  pasoBiomasa++
  var tiempoViento = function(){
    if (pasoBiomasa === 2){
      biomasa2.classList.remove('mostrar')
      pasoBiomasa++
      biomasa3.classList.add('mostrar')
    }
  }
  setTimeout(tiempoViento,1200)

  var tiempoViento2 = function(){
    if (pasoBiomasa === 3){
      biomasa3.classList.remove('mostrar')
      pasoBiomasa++
      textoBiomasa.classList.add('visibilidad')
      textoBiomasa2.classList.add('visibilidad')
      textoBiomasa3.classList.add('visibilidad')
      textoBiomasa4.classList.add('visibilidad')
      textoBiomasa5.classList.add('visibilidad')
      textoBiomasa6.classList.add('visibilidad')
      textoBiomasa7.classList.add('visibilidad')
      textoBiomasa8.classList.add('visibilidad')
      graficoBiomasa.classList.add('mostrar')
      estadisticaBiomasa.classList.add('mostrar')
      estadisticaBiomasa1.classList.add('mostrar')
      estadisticaBiomasa2.classList.add('mostrar')
      estadisticaBiomasa3.classList.add('mostrar')
      estadisticaBiomasa4.classList.add('mostrar')
    }
  }
  setTimeout(tiempoViento2, 3000)
})


//////////////////////////////////////////////////////////////////

agua.addEventListener('click', () => {
  agua.classList.remove('mostrar')
  pasoHidraulica++
  var tiempoViento = function(){
    if (pasoHidraulica === 2){
      hidraulica2.classList.remove('mostrar')
      pasoHidraulica++
      hidraulica3.classList.add('mostrar')
    }

  }
  setTimeout(tiempoViento,0)
  var remove = function(){
   if(pasoHidraulica === 3){
    hidraulica3.classList.remove('mostrar')
    textoAgua.classList.add('visibilidad')
    textoAgua2.classList.add('visibilidad')
    textoAgua3.classList.add('visibilidad')
    textoAgua4.classList.add('visibilidad')
    textoAgua5.classList.add('visibilidad')
    textoAgua6.classList.add('visibilidad')
    textoAgua7.classList.add('visibilidad')
    textoAgua8.classList.add('visibilidad')
    graficoAgua.classList.add('mostrar')
    estadisticaHidraulica.classList.add('mostrar')
    estadisticaHidraulica1.classList.add('mostrar')
    estadisticaHidraulica2.classList.add('mostrar')
    estadisticaHidraulica3.classList.add('mostrar')
    estadisticaHidraulica4.classList.add('mostrar')
  }
}
  setTimeout(remove,1400)

})


/////////////////////////////////////////////////////////////////////


