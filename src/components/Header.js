import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import Logo from './navbar/Logo';
import MenuLinks from './navbar/MenuLinks';
import MenuToggle from './navbar/MenuToggle';

export default function Header (props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      pt={[4, 4, 6, 8]}
      pb={[4, 4, 6, 8]}
      {...props}
    >
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen}/>
      <MenuLinks isOpen={isOpen}/>
    </Flex>
  )
}
