'use client'
import CardXl from "@/components/Cards/CardXl";
import styled from 'styled-components';
import PodcastEpisodeDetail from "./PodcastEpisodeDetail";

export const PodcastDetailWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  .card-detail{
    flex: 1;
    margin: 10px;
  }
  .episodes-detail{
    flex: 2;
    margin: 10px;
  }
`;

export default function PodcastEpisodeDetailPage() {
  return (
    <PodcastDetailWrapper>
      <div className="card-detail">
        <CardXl />
      </div>
      <div className="episodes-detail">
        <PodcastEpisodeDetail />
      </div>
    </PodcastDetailWrapper>
  );
}