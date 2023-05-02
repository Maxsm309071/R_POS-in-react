import React from 'react';
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import './home.css';
import { Link } from 'react-router-dom';
import vg from '../../assets/images/bg0.png';
import { CgGoogle, CgYoutube } from "react-icons/cg";
import { SiSpotify, SiInstagram } from "react-icons/si";

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems={'center'}
          spacing={['16', '56']}
        >
          <VStack width={'full'} alignItems={'center'}>
            <Heading children="Welcome to Restaurant POS" fontSize={'2xl'} />
            <Text children="A Simplified Retail Option" />
            <Link to="/about_page">
              <Button size={'sm'} colorScheme="blue">
                Quick Walkthorugh
              </Button>
            </Link>
          </VStack>

          {/* <Image className='vector' boxSize={'md'} src={vg} objectFit={'contain'} /> */}
        </Stack>
      </div>
      <Box paddingTop={"8"} paddingBottom={"2rem"} bg={"blackAlpha.800"}>
        <Heading
          textAlign={'center'}
          fontFamily="body"
          color={'white '}
          children="OUR CLIENTS"
        />
        <HStack paddingTop={"2rem"} className='brandsBanner' justifyContent={"space-evenly"}>
          <CgGoogle />
          <CgYoutube />
          <SiSpotify />
          <SiInstagram />
        </HStack>
      </Box>
    </section>
  );
};

export default Home;
