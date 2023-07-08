'use client'
import { useGetData } from '@/lib/hooks/useGetData';
import Loading from '@/components/Loading';
import { useParams } from 'next/navigation'
import { changeDate, millisToTime } from '@/lib/helpers/functions';
import Link from 'next/link';

const PodcastEpisodes = () => {
    const params = useParams()
    const { podcastId } = params
    const { 
        data,
        loading,
        error
    } = useGetData(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=100`)

    const entriesEpisodes = data?.results

    const info = (entriesEpisodes && entriesEpisodes[0]) ? entriesEpisodes[0] : { trackCount: 0}

    const { trackCount } = info

    let copyArr = (entriesEpisodes && entriesEpisodes[0]) ? [...entriesEpisodes] : []

    if (Array.isArray(entriesEpisodes) && entriesEpisodes.length > 0) {
        copyArr.shift();
    }

    {
        if(loading) return <Loading loading={loading} error={error}/>
    }

    return (
        <>
            <div className='counter'>{trackCount}</div>
            <ul style={{marginTop: '50px'}}>
                <li className='list-header'>
                    <div className='name'>Title</div>
                    <div className='date'>Date</div>
                    <div className='duration'>Duration</div>
                </li>
                { 
                    data && copyArr  ? 
                    copyArr.map((item: any) => {
                        return (
                            <li key={item.trackId}>
                                <Link href={`/podcast/${podcastId}/episode/${item.episodeGuid}`}>
                                    <div className='name'>{item.trackName}</div>
                                    <div className='date'>{changeDate(item.releaseDate)}</div>
                                    <div className='duration'>{millisToTime(item.trackTimeMillis)}</div>
                                </Link>
                            </li>
                        )
                    })
                    : null
                }
            </ul> 
        </>
    );
};

export default PodcastEpisodes;
