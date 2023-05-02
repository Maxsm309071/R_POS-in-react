import React from 'react';
import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const addToCartHandler = () => {
  console.log('Products Page');
};

const Products = ({
  name,
  description,
  imagesrc,
  id,
  addToCartHandler,
}) => {
  return (
    <VStack
      className="product"
      alignItems={['center', 'flex-start']}
      rounded="20"
    >
      <Image
        padding={'1'}
        src={imagesrc}
        boxSize="60"
        objectFit="cover"
        rounded="20"
        borderColor="blackAlpha.500"
      />
      <Heading
        paddingLeft={'2'}
        textAlign={['center', 'left']}
        maxW={'200px'}
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={name}
      />
      <Text paddingLeft={'3'} noOfLines={2} children={description} />

      <Stack
        direction={['column', 'row']}
        justifyContent="center"
        alignItems="center"
        paddingLeft={'2'}
        paddingBottom={'2'}
      >
        <Link to={`/product/${id}`}>
          <Button display={"flex"} justifyContent={'center'}
            variant={'ghost'}
            colorScheme={'orange'}
            onClick={() => addToCartHandler(id)}
          >
            Add to Cart
          </Button>
        </Link>
      </Stack>
    </VStack>
  );
};

const Product = () => {
  const [keyword, setKeyword] = useState('');
  const [product, setProduct] = useState('');

  const productArray = [
    'Margheritta Pizza',
    'Italian Pizza',
    'Thin-Crust Pizza',
    'McMaharaja Burger',
    'French Fries',
    
  ];

  return (
    <Container minH={'95vh'} maxH="container.lg" paddingY={'8'}>
      <Heading children="Search by Products" m={'8'} />

      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Products...."
        type="text"
        focusBorderColor="orange.500"
      />
      <HStack
        overflowX={'auto'}
        paddingY="8"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {productArray.map((item, index) => (
          <Button key={index} onClick={() => setProduct(item)} minW={'40'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        textWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Products
          name={'SampleName'}
          description={'sampleDesc'}
          imagesrc={
            'https://cdn.pixabay.com/photo/2016/03/05/19/02/abstract-1238247_960_720.jpg'
          }
          id={'sampleId'}
          addToCartHandler={addToCartHandler}
        />
      </Stack>
    
    </Container>
  );
};

export default Product;
