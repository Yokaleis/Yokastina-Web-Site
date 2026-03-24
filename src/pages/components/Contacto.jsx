import { useRef } from 'react';

//LIBRERIAS
import emailjs from '@emailjs/browser';

//COMPONENTES
import bgContact from '../components/assets/bg-contact.png'
import MagneticBotton from './MagneticBotton';

export function Contacto() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert('¡Mensaje enviado con éxito!');
        },
        (error) => {
          alert('Hubo un error, intenta de nuevo.');
        }
      );
  };


  return (
    <div className="lg:p-30 sm:p-5" style={{ backgroundImage: `url(${bgContact})` }} id="contacto">
      <section className="bg-azulcielito p-20 lg:w-130 md:w-100 grid rounded-2xl m-auto">
        <h2 className="text-amarillobanana font-bold lg:text-5xl md:text-3xl cherry-bomb-one-regular text-center mb-10">Contacto</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <input type="text" name="title" id="title" className="w-full rounded-xl border-none bg-amber-100 px-3 py-2 placeholder-primary text-sm" placeholder="Contratación, colaboración, etc" />
          </div>
          <div className="mb-4">
            <input type="name" name="user_name" id="user_name" className="w-full rounded-xl border-none bg-amber-100 px-3 py-2 placeholder-primary text-sm" placeholder="Nombre completo" />
          </div>
          <div className="mb-4">
            <input type="email" name="user_email" id="user_email" className="w-full  rounded-xl border-none bg-amber-100 px-3 py-2 placeholder-primary text-sm" placeholder="Email" />
          </div>
          <div className="mb-4">
            <textarea name="message" id="message" className="w-full  rounded-xl border-none bg-amber-100 px-3 py-2 placeholder-primary text-sm" placeholder="Escríbeme un mensaje 😊"></textarea>
          </div>
          <MagneticBotton>
          <button type="submit" className="w-full bg-amarillobanana text-rosachicle font-semibold px-6 py-2 rounded-3xl">Enviar</button>

          </MagneticBotton>
        </form>
      </section>
    </div>
  )
}
