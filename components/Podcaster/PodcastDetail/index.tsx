'use client'
import CardXl from "@/components/Cards/CardXl";
import PodcastEpisodes from "@/components/Podcaster/PodcastDetail/PodcastEpisodes";
import styled from 'styled-components';

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

export default function PodcastDetail() {
    return (
        <PodcastDetailWrapper>
            <div className="card-detail">
                <CardXl />
            </div>
            <div className="episodes-detail">
                <PodcastEpisodes />
            </div>
        </PodcastDetailWrapper>
    );
}