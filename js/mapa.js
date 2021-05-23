

const regionCuyo = document.getElementById('region-cuyo')
const regionCuyoColor = document.getElementById('cuyo-color')
const preguntaCuyo = document.getElementById('pregunta-cuyo')

const regionNoa = document.getElementById('region-noa')
const regionNoaColor = document.getElementById('noa-color')
const preguntaNoa = document.getElementById('pregunta-noa')

const regionNea = document.getElementById('region-nea')
const regionNeaColor = document.getElementById('nea-color')
const preguntaNea = document.getElementById('pregunta-nea')

const regionCentro = document.getElementById('region-centro')
const regionCentroColor = document.getElementById('centro-color')
const preguntaCentro = document.getElementById('pregunta-centro')

const regionPatagonia = document.getElementById('region-patagonia')
const regionPatagoniaColor = document.getElementById('patagonia-color')
const preguntaPatagonia = document.getElementById('pregunta-patagonia')

const pregunta1de5 = document.getElementById('numeracion1')
const pregunta2de5 = document.getElementById('numeracion2')
const pregunta3de5 = document.getElementById('numeracion3')
const pregunta4de5 = document.getElementById('numeracion4')
const pregunta5de5 = document.getElementById('numeracion5')

const preguntaCuadrado = document.getElementById('preguntas')

const mapaTotal =  document.getElementById('mapa1-contenedor')

const indicadorDeComparacion = document.getElementById('indicador-comparaciones-texto')

const scaleCentroColor = document.getElementById('centro-color')
const scaleNoaColor = document.getElementById('noa-color')
const scaleNeaColor = document.getElementById('nea-color')
const scalePatagoniaColor = document.getElementById('patagonia-color')
const scaleCuyoColor = document.getElementById('cuyo-color')

var indicePregunta = 1;
var termino_mapa = false;
var cantidad_activados=0;


regionCuyo.addEventListener('click', () => {
    if (indicePregunta == 1){
        regionCuyo.classList.remove('mostrar')
        regionCuyoColor.classList.add('mostrar')
        regionCuyoColor.classList.add('escalaMapa')
        setTimeout(function(){
          regionCuyoColor.classList.remove('escalaMapa')
          },500)
        indicePregunta++
        preguntaCuyo.classList.remove('mostrar')
        preguntaNoa.classList.add('mostrar')
        pregunta1de5.classList.remove('mostrar')
        pregunta2de5.classList.add('mostrar')
    }
  })


////////////////////////////////Animaciones shake///////////////////////

  regionNoa.addEventListener('click', () => {
    if (indicePregunta == 1 ){
      regionNoa.classList.add('shakeAnim')
      setTimeout(function(){
      regionNoa.classList.remove('shakeAnim')
      },500)
    }
  })

  regionNea.addEventListener('click', () => {
    if (indicePregunta == 1 || 2 ){
      regionNea.classList.add('shakeAnim')
      setTimeout(function(){
      regionNea.classList.remove('shakeAnim')
      },500)
    }
  })

  regionCentro.addEventListener('click', () => {
    if (indicePregunta == 1 || 2 || 3){
      regionCentro.classList.add('shakeAnim')
      setTimeout(function(){
      regionCentro.classList.remove('shakeAnim')
      },500)
    }
  })

  regionPatagonia.addEventListener('click', () => {
    if (indicePregunta == 1 || 2 || 3 || 4){
      regionPatagonia.classList.add('shakeAnim')
      setTimeout(function(){
      regionPatagonia.classList.remove('shakeAnim')
      },500)
    }
  })

///////////////////////////////////Feedback de colores mapa/////////////////////////////////////

scaleCentroColor.addEventListener('click', () => {
  scaleCentroColor.classList.add('escalaMapaColores')
  setTimeout(function(){
    scaleCentroColor.classList.remove('escalaMapaColores')
    },500)
})

scaleNeaColor.addEventListener('click', () => {
  scaleNeaColor.classList.add('escalaMapaColores')
  setTimeout(function(){
    scaleNeaColor.classList.remove('escalaMapaColores')
    },500)
})



regionCuyoColor.addEventListener('click', () => {
  regionCuyoColor.classList.add('escalaMapaColores')
  setTimeout(function(){
    regionCuyoColor.classList.remove('escalaMapaColores')
    },500)
})

scalePatagoniaColor.addEventListener('click', () => {
  scalePatagoniaColor.classList.add('escalaMapaColores')
  setTimeout(function(){
    scalePatagoniaColor.classList.remove('escalaMapaColores')
    },500)
})

scaleNoaColor.addEventListener('click', () => {
  scaleNoaColor.classList.add('escalaMapaColores')
  setTimeout(function(){
    scaleNoaColor.classList.remove('escalaMapaColores')
    },500)
})
///////////////////////////////////////////////////////////////////////////////////
  regionNoa.addEventListener('click', () => {
    if (indicePregunta == 2 ){
        regionNoa.classList.remove('mostrar')
        regionNoaColor.classList.add('mostrar')
        regionNoaColor.classList.add('escalaMapa')
        indicePregunta++
        preguntaNoa.classList.remove('mostrar')
        preguntaNea.classList.add('mostrar')
        pregunta2de5.classList.remove('mostrar')
        pregunta3de5.classList.add('mostrar')

        setTimeout(function(){
          regionNoaColor.classList.remove('escalaMapa')
          },500)
    }
  })

  regionNea.addEventListener('click', () => {
    if (indicePregunta == 3 ){
        regionNea.classList.remove('mostrar')
        regionNeaColor.classList.add('mostrar')
        regionNeaColor.classList.add('escalaMapa')
        pregunta3de5.classList.remove('mostrar')
        pregunta4de5.classList.add('mostrar')
        setTimeout(function(){
          regionNeaColor.classList.remove('escalaMapa')
          },500)
        indicePregunta++
        preguntaNea.classList.remove('mostrar')
        preguntaCentro.classList.add('mostrar')
    }
  })


  regionCentro.addEventListener('click', () => {
    if (indicePregunta == 4 ){
        regionCentro.classList.remove('mostrar')
        regionCentroColor.classList.add('mostrar')
        regionCentroColor.classList.add('escalaMapa')
        pregunta4de5.classList.remove('mostrar')
        pregunta5de5.classList.add('mostrar')
        setTimeout(function(){
          regionCentroColor.classList.remove('escalaMapa')
          },500)
        indicePregunta++
        preguntaCentro.classList.remove('mostrar')
        preguntaPatagonia.classList.add('mostrar')
        
    }
  })

 
  regionPatagonia.addEventListener('click', () => {
    if (indicePregunta == 5 ){
        regionPatagonia.classList.remove('mostrar')
        regionPatagoniaColor.classList.add('mostrar')
        regionPatagoniaColor.classList.add('escalaMapa')
        pregunta5de5.classList.remove('mostrar')
        setTimeout(function(){
          regionPatagoniaColor.classList.remove('escalaMapa')
          },500)
        indicePregunta++
        preguntaPatagonia.classList.remove('mostrar')
        preguntaCuadrado.classList.remove('mostrar')
        mapaTotal.classList.add('derecha')
        indicadorDeComparacion.classList.add('mostrar')
        termino_mapa=true
    }
  })


  //////////////////////////////////////////////////////////////////

  const estCuyo = document.getElementById('cuyo-imagen')
  const estNea = document.getElementById('nea-imagen')
  const estNoa = document.getElementById('noa-imagen')
  const estCentro = document.getElementById('centro-imagen')
  const estPatagonia = document.getElementById('patagonia-imagen')
  const pat_noa = document.getElementById('pat-noa-imagen')
  const pat_nea = document.getElementById('pat-nea-imagen')
  const pat_centro = document.getElementById('pat-centro-imagen')
  const pat_cuyo = document.getElementById('pat-cuyo-imagen')
  const centro_noa = document.getElementById('centro-noa-imagen')
  const centro_nea = document.getElementById('centro-nea-imagen')
  const centro_cuyo = document.getElementById('centro-cuyo-imagen')
  const noa_nea = document.getElementById('noa-nea-imagen')
  const noa_cuyo = document.getElementById('noa-cuyo-imagen')
  const nea_cuyo = document.getElementById('nea-cuyo-imagen')

  const regionImagenes = {
    Cuyo: estCuyo,
    Nea: estNea,
    Noa: estNoa,
    Centro: estCentro,
    Patagonia: estPatagonia,

    CuyoNea: nea_cuyo,
    CuyoNoa: noa_cuyo,
    CuyoCentro: centro_cuyo,
    CuyoPatagonia: pat_cuyo,

    NeaCuyo: nea_cuyo,
    NeaNoa: noa_nea,
    NeaCentro: centro_nea,
    NeaPatagonia: pat_nea,

    NoaCuyo: noa_cuyo,
    NoaNea: noa_nea,
    NoaCentro: centro_noa,
    NoaPatagonia: pat_noa,

    CentroCuyo: centro_cuyo,
    CentroNea: centro_nea,
    CentroNoa: centro_noa,
    CentroPatagonia: pat_centro,

    PatagoniaCuyo: pat_cuyo,
    PatagoniaNea: pat_nea,
    PatagoniaNoa: pat_noa,
    PatagoniaCentro: pat_centro
  }

  let ultimaRegion = null
  let region = null

  const mostrarEstadistica = (nombre) => {
    if (!termino_mapa) { return }

    if (ultimaRegion && region) {
      regionImagenes[ultimaRegion + region].classList.remove('mostrar')
      ultimaRegion = nombre
      region = null
      regionImagenes[ultimaRegion].classList.add('mostrar')
    } else if (ultimaRegion) {
      // console.log(ultimaRegion + ' ' + nombre)
      if (ultimaRegion === nombre) {
        // console.log('true')
        regionImagenes[ultimaRegion].classList.remove('mostrar')
        ultimaRegion = null
      } else {
        region = nombre
        regionImagenes[ultimaRegion].classList.remove('mostrar')
        regionImagenes[ultimaRegion + region].classList.add('mostrar')
      }
    } else {
      ultimaRegion = nombre
      regionImagenes[ultimaRegion].classList.add('mostrar')
    }

    indicadorDeComparacion.classList.remove('mostrar')
  }

  regionCuyoColor.addEventListener('click', () => {
    mostrarEstadistica('Cuyo')
  })

  
  regionNeaColor.addEventListener('click', () => {
    mostrarEstadistica('Nea')
  })
  
  regionNoaColor.addEventListener('click', () => {
    mostrarEstadistica('Noa')
  })
  
  regionCentroColor.addEventListener('click', () => {
    mostrarEstadistica('Centro')
  })

  regionPatagoniaColor.addEventListener('click', () => {
    mostrarEstadistica('Patagonia')
  })