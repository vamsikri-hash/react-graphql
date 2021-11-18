/* import {
     gql,
     NetworkStatus,
     useLazyQuery,
     useQuery
} from "@apollo/client"; */
import { gql, useLazyQuery } from "@apollo/client";
import React from "react";

const GET_DOG_PHOTO = gql`
  query GetDogPhoto($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

// eslint-disable-next-line react/prop-types
export const DogPhoto = ({ breed }) => {
  const [getDog, { loading, error, data }] = useLazyQuery(GET_DOG_PHOTO);

  // using normal useQuery hook
  /*   const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_DOG_PHOTO,
    {
      variables: { breed },
      notifyOnNetworkStatusChange: true,
    }
  );

  if (networkStatus === NetworkStatus.refetch) return <p>Fetching....</p>; */

  if (loading) return <p>Loading Image.....</p>;
  if (error) return `Error! ${error}`;

  /* when used normal useQuery hook

return (
    <div>
      <img src={data.dog.displayImage} style={{ height: 200, width: 200 }} />
      <button onClick={() => refetch()}>Refetch</button>
    </div>
  ); */

  return (
    <div>
      {data && data.dog && (
        <img src={data.dog.displayImage} style={{ height: 200, width: 200 }} />
      )}
      <button onClick={() => getDog({ variables: { breed } })}>
        Get Photo
      </button>
    </div>
  );
};
