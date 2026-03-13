import React from 'react'

import imgCover from "../components/assets/CoverSOIV.png";

export function Categoria({status, text}) {
  switch (status) {
    case "frontend":
      return <span className="bg-amarillobanana/30 text-rosachicle text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">{text}</span>
    case "casedeestudio":
      return <span className="bg-amarillobanana/30 text-rosachicle text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">{text}</span>
    case "uxui":
      return <span className="bg-amarillobanana/30 text-rosachicle text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">{text}</span>
    default:
      return null;
  }
}

/*TODO: mapear*/
export function Card() {
  return (
    <div className='grid grid-cols-[40%_60%] bg-white rounded-2xl'>
      <div className='rounded-tl-sm rounded-bl-sm' style={{backgroundImage: `url(${imgCover})`, backgroundSize: `cover`}} >
        <img alt="" srcset="" />
      </div>
      <div className='grid gap-2 p-5'>
        <h4 className='font-semibold text-lg'>SOIV (Sistema Operativo Integral de Venemergencia)</h4>
        <p className='text-sm'>El problema principal del antiguo sistema de gestión era que ya no se adaptaba al crecimiento que tuvo la empresa, para el personal médico administrativo era complicado cumplir con sus labores, atender las llamadas de pacientes, subir su historial médico, asignar medicamentos, etc, el personal quería realizar el trabajo con mayor eficacia, además como mencioné anteriormente, se estaban evaluando la integración de otros servicios que beneficiaban no sólo a los pacientes, si no a la empresa. Algunos puntos débiles experimentados por los usuarios: • Lentitud del sistema. • Desorganización. • Obsolescencia.
Debido a esto era fundamental una renovación y la integración de nuevas características que favorecieran a los usuarios.</p>
      <div className='flex justify-between'>
        <Categoria status="frontend" text="#frotend🩷"/>
        <button className='text-lilaternura text-sm'>Ver más</button>
      </div>
      </div>
    </div>
  )
}



export function CardTestimonial() {
  return (
    <div className='text-center justify-center bg-white rounded-2xl p-5'>
      <div className="justify-center flex"><img className="w-20 h-20 rounded-full" src={imgCover} alt="" srcset="" /></div>
      <div className='grid gap-2 p-5'>
        <p className='text-sm'>No es fácil conseguir que tus hijos te escuchen y a veces, es misión imposible que hagan caso a tus órdenes. No te preocupes, todos los padres y las madres pasan por eso en algún momento de la crianza. Los hijos, tienen otras prioridades en su vida (como jugar o explorar el entorno) y es por eso, que a veces puede parecer que no te escuchan.
Pero no es que no te escuchen, es que tienes que hacerlo bien. Quizá les prestas atención, te pones a su nivel para hablarles (te agachas y les miras a los ojos), les hablas con cariño… Y siguen sin prestarte atención...</p>

      </div>
    </div>
  )
}
