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
  image: string;
  alt: string;
  fullName: string;
  position: string;
}
