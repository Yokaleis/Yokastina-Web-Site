// src/pages/NotFound.jsx
import { Link } from 'react-router'

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-azulcielito text-center p-10">
      <h1 className="text-amarillobanana font-bold text-6xl cherry-bomb-one-regular mb-4">
        404
      </h1>
      <p className="text-white text-xl mb-6">
        Ups, esta página no existe.
      </p>
      <Link
        to="/"
        className="bg-amarillobanana text-azulcielito font-bold px-6 py-3 rounded-lg hover:opacity-80 transition"
      >
        Volver al inicio
      </Link>
    </section>
  )
}