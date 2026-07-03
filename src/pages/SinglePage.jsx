import React from 'react'
//COMPONENTS
import { MenuSecundario } from './components/Menu';
import { Footer } from './components/Footer';
//IMAGENES
import yoSoy from './components/assets/sobremi.png';
import { HeaderSingle } from './components/Header';


export default function SinglePage() {
    return (
        <>
            <MenuSecundario />
            {/* TODO:
            Construir otro header para las single pages
            Modificar el nombre de este caso de estudio LISTO! */}
            <HeaderSingle/>
            <div className="grid grid-cols-2 gap-4 p-10">
                <img src={yoSoy} alt="" className="w-full" />
                <img src={yoSoy} alt="" className="w-full" />
            </div>
            <div className="p-10">
                <h1></h1>
                <p>Este proyecto surge de la necesidad de rediseñar un sistema de atención médica el cual ofrecía muy pocas alternativas de gestión de servicios médicos, tales como traslado en ambulancias, solicitud y envío de medicamentos, hospitalización, etc. Nuestra misión fue adaptar la idea base a las nuevas necesidades del personal médico administrativo, integrando nuevos servicios y funcionalidades para mejorar significativamente la experiencia de usuario tanto de los médicos como la de los pacientes que requerían los servicios. </p>
                <section className="mt-10">
                    <h4 className="font-bold text-3xl text-center mb-10">Declaración de desafíos o problemas</h4>
                    <p>
                        El problema principal del antiguo sistema de gestión era que ya no se adaptaba al crecimiento que tuvo la empresa, para el personal médico administrativo era complicado cumplir con sus labores, atender las llamadas de pacientes, escribir su historial médico, asignar medicamentos, etc, el personal quería realizar el trabajo con mayor eficacia, además como mencioné anteriormente, se estaban evaluando la integración de otros servicios que beneficiaban no sólo a los pacientes si no, a la empresa.<br />
                        Algunos puntos débiles experimentados por los usuarios:<br />

                        Lentitud del sistema.<br />

                        Desorganización.<br />

                        Obsolescencia.<br />

                        Debido a esto era fundamental una renovación y la integración de nuevas características que favorecieran a los usuarios.
                    </p>
                </section>

                <section className="mt-10">
                    <h4 className="font-bold text-3xl text-center mb-10">Metas</h4>
                    <p>
                        Manejo fácil y rápido del sistema. <br />

                        Incorporar nuevas características. <br />

                        Mantener informados a los pacientes sobre los estatus y resultados de los servicios adquiridos. <br />
                    </p>
                </section>

                <section className="mt-10">
                    <h4 className="font-bold text-3xl text-center mb-10">Persona</h4>
                    <p>
                        El usuario podrá ser capaz de gestionar y cumplir con diversas tareas de acuerdo al rol asignado y a los permisos que tenga, algunas de esas tareas son: Añadir, editar y/o eliminar sedes, afiliados, usuarios, vehículos, etc. Atender llamadas y videollamadas, asignar permisos médicos, buscar síntomas y diagnósticos y asignar medicamentos de acuerdo a estos datos, especialistas, exámenes médicos, generar, imprimir o enviar tickets, etc.
                    </p>
                </section>

                <section className="mt-10">
                    <h4 className="font-bold text-3xl text-center mb-10">Implementación de hallazgos</h4>
                    <p>
                        <ul>
                            <li className="mb-2">
                                <span className="font-bold">Navegación compleja: </span>La navegación en general era realmente complicada, los botones para realizar acciones fundamentales no estaban bien definidos resultando poco intuitivo para su uso.
                            </li>
                            <li className="mb-2">
                                <span className="font-bold">Listados tediosos:</span> Las listas de datos no ofrecían una correcta comprensión de los datos, estaban desorganizadas y fragmentadas.
                            </li>
                            <li className="mb-2">
                                <span className="font-bold">Falta de integración con otros sistemas: </span>El sistema no estaba integrado con las demás aplicaciones previamente desarrolladas, lo que suponía un problema para el personal al momento de realizar sus tareas.
                            </li>
                            <li className="mb-2">
                                <span className="font-bold">Formularios desorganizados:</span> Los formularios no contaban con una jerarquía adecuada. Los formularios para la creación de atenciones no estaban optimizados para otros tamaños de pantalla, además no había una cohesión entre los datos de las aseguradoras y los datos de los pacientes y esto ralentizaba el proceso de creación de la atención sin mencionar que muchos de los campos no tenían la validación necesaria.Formularios desorganizados: Los formularios no contaban con una jerarquía adecuada. Los formularios para la creación de atenciones no estaban optimizados para otros tamaños de pantalla, además no había una cohesión entre los datos de las aseguradoras y los datos de los pacientes y esto ralentizaba el proceso de creación de la atención sin mencionar que muchos de los campos no tenían la validación necesaria.
                            </li>
                        </ul>
                    </p>
                </section>

                <section className="mt-10">
                    <h4 className="font-bold text-2xl mb-10">Resultados obtenidos:</h4>
                    <p>
                        <ul>
                            <li className="mb-2">
                                <span className="font-bold">Reducción del tiempo de navegación:</span> Los usuarios pudieron encontrar las funciones que necesitaban más rápido.
                            </li>
                            <li className="mb-2">
                                <span className="font-bold">Mayor satisfacción del usuario:</span> El personal médico administrativo se mostró más satisfecho con la facilidad de uso del sistema y la rapidez con la que pudieron completar sus tareas.Mayor satisfacción del usuario: El personal médico administrativo se mostró más satisfecho con la facilidad de uso del sistema y la rapidez con la que pudieron completar sus tareas.
                            </li>
                            <li className="mb-2">
                                <span className="font-bold">Mejora en la eficiencia del trabajo:</span> El personal médico administrativo pudo trabajar de manera más eficiente gracias a la integración de datos y la comunicación fluida entre diferentes sistemas.
                            </li>
                        </ul>
                    </p>
                </section>

                <section className="mt-10">
                    <h4 className="font-bold text-3xl text-center mb-10">Wireframes</h4>
                    <p>Durante las primeras semanas de reuniones con todo el equipo se diseñaron las estructuras principales del sistema, esto incluía las primeras pantallas para los roles administrador, operador y médico que eran los más importantes desde el inicio ya que posteriormente a medida que avanzaba el proyecto surgía la necesidad de diversificar los permisos y crear roles diferentes. Estas estructuras constaban de las siguientes pantallas: Bienvenida/Login, listados de atención, detalles de atención la cual embebía la llamada telefónica o video llamada, datos del pacientes y datos médicos, listados de seguimientos, formularios de creación de usuarios, afiliados (pacientes), etc.</p>
                </section>

                <section className="mt-10">
                    <h4 className="font-bold text-3xl text-center mb-10">Diseño de interfaces</h4>
                    <p>Al diseñar cada pantalla nuestro objetivo fue muy claro desde el inicio, nos enfocamos en ofrecer interfaces visualmente agradables, fáciles de usar y entender para cada tipo de usuario tomando en cuenta que el equipo médico administrativo crece en número cada día queríamos brindarles una experiencia agradable e intuitiva. Agregamos nuevas características para aumentar la eficacia, entre ellas podemos mencionar búsqueda de diagnósticos y síntomas, reportes del funcionamiento de los servicios, panel de control para tener una visualización completa y en tiempo real del comportamiento de las atenciones y servicios, listados más sintetizados, conexión con las aplicaciones de telemedicina.</p>
                </section>
                <div className="grid grid-cols-2 gap-4 p-10">
                    <img src={yoSoy} alt="" className="w-full" />
                    <img src={yoSoy} alt="" className="w-full" />

                </div>
            </div>
            <Footer />
        </>
    )
}
