//IMAGENES
import imgCover from "./assets/CoverSOIV.png";

export function Categoria({status, text}) {
  switch (status) {
    case "frontend":
      return <span className="bg-amarillobanana/30 text-rosachicle lg:text-sm md:text-[7px] font-medium mr-2 px-2.5 py-0.5 rounded-full">{text}</span>
    case "casedeestudio":
      return <span className="bg-amarillobanana/30 text-rosachicle text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">{text}</span>
    case "uxui":
      return <span className="bg-amarillobanana/30 text-rosachicle text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">{text}</span>
    default:
      return null;
  }
}

/*TODO: mapear*/
export function Card({id, title, image, description, category, link}) {
  return (
    <div id={id} className='grid grid-cols-[40%_60%] bg-white rounded-2xl h-100%'>
      <div className='rounded-tl-sm rounded-bl-sm' style={{backgroundImage: `url(${image})`, backgroundSize: `cover`}} >
      </div>
      <div className='grid gap-2 p-5'>
        <section className='lg:h-60 md:h-auto'>
          <h4 className='font-semibold lg:text-lg md:text-sm mb-2'>{title}</h4>
        <p className='lg:text-sm text-base md:text-xs'>{description}</p>
        </section>
      <div className='lg:flex lg:justify-between h-auto '>
        <div><Categoria status="frontend" text={category}/></div>
        <div>
          <a href={link} target="_blank" rel="noopener noreferrer" className='text-lilaternura text-sm'>Ver más</a>
        </div>
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
