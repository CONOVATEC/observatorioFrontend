export interface ILogoData {
  name: string;
  url_image: string;
  social_media: string;
  type_logo: {
      name: string,
      description: string
  }
}

interface ISubMenuItem{
  label: string,
  href: string
}

export interface IMenuItem{
  label: string,
  isCollapsable: boolean,
  href: string,
  subLabels?:  ISubMenuItem[]
}

