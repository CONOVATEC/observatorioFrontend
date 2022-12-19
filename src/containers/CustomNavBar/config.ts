export const menuItems = [
  { label: 'Inicio', isCollapsable: false, href: '/' },
  {
    label: 'Nosotros',
    isCollapsable: true,
    href: '',
    subLabels: [{ label: 'Sobre el Observatorio', href: '/about' }, { label: 'Sobre el CMPJ', href: '' }]
  },
  { label: 'Boletín', isCollapsable: false, href: '' },
  { label: 'Politicas Juventudes', isCollapsable: false, href: '' },
  { label: 'Capacitaciones', isCollapsable: true, href: '', subLabels: [{ label: 'Estrategia Metropolitana de Juventudes', href: '' }, { label: 'Política Nacional de Juventud', href: '' }] },
  { label: 'Contáctenos', isCollapsable: false, href: '/contact' }
]

