"use client";
import { useGetData } from "@/lib/hooks/useGetData";
import Loading from "@/components/Loading";
import { redirect, useParams } from "next/navigation";
import XAudio from "@/components/XAudio";

const PodcastEpisodeDetail = () => {
    const params: any = useParams();
    const { podcastId, episodeId } = params;
    const { data, loading, error } = useGetData(
        `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=100`
    );

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

    return (
        <div style={{ marginTop: "50px" }}>
            {data && currentPodcastEpisode ? (
                <div>
                    {currentPodcastEpisode.trackName}
                    <XAudio url={currentPodcastEpisode.episodeUrl} />
                </div>
            ) : null}
        </div>
    );
};

export default PodcastEpisodeDetail;
