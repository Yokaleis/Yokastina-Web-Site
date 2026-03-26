import { motion } from "framer-motion";
import { AdobeIcon, CSSIcon, FigmaIcon, GitIcon, HtmlIcon, JsIcon, ReactIcon, TailwindIcon, ViteIcon } from "./Icons";

const skills = [
  { name: "React", icon: <ReactIcon/> },
  { name: "HTML5", icon: <HtmlIcon/>},
  { name: "CSS", icon: <CSSIcon/>},
  { name: "Tailwind", icon: <TailwindIcon/>},
  { name: "Vite", icon: <ViteIcon/> },
  { name: "Figma", icon: <FigmaIcon/> },
  { name: "JavaScript", icon: <JsIcon/> },
  { name: "GitHub", icon: <GitIcon/> },
  { name: "Adobe XD", icon: <AdobeIcon/> },

  // Agrega todos los que quieras
];

export function SkillBar() {
  // Duplicamos el array para que cuando termine el primero, el segundo ya esté entrando
  const doubledSkills = [...skills, ...skills];

  return (
    <div className="relative flex overflow-hidden whitespace-nowrap py-10 bg-white/5">
      <motion.div
        className="flex"
        animate={{
          x: [0, -1000], // Ajusta este valor según el ancho total de tus iconos
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20, // Controla la velocidad (más segundos = más lento)
            ease: "linear",
          },
        }}
      >
        {doubledSkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-4 mx-10 text-2xl font-medium text-gray-600"
          >
            <span className="text-4xl">{skill.icon}</span>
            
          </div>
        ))}
      </motion.div>
    </div>
  );
}