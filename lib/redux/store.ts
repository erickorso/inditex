import { configureStore } from '@reduxjs/toolkit'
import podcasts from '@/lib/redux/reducers/podcasts'
import search from '@/lib/redux/reducers/search'

export const store = configureStore({
  reducer: {
    podcasts,
    search
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch