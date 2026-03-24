//COMPONENTES
import { Header } from './components/Header'
import { Card, CardTestimonial } from './components/Card'
import { Footer } from './components/Footer'
import { Contacto } from './components/Contacto'
import { AdobeIcon, CSSIcon, FigmaIcon, GitIcon, HtmlIcon, JsIcon, ReactIcon } from './components/Icons'

//MOCKUPS
import { projects } from '../mockups/proyects'

//IMAGENES
import yoSoy from './components/assets/sobremi.png'
import { MenuPrincipal } from './components/Menu'
import { ProjectSection } from './Projects'

export function Home() {
  return (
  <>
  <MenuPrincipal/> 
  <Header/>

    {/* <div className='items-center m-30'>
        
      <div className='justify-center text-4xl flex'>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='text-3xl font-bold mb-10'>Yokastina Web</h1>
      <p className="read-the-docs">
        En construcción ⚠️
      </p>
    </div> */}

    {/* <div className="bg-azulcielito p-10" id="proyectos">
      <h2 className="text-amarillobanana font-bold text-5xl cherry-bomb-one-regular text-center mb-10">Proyectos</h2>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6 justify-center">
        {projects.map((project) => (
          <Card id={project.id} title={project.title} image={project.image} category={project.category} description={project.description} link={project.link}/>
        ))}
      </div>
    </div> */}

    <ProjectSection/>
    
    <div className="bg-fondo p-10" id="habilidades">
      <h2 className="text-rosachicle font-bold text-5xl cherry-bomb-one-regular text-center mb-6">Habilidades</h2>
      <div className="grid lg:grid-cols-7 md:grid-cols-3 sm:grid-cols-2 gap-4 justify-center p-20">
        <HtmlIcon/>
        <CSSIcon/>
        <ReactIcon/>
        <JsIcon/>
        <FigmaIcon/>
        <AdobeIcon/>
        <GitIcon/>
      </div>
    </div>
    <div className="bg-rosachicle p-10" id="sobremi">
      <h2 className="text-amarillobanana font-bold text-5xl cherry-bomb-one-regular text-center mb-10">Sobre mí</h2>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
        <section className="p-20 ">
          <p className="text-lg">
            Hola soy Yokasta, graduada como Ingeniera en Informática y actualmente trabajando como UI Designer con más de cinco años de experiencia transformando necesidades de negocio en productos digitales intuitivos. A lo largo de mi trayectoria en el sector salud, he diseñado interfaces webs y móviles para más de 10 productos digitales, mejorando significativamente el acceso a servicios de telemedicina principalmente en Venezuela, mi experiencia se extiende también al diseño para los sectores de comercio electrónico y educación online, adaptando cada interfaz a usuarios específicos.
            <br/> 
            Tengo una sólida experiencia implementando y manteniendo sistemas de diseño en Figma y Adobe XD, logrando optimizar los tiempos de producción del equipo en un 40%. 
            <br/> 
            Como diseñadora con bases técnicas, domino el desarrollo frontend con React y Tailwind CSS, lo que me permite construir puentes efectivos entre el prototipado y la implementación final. Uso metodologías Lean UX y Design Thinking para generar iteraciones constantes basadas en la retroalimentación real de usuarios y stakeholders. Mi flujo de trabajo integra principios de accesibilidad y estrategias mobile-first para garantizar experiencias inclusivas en cualquier dispositivo.
            <br/> 
            A pesar de que mi vida profesional no es tan para nada extensa, siempre estoy dispuesta a mantener un aprendizaje continuo, complementando mi formación con certificaciones en Diseño de Servicios y Usabilidad, Prompt Engineering y si, más Frontend porque mi objetivo es seguir creando interfaces que no solo faciliten la vida de las personas, sino que impulsen el crecimiento tecnológico a través de un diseño centrado en el usuario.

          </p>
        </section>
        <section>
          <img src={yoSoy} alt=""  className="rounded-2xl"/>
        </section>
      </div>
    </div>
    {/*<div className="bg-fondo p-10"> 
      <h2 className="text-azulcielito font-bold text-5xl cherry-bomb-one-regular text-center mb-6">Testimonios</h2>
       <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 justify-center">
        <CardTestimonial/>
        <CardTestimonial/>
        <CardTestimonial/>
        <CardTestimonial/>
        </div> 
    </div>*/}
    <Contacto/>
    <Footer/>
    </>
  )
}
