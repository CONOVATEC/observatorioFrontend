export const menuItems = [
  { label: 'Inicio', isCollapsable: false, href: '/' },
  {
    label: 'Nosotros',
    isCollapsable: true,
    href: '',
    subLabels: [{ label: 'Sobre el Observatorio', href: '' }, { label: 'Sobre el CMPJ', href: '' }]
  },
  { label: 'Boletín', isCollapsable: false, href: '' },
  { label: 'Politicas Juveniles', isCollapsable: false, href: '', subLabels: [{ label: 'Estrategia Metropolitana de Juventudes', href: '' }, { label: 'Política Nacional de Juventud', href: '' }] },
  { label: 'Capacitaciones', isCollapsable: false, href: '' },
  { label: 'Contáctenos', isCollapsable: false, href: '/contact' }
]

