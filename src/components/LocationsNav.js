import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

export default function LocationsNav() {
  const { locations } = useStaticQuery(graphql`
    query {
      locations: allContentfulLocation {
        nodes {
          id
          name
          slug
        }
      }
    }
  `);

  console.log(locations);

  return (
    <ul>
      {locations.nodes.map(location => (
        <li key={location.id}>
          <Link to={`/location/${location.slug}`}>{location.name}</Link>
        </li>
      ))}
    </ul>
  );
}
