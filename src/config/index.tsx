import { SectionAboutCarouselProps, SectionNationalCarouselProps } from '../types';

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

export const tematicsByTwo = tematics.reduce((tematicsByTwo: ITematic[][], tematic: ITematic, index) => {
  if (index % 2)
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
  'https://app.powerbi.com/view?r=eyJrIjoiNThlMjRhNzItYzAwOC00YjAyLWI2ZmYtNWI3ZTk4MDQxNmM2IiwidCI6ImY1ZWQ0MGI1LTk0ZGItNGFmMy1iNTliLThkOGM1MmFjZmYzOSJ9';

export const directiveData: SectionAboutCarouselProps[] = [
  {
    url_image: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075068/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS/FOTOS%20DIRECTORES/DIANA_DD_uxpjkh.png',
    alt: 'directora-diana-image',
    fullName: 'Diana Calixto Lastra',
    position: 'Presidenta'
  },
  {
    url_image: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075068/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS/FOTOS%20DIRECTORES/angelo_dd_ihfif6.png',
    alt: 'director-angelo-image',
    fullName: 'Angelo Vera Cerro',
    position: 'Director de producción de cursos'
  },
  {
    url_image: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075068/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS/FOTOS%20DIRECTORES/adrian-1_vbabkn.png',
    alt: 'director-adrian-image',
    fullName: 'Adrian Capcha Quispe',
    position: 'Director de Programación Web'
  },
  {
    url_image: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075069/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS/FOTOS%20DIRECTORES/KARLA_DD_ur7lmq.png',
    alt: 'directora-karla-image',
    fullName: 'Karla Solari Peréz',
    position: 'Directora de investigación'
  }
]


export const comisionesCmpj = [
  { label: 'Imagen y Comunicación', href: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075060/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS%20CMPJ/COMISIONES/%C3%8Dcono_Imagen_y_comunicaciones_j5hmhh.png' },
  { label: 'Derechos Humanos Prevenvión de Violencia	', href: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075059/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS%20CMPJ/COMISIONES/%C3%8Dcono_Derechos_Humanos_y_Prevenci%C3%B3n_de_Violencia_uhhvfv.png' },
  { label: 'Ambiente y Cambio Climático', href: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075059/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS%20CMPJ/COMISIONES/%C3%8Dcono_ambiente_y_cambio_clim%C3%A1tico_kkpjhd.png' },
  { label: 'Educación', href: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075060/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS%20CMPJ/COMISIONES/%C3%8Dcono_educaci%C3%B3n_n4rgea.png' },
  { label: 'Emprendimiento, Innovación y Empleabilidad	', href: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075060/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS%20CMPJ/COMISIONES/%C3%8Dcono_Emprendimiento_Innovaci%C3%B3n_y_Empleabilidad_kcxhta.png' },
  { label: 'Salud	', href: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075060/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS%20CMPJ/COMISIONES/%C3%8Dcono_Salud_m7rmd2.png' },
  { label: 'Cultura y Recreación', href: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075059/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS%20CMPJ/COMISIONES/%C3%8Dcono_Cultura_y_recreaci%C3%B3n_vfnmdk.png' },
  { label: 'Fortalecimiento y Adehesiones', href: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075060/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS%20CMPJ/COMISIONES/%C3%8Dcono_Fortalecimiento_y_Adehesiones_odnxxp.png' },
  { label: 'Participación Ciudadana', href: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075060/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS%20CMPJ/COMISIONES/%C3%8Dcono_Participaci%C3%B3n_ciudadana_u3u9ew.png' }
]
export const joinUsImage = 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075061/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS%20CMPJ/%C3%9Anete_al_cmpj_infograf%C3%ADa_i8uetu.png'

export const STRATEGY_YOUTUBE_URL = process.env.NEXT_PUBLIC_STRATEGY || ''

export const nationalData: SectionNationalCarouselProps[] = [
  {
    image: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075066/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/POL%C3%8DTICA%20NACIONAL%20DE%20LA%20JUVENTUD/1_kwdgu1.jpg',
    alt: 'comisión nacional',
    year: 2007,
    title: 'Fusión de la comisión nacional de la juventud (CNJ) con el Ministerio de educación',
    description: 'Todas las competencias, funciones y atribuciones que el CNJ venía ejerciendo, una vez culminado el proceso de fusión las adquirirá el Ministerio de Educación.'
  },
  {
    image: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075066/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/POL%C3%8DTICA%20NACIONAL%20DE%20LA%20JUVENTUD/2_upzluj.jpg',
    alt: 'secretaría nacional',
    year: 2008,
    title: ' Creación de la Secretaría Nacional de Juventud',
    description: 'Según el Decreto Supremo N° 001 – 2008 – ED modificó el reglamento de organización y funciones del ministerio de educación por incorporar la Secretaría Nacional de la Juventud (SENAJU), este último se considera como un órgano de asesoramiento.'
  },
  {
    image: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075066/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/POL%C3%8DTICA%20NACIONAL%20DE%20LA%20JUVENTUD/3_xtpgj5.jpg',
    alt: 'reglamento',
    year: 2018,
    title: 'Reglamento  que regula las políticas nacionales',
    description: 'Según el Decreto Supremo N° 029-2018-PCM se establece un marco para la actualización de políticas nacionales, en el cual, deben redactarse con enfoque de género e interculturalidad.'
  },
  {
    image: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075066/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/POL%C3%8DTICA%20NACIONAL%20DE%20LA%20JUVENTUD/4_lni5ru.jpg',
    alt: 'promulgación de política nacional',
    year: 2019,
    title: 'Promulga Política Nacional de Juventud',
    description: 'Debido a que se identifica como problema público la desigualdad en alcanzar el desarrollo integral de la población joven que afecta a su participación en la sociedad.'
  },
  {
    image: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075067/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/POL%C3%8DTICA%20NACIONAL%20DE%20LA%20JUVENTUD/5_k9twlz.jpg',
    alt: 'naturaleza temporal',
    year: 2021,
    title: 'Creación del grupo de trabajo sectorial de naturaleza temporal',
    description: 'Se crea para elaborar un informe con los lineamientos para la reforma de la Secretaría Nacional de la Juventud y la propuesta normativa correspondiente.'
  },
]