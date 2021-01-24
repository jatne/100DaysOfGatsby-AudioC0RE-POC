import React from 'react';
import { Container } from '@chakra-ui/react';
import Header from './Header';

export default function Layout({children}) {
  return (
    <>
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
