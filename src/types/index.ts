export interface ILogoData {
  name: string;
  url_image: string;
  social_media: string;
  type_logo: {
    name: string;
    description: string;
  };
}

export interface IMenuItem {
  label: string;
  isCollapsable: boolean;
  href: string;
  listProp?: JSX.Element;
  subLabels?: {
    label: string;
    href: string;
  }[];
}
export interface SectionProps {
  name: string;
  url_icono: string;
  alt_image: string;
  description: string;
}

export type textProp = string | JSX.Element;

export interface FunctionsCardProps {
  primary: textProp;
  secondary?: textProp;
  src: string;
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

export interface PostFilter {
  category: string;
  page?: string;
}

export interface Posts {
  id: number;
  title: string;
  imagen: string;
  slug: string;
  extract: string;
  content: string;
  url_image: null;
  status: string;
  news_cover: string;
  tendencia: string;
  category: Category;
  tags: Category[];
  user: User;
  created_at: string;
  username: String | null;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  biography: string;
  profile_photo_path: string;
}
