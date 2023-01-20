import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';
import { aboutCmpjApi } from './aboutCmpj/slice';
import { formContactApi } from './form/slice';
import { postsApi } from './posts/slice';
import { directiveApi } from './directive/slice';
import { sponsorImagesApi } from './sponsors/slice'
import { nationalApi } from './national/slice';
import { aboutObservatoryApi } from './aboutObservatory/slice';
import { strategyApi } from './strategy/slice';

export const makeStore = () => configureStore({
  reducer: {
    [sponsorImagesApi.reducerPath]: sponsorImagesApi.reducer,
    [formContactApi.reducerPath]: formContactApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [directiveApi.reducerPath]: directiveApi.reducer,
    [aboutCmpjApi.reducerPath]: aboutCmpjApi.reducer,
    [nationalApi.reducerPath]: nationalApi.reducer,
    [aboutObservatoryApi.reducerPath]: aboutObservatoryApi.reducer,
    [strategyApi.reducerPath]: strategyApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(sponsorImagesApi.middleware)
      .concat(formContactApi.middleware)
      .concat(postsApi.middleware)
      .concat(directiveApi.middleware)
      .concat(aboutCmpjApi.middleware)
      .concat(nationalApi.middleware)
      .concat(aboutObservatoryApi.middleware)
      .concat(strategyApi.middleware)
})

export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
