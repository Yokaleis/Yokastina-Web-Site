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
import { Menu } from './components/Menu'

export function Home() {
  return (
  <>
  <Menu/>
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

    <div className="bg-azulcielito p-10 h-230" id="proyectos">
      <h2 className="text-amarillobanana font-bold text-5xl cherry-bomb-one-regular text-center mb-10">Proyectos</h2>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6 justify-center">
        {projects.map((project) => (
          <Card id={project.id} title={project.title} image={project.image} category={project.category} description={project.description} link={project.link}/>
        ))}
      </div>
    </div>
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
    <div className="bg-rosachicle p-10 h-230" id="sobremi">
      <h2 className="text-amarillobanana font-bold text-5xl cherry-bomb-one-regular text-center mb-10">Sobre mí</h2>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
        <section className="p-20 ">
          <p className="text-lg">Mi nombre es Yokasta, soy de Venezuela y trabajo  como diseñadora.<br/> 
          Comencé a trabajar de forma remota en 2016, como desarrolladora de sitios web, tiempo después una empresa me contrató para diseñar aplicaciones móviles y desde entonces comencé a interesarme más en crecer mis habilidades de diseño, diseño de interfaz y experiencia de usuario. <br/> 
          Actualmente sigo diseñando, abandoné el desarrollo pero, me gustaría retomarlo.</p>
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
