import { createSlice } from '@reduxjs/toolkit'
import { getPodcastsService } from '@/lib/services/podcastService';

type PostType = any

type InitialStateType = {
  data: PostType[],
  loading: boolean,
  error: any,
}

const initialState: InitialStateType = {
  data: [],
  loading: false,
  error: null,
};

const PodcastsSlice = createSlice({
  name: 'podcasts',
  initialState,
  reducers: {
    setPodcastsStart(state) {
      state.loading = true
      state.error = null
    },
    setPodcastsSuccess(state, action) {
      state.data = action.payload?.feed?.entry
      state.loading = false
      state.error = null
    },
    getPodcastsFromStorage(state, action) {
      state.data = action.payload?.feed?.entry
      state.loading = false
      state.error = null
    },
    setPodcastsFromStorage(state, action) {
      state.data = action.payload?.feed?.entry
      state.loading = false
      state.error = null
    },
    setPodcastsFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
  },
});

export const {
  setPodcastsStart,
  setPodcastsSuccess,
  getPodcastsFromStorage,
  setPodcastsFailure,
} = PodcastsSlice.actions

export const fetchPodcasts = async (dispatch: Function) => {
  try {
    dispatch(setPodcastsStart());
    setTimeout(async () => {
        const podcasts = await getPodcastsService();
        localStorage.setItem('podcasts', JSON.stringify(podcasts));
        dispatch(setPodcastsSuccess(podcasts));
    }, 200)
  } catch (error: any) {
    dispatch(setPodcastsFailure(error.message));
  }
};

export const storePodcasts = async (dispatch: Function, podcasts: any) => {
  try {
    dispatch(setPodcastsStart());
    setTimeout(async () => {
        dispatch(getPodcastsFromStorage(podcasts));
    }, 200)
  } catch (error: any) {
    dispatch(setPodcastsFailure(error.message));
  }
};

export default PodcastsSlice.reducer;
