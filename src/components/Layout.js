import React from 'react';
import { Container } from '@chakra-ui/react';
import Header from './Header';
import SEO from './SEO';

export default function Layout({children}) {
  return (
    <>
      <SEO />
      <Container
        maxW={['100%', '100%', '90vw']}
        bg="white"
        color="gray.800"
        as="header">
        <Header />
        {children}
      </Container>
    </>
  )
}
