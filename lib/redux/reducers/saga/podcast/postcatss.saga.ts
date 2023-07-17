import { call , put, takeEvery } from 'redux-saga/effects'
import { setPodcastsFailure, setPodcastsSuccess } from './slice.saga'
import ROUTES from '@/lib/constants/routes.ctte'

function* workGetData():any{
    try {
        const podcasts = yield call(() => fetch(`/api${ROUTES.router.podcast}`))
        const formatedPodcast = yield podcasts.json() 
        yield put(setPodcastsSuccess(formatedPodcast?.feed?.entry))
    } catch (error) {
        yield put(setPodcastsFailure('the service has a problem'))
    }
}

function* podcastsWatcher(){
    yield takeEvery('podcasts-saga/setPodcastsStart', workGetData)
}

export default podcastsWatcher