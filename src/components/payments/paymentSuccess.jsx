import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { Link } from "react-router-dom";
import React from 'react';

const PaymentSuccess = () => {
  return (
    <Container h={'90vh'} p={'16'}>
      <Heading my={'8'} textAlign={'center'}>
        You have Silver Pack
      </Heading>
      <VStack
        boxShadow={'lg'}
        pb={'16'}
        alignItems={'center'}
        borderRadius={'lg'}
      >
        <Box
          w={'full'}
          bg={'orange'}
          p={'4'}
          css={{ borderRadius: '8px 8px 0 0' }}
        >
          <Text color={'black'}>Payment Success</Text>
        </Box>

        <Box p={'4'}>
          <VStack textAlign={'center'} px="8" mt="4" spacing={'8'}>
            <Text>Congratulations! You are a Pro member.</Text>

            <Heading size={'4xl'}>
              <RiCheckboxCircleFill />
            </Heading>
          </VStack>
        </Box>
        <Link to="/profile">
          <Button variant={'ghost'}>Go to Profile</Button>
        </Link>

        <Heading fontSize={'sm'}>Reference id: from Backend</Heading>
      </VStack>
    </Container>
  );
};

export default PaymentSuccess;
