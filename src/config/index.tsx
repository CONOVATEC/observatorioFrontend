import { SectionAboutCarouselProps } from '../types';

export { dataCards } from './Header'

export const functions = [
  {
    primary: 'Brindar Data regional',
    secondary: 'Proporcionar información actualizada sobre las condiciones sociodemográficas de la población joven del Perú.',
    src: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075065/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/INDEX/%C3%8DCONOS%20DE%20DATOS%20RELEVANTES%20-%20SAB%C3%8DAS%20QU%C3%89/Demograf%C3%ADa_kr9tix.png'
  },
  {
    primary: 'Fiscalización',
    secondary: 'Realizar el seguimiento a la Política Nacional de juventudes y las diferentes estrategias de implementación a nivel nacional.',
    src: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075061/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/INDEX/FUNCIONES/Fiscalizaci%C3%B3n_jiusky.png'
  },
  {
    primary: 'Formación',
    secondary: 'Realizar cursos formativos para idear soluciones innovadoras a las problemáticas en la población Joven.',
    src: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075061/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/INDEX/FUNCIONES/FORMACI%C3%93N_xnxo6v.png'
  },
]

export const tematics = [
  {
    title: 'Sociodemográfico',
    src: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075062/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/INDEX/NUESTRAS%20TEM%C3%81TICAS/Sociodemorgr%C3%A1fico_aabeqx.png'
  },
  {
    title: 'Participación Ciudadana',
    src: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075062/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/INDEX/NUESTRAS%20TEM%C3%81TICAS/Participaci%C3%B3n_pol%C3%ADtica_y_gobernabilidad_low1zl.png'
  },
  {
    title: 'Educación',
    src: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075061/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/INDEX/NUESTRAS%20TEM%C3%81TICAS/Educaci%C3%B3n_giua4x.png'
  },
  {
    title: 'Violencia de género',
    src: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075063/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/INDEX/NUESTRAS%20TEM%C3%81TICAS/Violencia_bqm9er.png'
  },
  {
    title: 'Salud',
    src: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075063/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/INDEX/NUESTRAS%20TEM%C3%81TICAS/Salud_hzzloe.png'
  },
  {
    title: 'Empleabilidad',
    src: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075061/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/INDEX/NUESTRAS%20TEM%C3%81TICAS/Empleo_hgdozf.png'
  }
]

export const tematicsByTwo = tematics.reduce((tematicsByTwo: ITematic[][], tematic: ITematic, index)=>{
  if(index % 2)
    tematicsByTwo?.at(-1)?.push(tematic);
  else
    tematicsByTwo.push([tematic])

  return tematicsByTwo
}, [])

interface ITematic {
  title: string;
  src: string;
}

export const POWER_BI_LINK = process.env.NEXT_PUBLIC_POWER_BI_LINK ||
  'https://app.powerbi.com/view?r=eyJrIjoiMDRmOGI3NDctZDgyNC00ZDkyLThjZjYtZDk1N2Y2Y2MzZmI0IiwidCI6ImY1ZWQ0MGI1LTk0ZGItNGFmMy1iNTliLThkOGM1MmFjZmYzOSJ9';

export const directiveData: SectionAboutCarouselProps[] = [
    {
      image: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075068/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS/FOTOS%20DIRECTORES/DIANA_DD_uxpjkh.png',
      alt: 'directora-diana-image',
      fullName: 'Diana Calixto Lastra',
      position: 'Presidenta'
    },
    {
      image: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075068/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS/FOTOS%20DIRECTORES/angelo_dd_ihfif6.png',
      alt: 'director-angelo-image',
      fullName: 'Angelo Vera Cerro',
      position: 'Director de producción de cursos'
    },
    {
      image: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075068/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS/FOTOS%20DIRECTORES/adrian-1_vbabkn.png',
      alt: 'director-adrian-image',
      fullName: 'Adrian Capcha Quispe',
      position: 'Director de Programación Web'
    },
    {
      image: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075069/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS/FOTOS%20DIRECTORES/KARLA_DD_ur7lmq.png',
      alt: 'directora-karla-image',
      fullName: 'Karla Solari Peréz',
      position: 'Directora de investigación'
    }
  ]
  
  