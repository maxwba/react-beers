import React from 'react';
import { Box, Button, PseudoBox } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

import allBeers from '../img/all-beers.svg';
import randomBeer from '../img/random-beers.svg';
import newBeer from '../img/new-beer.svg';

// eslint-disable-next-line import/prefer-default-export
export const Home = () => {

  return (
    <Box>
      <PseudoBox
        backgroundImage={`url(${allBeers})`}
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        backgroundPosition="center"
        h="34vh"
        d="flex"
        justifyContent="center"
        alignItems="center"
        boxShadow="md"
        overflow="hidden"
        rounded="md"
      >
        <Link to="/allbeers" style={{ textDecoration: 'none' }}><Button variantColor="green" border="green" size="lg" cursor="pointer">Beer catalog</Button></Link>
      </PseudoBox>
      <PseudoBox
        backgroundImage={`url(${randomBeer})`}
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        backgroundPosition="center"
        h="33vh"
        d="flex"
        justifyContent="center"
        alignItems="center"
        boxShadow="md"
        overflow="hidden"
        rounded="md"
      >
        <Button variantColor="red" border="red" size="lg" cursor="pointer">Random beer</Button>
      </PseudoBox>
      <PseudoBox
        backgroundImage={`url(${newBeer})`}
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        backgroundPosition="center"
        h="33vh"
        d="flex"
        justifyContent="center"
        alignItems="center"
        boxShadow="md"
        overflow="hidden"
        rounded="md"
      >
        <Button variantColor="yellow" border="yellow" size="lg" cursor="pointer">Add beer</Button>
      </PseudoBox>
    </Box>
  );
};
