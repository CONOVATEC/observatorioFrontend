import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';
import { formContactApi } from './form/slice';
import { sponsorImagesApi } from './sponsors/slice'

export const makeStore = () => configureStore({
  reducer: {
    [sponsorImagesApi.reducerPath]: sponsorImagesApi.reducer,
    [formContactApi.reducerPath]: formContactApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(sponsorImagesApi.middleware)
      .concat(formContactApi.middleware)
})

export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
