import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import LocationsNav from './LocationsNav';

export default function Nav() {
  const { pages } = useStaticQuery(graphql`
    query {
      pages: allContentfulPage {
        nodes {
          id
          title
          slug
        }
      }
    }
  `);

  return (
    <nav>
      <ul>
        {pages.nodes.map(page => (
          <li key={page.id}>
            <Link to={`/${page.slug !== 'home' ? page.slug : ''}`}>{page.title}</Link>
            {page.slug === 'location' ? <LocationsNav /> : ''}
          </li>
        ))}
      </ul>
    </nav>
  );
}
