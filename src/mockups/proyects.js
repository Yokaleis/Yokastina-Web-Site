import imgCover from "../pages/components/assets/CoverSOIV.png";
import imgCoverMS from "../pages/components/assets/appMercantilCover.png";
import imgCoverSitioRecetas from "../pages/components/assets/imgcoversitiowebrecetas.png";
import ImagenPrototipoApp from "../pages/components/assets/ImagenPrototipoApp.png";


export const projects = [
    {
        id: 1,
        image: imgCover,
        title: "SOIV (Sistema Operativo Integral de Venemergencia)",
        description: "El problema principal del antiguo sistema de gestión era que ya no se adaptaba al crecimiento que tuvo la empresa, para el personal médico administrativo era complicado cumplir con sus labores, atender las llamadas de pacientes, subir su historial médico, asignar medicamentos, etc, el personal quería realizar el trabajo con mayor eficacia.",
        category: "#Frontend🩷",
        link: "",
    },
    {
        id: 2,
        image: imgCoverMS,
        title: "Aplicación telemedicina Mercantil Seguros",
        description: "El problema principal del antiguo sistema de gestión era que ya no se adaptaba al crecimiento que tuvo la empresa, para el personal médico administrativo era complicado cumplir con sus labores, atender las llamadas de pacientes, subir su historial médico, asignar medicamentos, etc, el personal quería realizar el trabajo con mayor eficacia.",
        category: [
            "#UXUI🎉",
            "#Figma✏️"
        ] ,
        link: "",
    },
    {
        id: 3,
        image: imgCover,
        title: "Caso de estudio CuraDigital",
        description: "El problema principal del antiguo sistema de gestión era que ya no se adaptaba al crecimiento que tuvo la empresa, para el personal médico administrativo era complicado cumplir con sus labores, atender las llamadas de pacientes, subir su historial médico, asignar medicamentos, etc, el personal quería realizar el trabajo con mayor eficacia.",
        category: [
            "#CasoDeEstudio🔍",
        ],
        link: "/singlepage",
    },
    {
        id: 4,
        image: imgCoverSitioRecetas,
        title: "Sitio web de recetas",
        description: "Aplicación web para buscar y filtrar recetas de forma rápida y sencilla.",
        category: [
            "#Frontend🩷",
            "#Figma✏️"
        ] ,
        link: "https://sitio-web-de-recetas.vercel.app/"
    },
    {
        id: 5,
        image: ImagenPrototipoApp,
        title: "Prototipo Aplicación SOIV",
        description: "Prototipo desarrollado en gran parte con ✨Claude✨, este prototipo es un rediseño de la aplicación que utilizan los médicos hoy en día. El objetipo principal era optimizar la vista del detalle de la atención y el componente de estatus para reducir la carga cognitiva.",
        category: [
            "#Frontend🩷",
            "#Figma✏️"
        ] ,
        link: "https://snack.expo.dev/@yokastina/soiv-med-con-tabs"
    },


]