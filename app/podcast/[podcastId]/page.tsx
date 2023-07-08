'use client'
import CardXl from "@/components/Cards/CardXl";
import PodcastEpisodes from "@/components/Podcaster/PodcastDetail/PodcastEpisodes";
import Maintemplate from "@/components/Templates/MainTemplate";

export default function HomePageApp() {
  return (
    <Maintemplate>
      <CardXl />
      <PodcastEpisodes />
    </Maintemplate>
  );
}