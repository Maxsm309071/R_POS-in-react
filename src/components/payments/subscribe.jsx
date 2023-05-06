import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const Subscribe = () => {
  return (
    <Container minH="90vh" p="16">
      <Heading children="Welcome" my="8" textAlign={'center'} />
<HStack>
      <VStack
        boxShadow={'lg'}
        alignItems="stretch"
        borderRadius={'lg'}
        spacing={'0'}
      >
        <Box bg={'orange.400'} p={'4'} css={{ borderRadius: ' 8px 8px 0 0 ' }}>
          <Heading color={'black'} children={'Silver Pack - ₹500 '} />
        </Box>

        <Box p={'4'}>
          <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
            <Text
              children={'Buy Membership to get access to all the features.'}
            />

            <Heading size={'md'} children="₹500 only" />
          </VStack>

          <Button my={'8'} w={'full'} colorScheme={'orange'}>
            Buy Now
          </Button>
        </Box>

        <Box
          bg={'blackAlpha.600'}
          p={'4'}
          __css={{ borderRadius: '0 0 8px 8px' }}
        >
          <Heading
            color={'white'}
            textTransform={'uppercase'}
            size={'sm'}
            children="100% refund at cancelation"
          />
          <Text
              fontSize={'xs'}
              color={'white'}
              children={'*Terms and Conditions Apply'}
            />
        </Box>
      </VStack>
      <VStack
        boxShadow={'lg'}
        alignItems="stretch"
        borderRadius={'lg'}
        spacing={'0'}
      >
        <Box bg={'orange.400'} p={'4'} css={{ borderRadius: ' 8px 8px 0 0 ' }}>
          <Heading color={'black'} children={'Gold Pack - ₹900 '} />
        </Box>

        <Box p={'4'}>
          <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
            <Text
              children={'Buy Membership to get access to all the features.'}
            />

            <Heading size={'md'} children="₹900 only" />
          </VStack>

          <Button my={'8'} w={'full'} colorScheme={'orange'}>
            Buy Now
          </Button>
        </Box>

        <Box
          bg={'blackAlpha.600'}
          p={'4'}
          __css={{ borderRadius: '0 0 8px 8px' }}
        >
          <Heading
            color={'white'}
            textTransform={'uppercase'}
            size={'sm'}
            children="100% refund at cancelation"
          />
          <Text
              fontSize={'xs'}
              color={'white'}
              children={'*Terms and Conditions Apply'}
            />
        </Box>
      </VStack>
      </HStack>
    </Container>
  );
};

export default Subscribe;
