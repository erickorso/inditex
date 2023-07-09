'use client'
import { useGetData } from '@/lib/hooks/useGetData';
import Loading from '@/components/Loading';
import { useParams } from 'next/navigation'
import { changeDate, millisToTime } from '@/lib/helpers/functions';
import Link from 'next/link';
import { PodcastEpisodesWrapper } from './style';

const PodcastEpisodes = () => {
    const params: any = useParams()
    const { podcastId } = params
    const isLocal = process.env.NODE_ENV === 'development';
    const baseUrl = isLocal ? 'http://localhost:3000' : ''
    const {
        data,
        loading,
        error
    } = useGetData(
        `${baseUrl}/api/podcasts/${podcastId}`
    )

    const entriesEpisodes = data?.results

    const info = (entriesEpisodes && entriesEpisodes[0]) ? entriesEpisodes[0] : { trackCount: 0 }

    const { trackCount } = info

    let copyArr = (entriesEpisodes && entriesEpisodes[0]) ? [...entriesEpisodes] : []

    if (Array.isArray(entriesEpisodes) && entriesEpisodes.length > 0) {
        copyArr.shift();
    }

    {
        if (loading) return <Loading loading={loading} error={error} />
    }

    return (
        <>
            <PodcastEpisodesWrapper>
                <span className="title">Episodes: {trackCount}</span>
            </PodcastEpisodesWrapper>
            <PodcastEpisodesWrapper style={{ marginTop: '50px' }}>
                <div className='list-header'>
                    <div className='name'>Title</div>
                    <div className='date'>Date</div>
                    <div className='duration'>Duration</div>
                </div>
                {
                    data && copyArr ?
                        copyArr.map((item: any) => {
                            return (
                                <div key={item.trackId} className='list-item'>
                                    <Link href={`/podcast/${podcastId}/episode/${item.episodeGuid}`}>
                                        <div className='name'>{item.trackName}</div>
                                        <div className='date'>{changeDate(item.releaseDate)}</div>
                                        <div className='duration'>{millisToTime(item.trackTimeMillis)}</div>
                                    </Link>
                                </div>
                            )
                        })
                        : null
                }
            </PodcastEpisodesWrapper>
        </>
    );
};

export default PodcastEpisodes;
