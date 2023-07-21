import { Layout, ModuleDetail, QueryResult } from '../components';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const GET_MODULE_AND_TRACK = gql`
  query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
    module(id: $moduleId) {
      id
      title
      content
      videoUrl
    }
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        length
      }
    }
  }
`;

const Module = () => {
  const { moduleId, trackId } = useParams();
  const { loading, error, data } = useQuery(GET_MODULE_AND_TRACK, {
    variables: { moduleId, trackId },
  });

  return (
    <Layout fullWidth={true}>
      <QueryResult loading={loading} error={error} data={data}>
        <ModuleDetail track={data?.track} module={data?.module}/>
      </QueryResult>
    </Layout>
  );
};

export default Module;