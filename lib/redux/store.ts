import { configureStore } from '@reduxjs/toolkit'
import podcasts from '@/lib/redux/reducers/podcasts'
import search from '@/lib/redux/reducers/search'
import createSagaMiddleware from 'redux-saga'
import PodcastsSliceSaga from './reducers/saga/podcast/slice.saga'
import podcastsWatcher from './reducers/saga/podcast/postcatss.saga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({ 
  reducer: {
    podcasts,
    podcastsSaga: PodcastsSliceSaga,
    search
  },
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(podcastsWatcher)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch