'use client'
import CardXl from "@/components/Cards/CardXl";
import PodcastEpisodeDetail from "@/components/Podcaster/PodcastDetail/PodcastEpisodeDetail";
import Maintemplate from "@/components/Templates/MainTemplate";

export default function HomePageApp() {
  return (
    <Maintemplate>
      <CardXl />
      <PodcastEpisodeDetail />
    </Maintemplate>
  );
}