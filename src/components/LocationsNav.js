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

  return (
    <ul>
      {locations.nodes.map(location => (
        <li key={location.id}>
          <Link to={`/location/${location.slug}`}>{location.name}</Link>
          {location.slug === 'location' ? <LocationsNav /> : ''}
        </li>
      ))}
    </ul>
  );
}
