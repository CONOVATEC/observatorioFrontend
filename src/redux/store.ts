import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';
import { formContactApi } from './form/slice';
import { postsApi } from './posts/slice';
import { sponsorImagesApi } from './sponsors/slice'

export const makeStore = () => configureStore({
  reducer: {
    [sponsorImagesApi.reducerPath]: sponsorImagesApi.reducer,
    [formContactApi.reducerPath]: formContactApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(sponsorImagesApi.middleware)
      .concat(formContactApi.middleware)
      .concat(postsApi.middleware)
})

export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
