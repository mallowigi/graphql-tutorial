import { Layout, QueryResult } from '../components';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import TrackDetail from '../components/track-detail';

const GET_TRACK = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      description
      numberOfViews
      modules {
        id
        title
        length
      }
    }
  }
`;

const Track = () => {
  const { trackId } = useParams();
  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: { trackId },
  });

  return (
    <Layout>
      <QueryResult loading={loading} error={error} data={data}>
        <TrackDetail track={data?.track}/>
      </QueryResult>
    </Layout>
  );
};

export default Track;