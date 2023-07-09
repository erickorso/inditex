'use client'
import PodcastEpisodeDetailPage from "@/components/Podcaster/PodcastDetail/PodcastEpisodeDetailPage";
import Maintemplate from "@/components/Templates/MainTemplate";

export default function HomePageApp() {
  return (
    <Maintemplate>
      <PodcastEpisodeDetailPage />
    </Maintemplate>
  );
}