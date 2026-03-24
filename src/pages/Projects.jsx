import { motion } from 'framer-motion';
//MOCKUPS
import { projects } from '../mockups/proyects';

//COMPONENTS
import { Card } from './components/Card';


export function ProjectSection() {

  // Definimos esto fuera del componente para no recrearlo en cada render
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Tiempo entre la aparición de cada hijo
        delayChildren: 0.4,   // Espera un poco antes de empezar la cascada
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Empieza invisible y 20px abajo
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };
  return (
    <>

      <section id="proyectos" className="bg-azulcielito p-10">
        <h2 className="text-amarillobanana font-bold text-5xl cherry-bomb-one-regular text-center mb-10">Proyectos</h2>


        {/* CONTENEDOR PADRE */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show" // Se activa al entrar en el viewport
          viewport={{ once: true, amount: 0.2 }} // amount 0.2: inicia cuando se ve el 20% de la sección
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((proyecto) => (
            /* CADA HIJO (CARD) */
            <motion.div key={proyecto.id} variants={itemVariants}>
              <Card
                title={proyecto.title}
                description={proyecto.description}
                image={proyecto.image}
                link={proyecto.link}
                category={proyecto.category}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}