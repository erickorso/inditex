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
    getPodcastsStart(state) {
      state.loading = true
      state.error = null
    },
    getPodcastsSuccess(state, action) {
      state.data = action.payload?.data
      state.loading = false
      state.error = null
    },
    getPodcastsFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
  },
});

export const {
  getPodcastsStart,
  getPodcastsSuccess,
  getPodcastsFailure,
} = PodcastsSlice.actions

export const fetchPodcasts = async (dispatch: Function) => {
  try {
    dispatch(getPodcastsStart());
    setTimeout(async () => {
        const Podcasts = await getPodcastsService();
        dispatch(getPodcastsSuccess(Podcasts));
    }, 200)
  } catch (error: any) {
    dispatch(getPodcastsFailure(error.message));
  }
};

export default PodcastsSlice.reducer;
