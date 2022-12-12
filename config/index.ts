export const APIS = {
  development: {
    OBSERVATORIO_BACK: 'https://admin.observatoriojovenperu.com.pe/api'
  },
  test: {
    OBSERVATORIO_BACK: 'https://admin.observatoriojovenperu.com.pe/api'
  },
  production: {
    OBSERVATORIO_BACK: 'https://admin.observatoriojovenperu.com.pe/api'
  }
}

export const APIS_URLS = {
  ...APIS[process.env.NODE_ENV],
  ...(process.env.NEXT_PUBLIC_OBSERVATORIO_BACK ? { OBSERVATORIO_BACK : process.env.NEXT_PUBLIC_OBSERVATORIO_BACK }:{})
}

