import React from 'react';
import Nav from './Nav';
import { Container } from '@chakra-ui/react';

export default function Layout({children}) {
  return (
    <>
      <Nav />
      <Container
        size="60vw"
      >
        {children}
      </Container>
    </>
  )
}
