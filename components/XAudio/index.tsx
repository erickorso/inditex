import styled from 'styled-components';

interface XAudioProps {
  url: string;
}

const AudioContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AudioElement = styled.audio`
  margin-right: 10px;
`;

const XAudio: React.FC<XAudioProps> = ({ url }) => (
  <AudioContainer>
    {!!url && <AudioElement controls src={url} data-testid="audio-element" />}
  </AudioContainer>
)

export default XAudio;
