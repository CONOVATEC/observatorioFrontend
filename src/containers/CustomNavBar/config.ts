export const menuItems = [
  { label: 'Inicio', isCollapsable: false, href: '/' },
  {
    label: 'Nosotros',
    isCollapsable: true,
    href: '',
    subLabels: [{ label: 'Sobre el Observatorio', href: '/about' }, { label: 'Sobre el CMPJ', href: '/cmpj' }]
  },
  { label: 'Boletín', isCollapsable: false, href: '/listing' },
  { label: 'Politicas Juveniles',
    isCollapsable: true, href: '',
    subLabels: [{ label: 'Estrategia Metropolitana de Juventudes', href: '/strategy' }, { label: 'Política Nacional de Juventud', href: '/national' }]
  },
  { label: 'Capacitaciones', isCollapsable: false, href: '/trainings' },
  { label: 'Contáctenos', isCollapsable: false, href: '/contact' }
]

