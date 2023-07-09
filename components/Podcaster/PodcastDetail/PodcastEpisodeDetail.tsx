"use client";
import { useGetData } from "@/lib/hooks/useGetData";
import Loading from "@/components/Loading";
import { redirect, useParams } from "next/navigation";
import XAudio from "@/components/XAudio";
import { PodcastEpisodesAudioWrapper } from "./style";
import Link from "next/link";

const PodcastEpisodeDetail = () => {
    const params: any = useParams();
    const { podcastId, episodeId } = params;
    const isLocal = process.env.NODE_ENV === 'development';
    const baseUrl = isLocal ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_VERCEL_URL
    const {
        data,
        loading,
        error
    } = useGetData(
        `${baseUrl}/api/podcasts/${podcastId}`
    )

    const entriesEpisodes = data?.results;

    const currentPodcastEpisode =
        entriesEpisodes &&
        entriesEpisodes.find((en: any) => en?.episodeGuid === episodeId);

    if (data && !currentPodcastEpisode) {
        redirect('/podcast')
    }

    {
        if (loading) return <Loading loading={loading} error={error} />;
    }

    const createMarkup = (html: any) => {
        return { __html: html };
    };

    return (
        <PodcastEpisodesAudioWrapper>
            <div className="go-back"><Link href={`/podcast/${podcastId}`}>Back</Link></div>
            {data && currentPodcastEpisode ? (
                <div>
                    <h3>{currentPodcastEpisode.trackName}</h3>
                    <p dangerouslySetInnerHTML={createMarkup(currentPodcastEpisode.description)} />
                    <XAudio url={currentPodcastEpisode.episodeUrl} />
                </div>
            ) : null}
        </PodcastEpisodesAudioWrapper>
    );
};

export default PodcastEpisodeDetail;
