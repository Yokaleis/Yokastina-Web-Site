//LIBRERIAS
import { ScrollLink } from 'react-scroll';
import { useState } from 'react';
//ICONOS
import { Instagram, Linkedin, Threads } from './Icons';

export function Footer() {
    return (
        <>
    <div className=" bg-amarillobanana/20 items-center text-center h-auto align-baseline p-10">
                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 mb-6">
            <div className="gid grid-cols-2 justify-center">
{/*                 <a href="./Yoka Leis _ CV _ Ingeniera en Informática _ UI Designer _ FrontEnd _ Remoto.pdf" download className="bg-rosachicle/30 text-rosachicle font-bold text-lg mr-2 px-3 py-3 rounded-full">Descarga mi CV aquí 🤭📃✨</a>
 */}             <BotonCV/>   
            </div>
            <div className="flex justify-center gap-6">
                <a href="https://www.threads.com/@yokastina" target="_blank" rel="noopener noreferrer"><Threads /></a>
                <a href="https://www.instagram.com/yokastina/" target="_blank" rel="noopener noreferrer"><Instagram /></a>
                <a href="https://www.linkedin.com/in/yokaleis/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
            </div>
        </div>
        <div className="grid grid-cols-1 text-center">
                <p className="text-xs font-semibold text-gray-500">Made in Venezuela 💛💙❤️ | 2026</p>
            </div>

    </div>
        </>
    )
}



export function BotonCV() {
  // 1. Definimos el estado inicial
  const [status, setStatus] = useState('idle'); // 'idle', 'downloading', 'completed'

  const handleDescarga = () => {
    // 2. Cambiamos a estado "descargando" inmediatamente
    setStatus('downloading');

    // 3. Simulamos la descarga. En la vida real, el navegador gestiona la descarga del archivo,
    // pero necesitamos un delay para que el usuario vea el cambio de estado.
    // Usamos setTimeout para simular 2 segundos de "proceso".
    setTimeout(() => {
      setStatus('completed');

      // 4. Opcional: Volver al estado inicial después de unos segundos
      setTimeout(() => {
        setStatus('idle');
      }, 3000); // Vuelve a la normalidad tras 3 segundos de mostrar "Listo"
    }, 2500); // Duración de la simulación de descarga
  };

  // 5. Mapeo de estilos y textos según el estado (Clean Code)
  const buttonConfig = {
    idle: {
      text: "Descarga mi CV aquí",
      icon: "🤭📃✨",
      className: "bg-rosachicle/30 text-rosachicle font-bold text-lg mr-2 px-3 py-3 rounded-full hover:bg-azulcielito hover:scale-105",
    },
    downloading: {
      text: "Mientras, contempla la naturaleza",
      icon: "🌴🪻🌾🦄🍃", // Icono de espera
      className: "bg-lilaternura/30 text-rosachicle font-bold text-lg mr-2 px-3 py-3 rounded-full cursor-wait animate-pulse", // Efecto de pulso
    },
    completed: {
      text: "¡Listo, ya tienes mi CV!",
      icon: "✅🎉😊🤸🏽",
      className: "bg-amarillobanana text-rosachicle  font-bold text-lg mr-2 px-3 py-3 rounded-full cursor-wait animate-pulse",
    },
  };

  // Obtenemos la configuración actual basada en el estado
  const { text, icon, className } = buttonConfig[status];

  return (
    // Importante: El enlace real <a> debe envolver la lógica o usar un hack de descarga.
    // Usaremos un hack de descarga para controlar el evento onClick.
    <a
      href="/ruta/a/tu/cv.pdf" // Reemplaza con la ruta real de tu archivo
      download="CV_Yokastina.pdf" // Nombre con el que se guardará
      onClick={handleDescarga}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-lg transition-all duration-500 ease-in-out ${className}`}
    >
        {text}
      <span className="text-lg">{icon}</span>
      
    </a>
  );
}