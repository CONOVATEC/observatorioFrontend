export interface ILogoData {
  name: string;
  url_image: string;
  social_media: string;
  type_logo: {
      name: string,
      description: string
  }
}

export interface IMenuItem{
  label: string,
  isCollapsable: boolean,
  href: string,
  listProp?: JSX.Element
  subLabels?: {
    label: string;
    href: string;
  }[]
}
export interface SectionProps {
  title: string;
  image: string;
  alt_image: string;
  content_body: string;
}

export type textProp = string | JSX.Element;

export interface FunctionsCardProps {
  primary: textProp;
  secondary?: textProp;
  src: string
}

export interface SectionAboutCarouselProps {
  urlImage: string;
  alt: string;
  fullName: string;
  position: string;
}

export interface SectionNationalCarouselProps {
  image: string;
  alt: string;
  year: number;
  title: string;
  description: string;
}
