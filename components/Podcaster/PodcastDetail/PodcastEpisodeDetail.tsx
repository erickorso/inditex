"use client";
import { useGetData } from "@/lib/hooks/useGetData";
import Loading from "@/components/Loading";
import { redirect, useParams } from "next/navigation";
import XAudio from "@/components/XAudio";
import { PodcastEpisodesAudioWrapper } from "./style";
import Link from "next/link";
import ROUTES from "@/lib/constants/routes.ctte";
import { createMarkup, isLocal } from "@/lib/helpers/functions";

const PodcastEpisodeDetail = () => {
    const params: any = useParams();
    const { podcastId, episodeId } = params;
    const baseUrl = isLocal() ? ROUTES.baseUrl.local : ''
    const {
        data,
        loading,
        error
    } = useGetData(
        `${baseUrl}/api${ROUTES.router.podcast}/${podcastId}`
    )

    const entriesEpisodes = data?.results;

    const currentPodcastEpisode =
        entriesEpisodes &&
        entriesEpisodes.find((en: any) => en?.episodeGuid === episodeId);

    if (data && !currentPodcastEpisode) {
        redirect(ROUTES.router.podcast)
    }

    {
        if (loading || error) return <Loading loading={loading} error={error} />;
    }

    return (
        <PodcastEpisodesAudioWrapper data-testid="podcast-episode-detail">
            <div className="go-back">
                <Link href={`${ROUTES.router.podcast}/${podcastId}`}>Back</Link>
            </div>
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
