import React from 'react';
import { Layout, QueryResult } from '../components';
import { gql, useQuery } from '@apollo/client';
import { Track } from '../gql/graphql';
import TrackCard from '../containers/track-card';

/** TRACKS query to retrieve all tracks */
const TRACKS = gql`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { data, error, loading } = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult loading={loading} error={error} data={data}>
        {data?.tracksForHome?.map((track: Track) => (
          <TrackCard key={track.id} track={track}/>
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
