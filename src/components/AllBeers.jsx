/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import {
  Box, Spinner, PseudoBox, Input,
} from '@chakra-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { setData } from '../app/allBeers';
import { setTerm } from '../app/searchBeers';

// eslint-disable-next-line import/prefer-default-export
export const AllBeers = () => {
  const AllBeersState = (useSelector((state) => state.allBeers.data));
  const SearchTerm = (useSelector((state) => state.searchBeer.searchTerm));
  const isLoading = (useSelector((state) => state.loading.isLoading));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setData(SearchTerm));
  }, [SearchTerm]);


  return (
    <Box display="flex" flexDirection="column" justifyContent="left" alignItems="center">
      <Box width="100vw" d="flex" justifyContent="center" m="10px">
        <Input data-testid="input-test" width="88%" placeholder="Tap to search" value={SearchTerm} onChange={(event) => dispatch(setTerm(event.target.value))} />
      </Box>
      {isLoading ? (
        <Box h="100vh" d="flex" alignItems="center" justifyContent="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Box>
      ) : (
        <Box display="flex" flexWrap="wrap" justifyContent="space-evenly">
          {AllBeersState.map((beer) => (
            <Box key={beer._id} display="flex" m="10px">
              <PseudoBox
                role="group"
                maxW="sm"
                overflow="hidden"
                rounded="md"
                p={5}
                cursor="pointer"
                bg="white"
                boxShadow="md"
                _hover={{ bg: 'blue.500' }}
                data-testid="beers"
              >
                <PseudoBox
                  fontWeight="semibold"
                  fontSize="lg"
                  mb={1}
                  color="gray.900"
                  _groupHover={{ color: 'white' }}
                  d="flex"
                  justifyContent="center"
                >
                  <img src={beer.image_url} alt={beer.name} style={{ width: '10vh', height: '30vh' }} />
                </PseudoBox>
                <PseudoBox
                  fontWeight="semibold"
                  fontSize="lg"
                  mb={1}
                  color="gray.900"
                  _groupHover={{ color: 'white' }}
                  marginTop="20px"
                >
                  {beer.name}
                </PseudoBox>
                <PseudoBox color="gray.700" mb={2} _groupHover={{ color: 'white' }} marginTop="20px">
                  {beer.description}
                </PseudoBox>
              </PseudoBox>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};
