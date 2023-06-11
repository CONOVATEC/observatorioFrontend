export const APIS = {
  development: {
    OBSERVATORIO_BACK: "https://admin.observatoriojovenperu.com.pe/api",
    FORM_API: "",
  },
  test: {
    OBSERVATORIO_BACK: "https://admin.observatoriojovenperu.com.pe/api",
  },
  production: {
    OBSERVATORIO_BACK: "https://admin.observatoriojovenperu.com.pe/api",
    FORM_API: "",
  },
};

export const APIS_URLS = {
  ...APIS[process.env.NODE_ENV],
  ...(process.env.NEXT_PUBLIC_OBSERVATORIO_BACK
    ? { OBSERVATORIO_BACK: process.env.NEXT_PUBLIC_OBSERVATORIO_BACK }
    : {}),
  ...(process.env.NEXT_PUBLIC_FORM_API
    ? { FORM_API: process.env.NEXT_PUBLIC_FORM_API }
    : {}),
};

export const SUPA_BASE = {
  ANON_KEY: process.env.NEXT_PUBLIC_SUPA_BASE_ANON_KEY,
};
