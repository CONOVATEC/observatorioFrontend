const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const menuItems = [
  { label: 'Inicio', isCollapsable: false, href: `${siteUrl}` },
  {
    label: 'Nosotros',
    isCollapsable: true,
    href: '',
    subLabels: [
      { label: 'Sobre el Observatorio', href: `${siteUrl}/about` },
      { label: 'Sobre el CMPJ', href: `${siteUrl}/cmpj` },
    ],
  },
  { label: 'Boletín', isCollapsable: false, href: `${siteUrl}/listing` },
  {
    label: 'Politicas Juveniles',
    isCollapsable: true,
    href: '',
    subLabels: [
      {
        label: 'Estrategia Metropolitana de Juventudes',
        href: `${siteUrl}/strategy`,
      },
      { label: 'Política Nacional de Juventud', href: `${siteUrl}/national` },
    ],
  },
  {
    label: 'Capacitaciones',
    isCollapsable: false,
    href: `${siteUrl}/trainings`,
  },
  { label: 'Contáctenos', isCollapsable: false, href: `${siteUrl}/contact` },
];
