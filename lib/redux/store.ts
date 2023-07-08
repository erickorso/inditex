import { configureStore } from '@reduxjs/toolkit'
import podcasts from '@/lib/redux/reducers/podcasts'
import podcast from '@/lib/redux/reducers/podcast'

export const store = configureStore({
  reducer: {
    podcasts,
    podcast
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch