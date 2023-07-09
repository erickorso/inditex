import { configureStore } from '@reduxjs/toolkit'
import podcasts from '@/lib/redux/reducers/podcasts'
import search from '@/lib/redux/reducers/search'

export const store = configureStore({
  reducer: {
    podcasts,
    search
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch